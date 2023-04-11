import React from 'react';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
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
        <Bar data={data} height={300} />
        {/* height={600} width={500} height={300} */}
        </div>
  )
}

export default BarChart;