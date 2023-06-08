import React from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = (props) => {
  const data = {
    labels: [
      "Information gathering",
      "Counselling",
      "Psychological support",
      "Physical intervention",
      "DCPU",
    ],
    datasets: [
      {
        label: "Cases",
        data: [100, 210, 30, 150, 75],
        // backgroundColor: [
        //   'rgb(52, 191, 163)',
        //   'rgb(93, 120, 255)',
        //   'rgb(253, 60, 151)',
        //   'rgb(255, 159, 67)',
        //   'rgb(3 200 249)'
        // ],

        backgroundColor: [
          "rgb(5 71 239)",
          "rgb(99 143 255)",
          "rgb(0 140 235)",
          // 'rgb(54, 162, 235)',
          // 'rgb(15 121 193)',
          "rgb(3 200 249)",
          // 'rgb(110 241 237)',
          "rgb(64 231 226)",
        ],
        // borderColor: [
        //   'rgb(5 71 239 / 0.6)',
        //   'rgb(99 143 255 / 0.6)',
        //   'rgb(0 140 235 / 0.6)',
        //   // 'rgb(54, 162, 235)',
        //   // 'rgb(15 121 193)',
        //   'rgb(3 200 249 / 0.6)',
        //   // 'rgb(110 241 237)',
        //   'rgb(64 231 226 / 0.6)'
        // ],
        hoverOffset: 4,
      },
    ],
  };

  const option = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "80%",
    borderRadius: 5,
    // layout: {
    //   padding: 10
    // },
    plugins: {
      tooltip: {
        // enabled: false,
        xAlign: "right",
        yAlign: "center",
        backgroundColor: function (tooltipItem) {
          const bgColor = tooltipItem.tooltip.labelColors[0].backgroundColor;
          return bgColor;
        },
        titleMarginBottom: 0,
        callbacks: {
          label: function (tooltipItem) {
            return "";
          },
        },
      },
      legend: {
        position: "right",
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "triangle",
          // pointStyle: 'rectRounded',
          // pointStyle: 'rectRot',
          // boxWidth: 3,
        },
      },
    },
  };
  // Hover label plugin block
  const hoverLabel = {
    id: "hoverLabel",
    afterDraw: (chart, args, options) => {
      const {
        ctx,
        chartArea: { left, right, top, bottom, width, height },
      } = chart;
      ctx.save();
      if (chart._active.length > 0) {
        //  const textLabel = chart.config._config.data.labels[chart._active[0].index];
        const numberLabel =
          chart.config._config.data.datasets[chart._active[0].datasetIndex]
            .data[chart._active[0].index];
        const color =
          chart.config._config.data.datasets[chart._active[0].datasetIndex]
            .backgroundColor[chart._active[0].index];
        //  console.log(options);
        ctx.font = "bold 40px Roboto";
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(numberLabel, width / 2, (height + top) / 2);
        // `${textLabel}: ${numberLabel}`
        ctx.restore();
      }
    },
  };

  return (
    // <div style={{height:props.height}}>
    <div>
      <Doughnut
        data={data}
        height={props.height}
        options={option}
        plugins={[hoverLabel]}
      />
    </div>
  );
};

export default DoughnutChart;
