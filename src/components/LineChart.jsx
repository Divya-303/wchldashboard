import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const labels = ["January", "February", "March", "April"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Calls",
        backgroundColor: "rgb(13 98 239)",
        borderColor: "rgb(13 98 239)",
        data: [20, 10, 35, 5],
      },
    ],
  };

const options = {
  maintainAspectRatio: false,
  scales: {
    x: { grid: {display: false} },
    y: { 
      border:{dash: [4, 4]},
      ticks: {maxTicksLimit: 5}, 
    }
  },
  plugins: {
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