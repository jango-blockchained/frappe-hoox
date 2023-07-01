// frappe.ui.form.on("Trades", {
//   onload: async (frm) => {
//     frm.fields_dict.chart.wrapper.innerHTML =
//       '<div id="chart_price" style="width: 100%; height: 300px;"></div>' +
//       '<div id="chart_vol" style="width: 100%; height: 150px;"></div>';
//     await frappe.call({
//       method: "hoox.action.fetch_ohlcv",
//       args: {
//         exchange_id: frm.doc.exchange,
//         market: frm.doc.market_type,
//         symbol: frm.doc.symbol,
//         timeframe: "15m",
//       },
//       callback: async (response) => {
//         const labels = response.message.map((ohlcv) => {
//           let date = new Date(ohlcv[0]);
//           return date.toLocaleString("en-US", {
//             weekday: "short",
//             hourCycle: "h24",
//             month: "numeric",
//             day: "numeric",
//             hour: "numeric",
//             minute: "numeric",
//           });
//         });
//         const values = response.message.map((ohlcv) => {
//           return ohlcv[4];
//         });

//         const volumes = response.message.map((ohlcv) => {
//           return ohlcv[5];
//         });

//         const chart_price = await new frappe.Chart("#chart_price", {
//           title: `${frm.doc.symbol} Price Chart`,
//           data: {
//             labels: labels,
//             datasets: [
//               {
//                 name: "Price",
//                 values: values,
//                 chartType: "line",
//               },
//             ],
//           },
//           colors: ["hsl(73, 100%, 61%)"],
//           type: "line",
//           height: 300,
//           // annotations: [
//           //   {
//           //     type: "line",
//           //     value: 0.07,
//           //     series: "Price",
//           //     label: frm.doc.action.toUpperCase(),
//           //     backgroundColor: "#ff8800",
//           //     borderColor: "#ff7300",
//           //     borderWidth: 2,
//           //     x: new Date(frm.doc.creation), // Modify the x value to a valid JavaScript Date object
//           //   },
//           // ],
//           axisOptions: {
//             xIsSeries: true,
//             xAxisMode: "tick",
//             tickFormat: "%Y-%m-%d",
//             yAxisMode: "span",
//             yAxisTickCount: 5,
//             yAxisLabel: "Price",
//             yAxisFormat: "$ 0,0",
//           },
//           tooltipOptions: {
//             formatTooltipX: (d) => (d instanceof Date ? d.toDateString() : d),
//             formatTooltipY: (d) => "$ " + d,
//           },
//           limit: 100,
//         });
//         // --
//         const chart_vol = await new frappe.Chart("#chart_vol", {
//           title: `${frm.doc.symbol} Volume Chart`,
//           data: {
//             labels: labels,
//             datasets: [
//               {
//                 name: "Volume",
//                 values: volumes,
//                 chartType: "bar",
//               },
//             ],
//           },
//           colors: ["hsl(332, 100%, 41%)"],
//           type: "bar",
//           height: 150,
//           axisOptions: {
//             xIsSeries: true,
//             xAxisMode: "tick",
//             tickFormat: "%Y-%m-%d",
//             yAxisMode: "span",
//             yAxisTickCount: 5,
//             yAxisLabel: "Qty.",
//             yAxisFormat: "0,0",
//           },
//           tooltipOptions: {
//             formatTooltipX: (d) => (d instanceof Date ? d.toDateString() : d),
//             formatTooltipY: (d) => "x " + d,
//           },
//           limit: 100,
//         });
//       },
//     });
//   },
// });
async function createChart(
  elementId,
  title,
  yAxisLabel,
  yAxisFormat,
  chartType,
  labels,
  values,
  colors
) {
  return new frappe.Chart(elementId, {
    title: title,
    data: {
      labels: labels,
      datasets: [
        {
          name: yAxisLabel,
          values: values,
          chartType: chartType,
        },
      ],
    },
    colors: colors,
    type: chartType,
    height: chartType === "line" ? 300 : 150,
    axisOptions: {
      xIsSeries: true,
      xAxisMode: "tick",
      tickFormat: "%Y-%m-%d",
      yAxisMode: "span",
      yAxisTickCount: 5,
      yAxisLabel: yAxisLabel,
      yAxisFormat: yAxisFormat,
    },
    tooltipOptions: {
      formatTooltipX: (d) => (d instanceof Date ? d.toDateString() : d),
      formatTooltipY: (d) => yAxisFormat.charAt(0) + " " + d,
    },
    limit: 100,
  });
}

frappe.ui.form.on("Trades", {
  onload: async (frm) => {
    frm.fields_dict.chart.wrapper.innerHTML =
      '<div id="chart_price" style="width: 100%; height: 300px;"></div>' +
      '<div id="chart_vol" style="width: 100%; height: 150px;"></div>';
    await frappe.call({
      method: "hoox.action.fetch_ohlcv",
      args: {
        exchange_id: frm.doc.exchange,
        market: frm.doc.market_type,
        symbol: frm.doc.symbol,
        timeframe: "15m",
      },
      callback: async (response) => {
        const data = response.message.map((ohlcv) => {
          let date = new Date(ohlcv[0]);
          return {
            label: date.toLocaleString("en-US", {
              weekday: "short",
              hourCycle: "h24",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            }),
            value: ohlcv[4],
            volume: ohlcv[5],
          };
        });
        const labels = data.map((d) => d.label);
        const values = data.map((d) => d.value);
        const volumes = data.map((d) => d.volume);

        const chart_price = await createChart(
          "#chart_price",
          `${frm.doc.symbol} Price Chart`,
          "Price",
          "$ 0,0",
          "line",
          labels,
          values,
          ["hsl(73, 100%, 61%)"]
        );

        const chart_vol = await createChart(
          "#chart_vol",
          `${frm.doc.symbol} Volume Chart`,
          "Qty.",
          "0,0",
          "bar",
          labels,
          volumes,
          ["hsl(332, 100%, 41%)"]
        );
      },
    });
  },
});
