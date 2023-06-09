import os
import configparser

import frappe
from .bench import get_bench_path, get_bench_name, get_site_path

"""
supervisor.conf follows configparser format (Win-INI style)
We will have a new process group for all the telegram-bots
"""


def add_supervisor_entry(
        telegram_bot, polling=False, poll_interval=0,
        webhook=False, webhook_port=0, webhook_url=None):

    # Validate telegram_bot exists
    if not frappe.db.exists("Telegram Bot", telegram_bot):
        frappe.throw("TelegramBot: {} do not exist".format(telegram_bot))

    config = get_supervisor_config()

    # Program
    program_name, program = get_bot_program(
        config=config, telegram_bot=telegram_bot, polling=polling, poll_interval=poll_interval,
        webhook=webhook, webhook_port=webhook_port, webhook_url=webhook_url)

    config[program_name] = program

    # Bot Group
    group_name = get_bot_group_name()
    bot_programs = []
    if group_name in config:
        bot_programs = config[group_name]["programs"].split(",")

    group_program_name = program_name.replace("program:", "")
    if group_program_name not in bot_programs:
        bot_programs.append(group_program_name)
    config[group_name] = {"programs": ",".join(bot_programs)}

    write_supervisor_config(config)


def remove_supervisor_entry(telegram_bot):
    config = get_supervisor_config()

    # Remove Program Entry
    program_name = get_bot_program_name(telegram_bot)
    if program_name in config:
        del config[program_name]

    # Remove Group Entry
    group_name = get_bot_group_name()
    bot_programs = []
    if group_name in config:
        bot_programs = config[group_name]["programs"].split(",")

    group_program_name = program_name.replace("program:", "")
    if group_program_name in bot_programs:
        bot_programs.remove(group_program_name)

    if len(bot_programs):
        config[group_name] = {"programs": ",".join(bot_programs)}
    elif group_name in config:
        del config[group_name]

    write_supervisor_config(config)


def get_bot_program(config, telegram_bot, **kwargs):
    program_name = get_bot_program_name(telegram_bot)
    logs = get_bot_log_paths(telegram_bot)

    command = f"bench --site {frappe.local.site} telegram start-bot " + telegram_bot
    for k, v in kwargs.items():
        if not v:
            continue
        k = k.replace("_", "-")
        if isinstance(v, bool):
            command += f" --{k}"
        else:
            command += f" --{k} {v}"

    program = {
        "command": command,
        "priority": 1,
        "autostart": "true",
        "autorestart": "true",
        "stdout_logfile": logs[0],
        "stderr_logfile": logs[1],
        "user": guess_user_from_web_program(config=config),
        "directory": os.path.abspath(get_site_path(".."))
    }

    return program_name, program


def get_supervisor_config() -> configparser.ConfigParser():
    supervisor_conf = os.path.join(get_bench_path(), "config", "supervisor.conf")
    if not os.path.exists(supervisor_conf):
        raise Exception(
            "Please generate supervisor file using 'bench setup supervisor' before this action")

    config = configparser.ConfigParser()
    config.read(supervisor_conf)

    return config


def write_supervisor_config(config: configparser.ConfigParser):
    supervisor_conf = os.path.join(get_bench_path(), "config", "supervisor.conf")
    with open(supervisor_conf, 'w') as configfile:
        config.write(configfile)

    # TODO: Ask to restart supervisorctl or do automatically


def guess_user_from_web_program(config: configparser.ConfigParser):
    web_program_name = f"program:{get_bench_name()}-frappe-web"
    if web_program_name not in config:
        return

    return config[web_program_name]["user"]


def get_bot_log_paths(telegram_bot):
    logs_path = os.path.abspath(os.path.join("..", "logs"))
    stdout = os.path.join(logs_path, f"bot-{telegram_bot}.log")
    stderr = os.path.join(logs_path, f"bot-{telegram_bot}.error.log")

    return stdout, stderr


def get_bot_program_name(telegram_bot):
    return f"program:{get_bench_name()}-telegram-bot-{telegram_bot}"


def get_bot_group_name():
    return f"group:{get_bench_name()}-telegram-bots"



def add_supervisor_service_to_confd(service_name, service_command, service_directory, service_user):
    # Create Supervisor configuration file
    config_file_path = f"/etc/supervisor/conf.d/{service_name}.conf"
    config_content = f"""
        [program:{service_name}]
        command={service_command}
        directory={service_directory}
        user={service_user}
        autostart=true
        autorestart=true
        redirect_stderr=true
        stdout_logfile=/var/log/{service_name}.log
        """
    # Write the configuration to the file
    with open(config_file_path, 'w') as config_file:
        config_file.write(config_content)

    # Update Supervisor
    frappe.utils.execute_in_shell("sudo supervisorctl reread")
    frappe.utils.execute_in_shell("sudo supervisorctl update")

    # Start the service
    frappe.utils.execute_in_shell(f"sudo supervisorctl restart all")

# Example usage
# add_supervisor_service(
#     "my_service",
#     "/path/to/my_service_command",
#     "/path/to/service_directory",
#     "my_service_user"
# )
