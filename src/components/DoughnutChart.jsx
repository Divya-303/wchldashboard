import React from 'react';
import Chart from "chart.js/auto";
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
    const data = {
        labels: [
          'Mere call info',
          'Councelling',
          'Psychological support',
          'Physical intervention',
          'DCPU'
        ],
        datasets: [{
          label: 'Cases',
          data: [100, 210, 30, 150],
          backgroundColor: [
            'rgb(52, 191, 163)',
            'rgb(93, 120, 255)',
            'rgb(253, 60, 151)',
            'rgb(255, 159, 67)'
          ],

          // backgroundColor: [
          //   'rgb(99 143 255)',
          //   'rgb(54, 162, 235)',
          //   'rgb(15 121 193)',
          //   'rgb(5 71 239)'
          // ],
          hoverOffset: 4
        }]

        
      };


      const option = {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            align: "end",
        }}

        
    }
  
  return (
    <div>
        <Doughnut data={data} 
        options={option}/>
    </div>
  )
}

export default DoughnutChart;