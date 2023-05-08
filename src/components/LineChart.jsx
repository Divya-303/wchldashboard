import React from 'react';
// import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
// import context from 'react-bootstrap/esm/AccordionContext';

const LineChart = () => {
  const labels = ["January", "February", "March", "April"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Calls",
        // backgroundColor: "rgba(131,155,255,0.5)",
        // borderwidth: 5,
        borderColor: "rgb(13 98 239)",
        data: [20, 10, 35, 5, 14, 10, 32],
        // fill: true,
        
        // backgroundColor: (context) => {
        //   const bgcolor = [
        //     'rgb(5 71 239)', 'rgb(99 143 255)', 'rgb(0 140 235)', 'rgb(3 200 249)', 'rgb(64 231 226)'
        //   ];
        //   if(!context.Chart.chartArea){
        //     return;
        //   }
        //   const { ctx, data, chartArea: { top, bottom }} = context.Chart;
        //   const gradBg = ctx.createLinearGradient(0, top, 0, bottom);
        //   gradBg.addColorStop(0, bgcolor[0]);
        //   gradBg.addColorStop(0.5, bgcolor[1]);
        //   gradBg.addColorStop(1, bgcolor[2]);
        //   return gradBg;

        // },

        


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