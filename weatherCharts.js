// get required data
let timeLabels = [
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
  "9pm",
  "10pm",
  "11pm",
  "12pm",
];
let temperatureValues = [19, 18, 19, 16, 15, 13, 11, 11.5, 14, 16, 18];
let precipitationValues = [99, 95, 65, 52, 50, 45, 20, 16, 22, 23, 12, 10];

let currentTimeIndex = 5;

const temperatureColor = "#E5601F";
const precipitationColor = "#16fff4";

const refreshChart = (canvasID, accentColor, dataValues) => {
  const ctx = document.getElementById(canvasID);
  Chart.register(ChartDataLabels);
  new Chart(ctx, {
    type: "line",
    data: {
      labels: timeLabels,
      datasets: [
        {
          label: "°C",
          data: dataValues,
          borderWidth: 1,
          tension: 0.4,
          borderColor: accentColor,
          datalabels: {
            align: "end",
            anchor: "end",
          },
        },
      ],
    },
    options: {
      layout: {
        padding: {
          top: 25,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            maxTicksLimit: 6,
            font: {
              family: "Manrope",
            },
          },
        },
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          // backgroundColor: "#e5601f",
          // borderRadius: 4,
          color: function (context) {
            if (context.dataIndex == currentTimeIndex) return accentColor;
            return context.dataIndex % 2 == 0
              ? `${accentColor}40`
              : "#00000000";
          },
          font: {
            family: "Manrope",
          },
          // formatter: Math.round,
          padding: 2,
        },
      },
      elements: {
        point: {
          radius: customRadius,
          display: true,
          backgroundColor: accentColor,
        },
      },
    },
    plugins: [[ChartDataLabels]],
  });

  function customRadius(context) {
    let index = context.dataIndex;
    return index === currentTimeIndex ? 6 : 0;
  }
};

refreshChart("temperatureChart", temperatureColor, temperatureValues);
refreshChart("precipitationChart", precipitationColor, precipitationValues);
