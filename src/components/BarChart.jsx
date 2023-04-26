import React from 'react';
import Chart, { LinearScale } from "chart.js/auto";
import { Bar } from "react-chartjs-2";


const BarChart = () => {
  const labels = ["AD","AR","AS","BR","CG","DL","GA","GJ","HR","HP","JK","JH","KA","KL","LD","MP","MH","MN","ML","MZ","NL","OD","PY","PB", "RJ","SK","TN","TS","TR","UP","UK","WB"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Reported Cases",
        barThickness: 10,
        backgroundColor: "rgb(44, 119, 244)", 
        borderWidth: 1.3,
        borderColor: '#FFFFFF',
        borderRadius: 4,
        // borderSkipped: "right",
        data: [40, 10, 35, 5, 18, 41, 23, 22, 10, 31, 6, 28, 33, 70, 28, 39, 14, 25, 65, 24, 5, 37, 16, 28, 44, 29, 11, 25, 10, 49, 12, 40, 38]
      },
      {
        label: "Resolved Cases",
        barThickness: 10,
        backgroundColor: "rgb(30, 202, 184)",
        borderWidth: 1.3,
        borderColor: '#FFFFFF',
        borderRadius: 4,
        // borderSkipped: "left",
        data: [21, 3, 18, 5, 10, 28, 16, 8, 5, 11, 6, 17, 22, 58, 25, 34, 10, 20, 57, 16, 3, 21, 7, 13, 39, 19, 9, 21, 4, 33, 8, 38, 20]
      }
    ],
   
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
        x: {
          grid: {display: false,}
          },
        y: {
          border:{dash: [4, 4]},
          ticks: {maxTicksLimit: 5}, 
          },
    },
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend:{
        labels: {
          // boxWidth: 3,
          usePointStyle: true,
          pointStyle: 'triangle'
        }
      }
  }  
}


  return (
    <div>
        <Bar data={data}  height={215}
        options={options} />
        {/* height={600} width={500} height={300} */}
    </div>
  )
}

export default BarChart;