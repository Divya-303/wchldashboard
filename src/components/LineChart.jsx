import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  // const divStyle = {
  //   height: props.height + 'px',
  // };

  var label2 = [];
  if (props.type === "curve") {
    for (let state of props.state) {
      label2.push(state.shortCode);
    }
  }

  const label1 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ];

  const data1 = {
    labels: label1,
    datasets: [
      {
        label: "Calls",
        backgroundColor: ({ chart: { ctx } }) => {
          ctx.save();
          const gradient = ctx.createLinearGradient(0, 0, 0, 150);
          gradient.addColorStop(0, "rgba(13, 98, 239, 1)");
          gradient.addColorStop(0.5, "rgba(84, 109, 243, 0.3)");
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
          // More config for your gradient
          ctx.restore();
          return gradient;
        },
        borderColor: "rgb(13 98 239)",
        data: [20, 10, 35, 5, 40, 10, 18, 33],
        fill: true,
        // fill: {
        //   target: "origin",
        //   above: "rgb(51 80 232 / 43%)"
        //   // "rgb(51 80 232 / 43%)"
        // }
      },
    ],
  };

  const data2 = {
    labels: label2,
    datasets: [
      {
        tension: 0.5,
        label: "Calls",
        // backgroundColor: Custom.draw(),
        backgroundColor: ({ chart: { ctx } }) => {
          ctx.save();
          // ctx.shadowColor = 'black'
          // ctx.shadowBlur = 10;
          // ctx.shadowOffsetX = 0;
          // ctx.shadowOffsetY = 4;
          // ctx.lineWidth = 10;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(13, 98, 239, 0.7)");
          gradient.addColorStop(0.5, "rgba(13, 98, 239, 0.4)");
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
          // More config for your gradient
          ctx.restore();
          return gradient;
        },
        // borderColor: "rgb(13 98 239)",
        borderColor: ({ chart: { ctx } }) => {
          ctx.save();
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba( 13, 98, 239, 1)");
          gradient.addColorStop(0.5, "rgba(7, 247, 240, 1)");
          gradient.addColorStop(1, "rgba( 16, 9, 247, 1)");
          // More config for your gradient
          ctx.restore();
          return gradient;
        },
        data: [
          40, 10, 35, 5, 18, 41, 23, 22, 10, 31, 6, 28, 33, 70, 28, 39, 14, 25,
          65, 24, 5, 37, 16, 28, 44, 29, 11, 25, 10, 49, 12, 40, 38, 22, 57, 38,
        ],
        // fill: true
        // fill: {
        //   target: "origin",
        //   above: "rgb(51 80 232 / 43%)"
        //   // "rgb(51 80 232 / 43%)"
        // }
      },
    ],
  };

  const options1 = {
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false } },
      y: {
        border: { dash: [4, 4] },
        ticks: { maxTicksLimit: 4 },
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: "rgb(13 98 239 / 90%)",
      },
      legend: {
        // position: '',
        labels: {
          // boxWidth: 10
          usePointStyle: true,
          pointStyle: "triangle",
        },
      },
    },
  };

  const options2 = {
    // animations: {
    //   tension: {
    //     duration: 2500,
    //     easing: 'linear',
    //     from: 0,
    //     to: 1,
    //     loop: true
    //   }},
    maintainAspectRatio: false,
    bezierCurve: false,
    scales: {
      x: { grid: { display: false } },
      y: {
        border: { dash: [4, 4] },
        ticks: { maxTicksLimit: 4 },
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: "rgb(13 98 239 / 90%)",
        callbacks: {
          title: function (tooltipItem) {
            for (let state of props.state) {
              if (state.shortCode === tooltipItem[0].label) {
                return state.stateName;
              }
            }
          },
        },
      },
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "triangle",
        },
      },
    },
  };

  return (
    <>
      {props.type === "line" && (
        <div>
          {/* <div class="horizontal-scroll">
      <div className="chart-box-line"> */}
          {/* <div style={{height:`${props.height + 'px'}`}}>     */}
          <Line data={data1} height={props.height} options={options1} />
          {/* </div> */}
        </div>
      )}

      {props.type === "curve" && (
        <div className="shadowParent">
          {/* <div style={{height:`${props.height + 'px'}`}} className='shadowParent'> */}
          <Line data={data2} height={props.height} options={options2} />
        </div>
      )}
    </>
  );
};

export default LineChart;
