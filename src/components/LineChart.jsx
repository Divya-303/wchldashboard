import React from 'react';
// import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
// import context from 'react-bootstrap/esm/AccordionContext';

const LineChart = () => {

  const labels = ["January", "February", "March", "April", "May", "June", "July", "August" ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Calls",
        // backgroundColor: "rgb(13 98 239)",
        backgroundColor: ({chart: {ctx}}) => {
          ctx.save(); 
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, 'rgba(13, 98, 239, 1)');
          gradient.addColorStop(0.5, 'rgba(84, 109, 243, 0.3)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          // More config for your gradient
          ctx.restore();
          return gradient;
        },
        borderColor: "rgb(13 98 239)",
        data: [20, 10, 35, 5, 40, 10, 18, 33],
        fill: true
        // fill: {
        //   target: "origin",
        //   above: "rgb(51 80 232 / 43%)"
        //   // "rgb(51 80 232 / 43%)"
        // }
      },
      
    ],
  };



const options = {
  maintainAspectRatio: false,
  scales: {
    x: { grid: {display: false} },
    y: { 
      border:{dash: [4, 4]},
      ticks: {maxTicksLimit: 4}, 
    }
  },
  plugins: {
    tooltip: {
      backgroundColor: "rgb(13 98 239 / 90%)"
    },
    legend: {
      // position: '',
      labels: {
        // boxWidth: 10
        usePointStyle: true,
        pointStyle: 'triangle'
      }
    }
  }
}

  return (
    <div>
    <Line data={data} height={200} options={options}/>
  </div>
  )
}

export default LineChart;