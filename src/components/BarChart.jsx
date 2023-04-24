import React from 'react';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  // const labels = ["AD","AR","AS","BR","CG","DL","GA","GJ","HR","HP","JK","JH","KA","KL","LD","MP","MH","MN","ML","MZ","NL","OD","PY","PB","RJ","SK","TN","TS","TR","UP","UK","WB"];
  const labels = ["AD","AR","AS","BR","CG","DL","GA","GJ","HR","HP","JK","JH","KA","KL","LD","MP","MH","MN","ML","MZ","NL","OD","PY","PB", "RJ","SK","TN","TS","TR","UP","UK","WB"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Child Cases",
        backgroundColor: "rgb(68 134 219)",
        borderColor: "rgb(68 134 219)",
        // data: [20, 10, 35, 5, 18, 41, 23, 22, 10, 31, 6, 28, 33, 70, 28, 39, 14, 25, 65, 24, 5, 37, 16, 28, 44, 29, 11, 25, 10, 49, 12, 40, 38, 26, 13, 5, 17] ,
        data: [20, 10, 35, 5, 18, 41, 23, 22, 10, 31, 6, 28, 33, 70, 28, 39, 14, 25, 65, 24, 5, 37, 16, 28, 44, 29, 11, 25, 10, 49, 12, 40, 38]
      },
    ],
  };
  return (
    <div>
        <Bar data={data}  height={280}
        options={
          {
            maintainAspectRatio: false
          }
        } />
        {/* height={600} width={500} height={300} */}
        </div>
  )
}

export default BarChart;