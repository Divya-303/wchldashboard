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
        backgroundColor: "rgb(68 134 219)",
        borderColor: "rgb(68 134 219)",
        data: [20, 10, 35, 5],
      },
    ],
  };
  return (
    <div>
    <Line data={data} height={200} options={{ maintainAspectRatio: false }}/>
  </div>
  )
}

export default LineChart;