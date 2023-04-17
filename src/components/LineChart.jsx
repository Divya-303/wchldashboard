import React from 'react';
import Chart from 'chart.js/auto';

import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const labels = ["January", "February", "March", "April"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Child Cases",
        backgroundColor: "rgb(68 134 219)",
        borderColor: "rgb(68 134 219)",
        data: [20, 10, 35, 5],
      },
    ],
  };
  return (
    <div>
    <Line data={data} height={300} />
  </div>
  )
}

export default LineChart;