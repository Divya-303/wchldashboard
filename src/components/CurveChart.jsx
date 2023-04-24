import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const CurveChart = (props) => {
    const labels = ["January", "February", "March", "April"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: props.data.label,
          backgroundColor: props.data.backgroundColor,
          borderColor: props.data.borderColor,
          data: props.data.data,
        },
      ],
    };
    const options = {
        responsive: true,
        tension: 0.4,
        scales: {
            x: {
              border:{
                    display:false
              },
              ticks: {
                display: false
              },
              grid: {
                display: false
              }
            },
            y: {
              border:{
                display:false
              },
              ticks: {
                display: false
              },
              grid: {
                display: false      
              }
            }
        },
        maintainAspectRatio: false,
        plugins: {
        legend: {
            display: false
        }
    }
   };
  return (
    <div>
        <Line data={data} options={options}/>
    </div>
  )
}

export default CurveChart;