import React from 'react';
import Chart from "chart.js/auto";
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
    const data = {
        labels: [
          'Data gathering',
          'Councelling',
          'Psychological support',
          'Physical intervention',
          'DCPU'
        ],
        datasets: [{
          label: 'Cases',
          data: [100, 210, 30, 150, 75],
          // backgroundColor: [
          //   'rgb(52, 191, 163)',
          //   'rgb(93, 120, 255)',
          //   'rgb(253, 60, 151)',
          //   'rgb(255, 159, 67)',
          //   'rgb(3 200 249)'
          // ],

          backgroundColor: [
            'rgb(5 71 239)',
            'rgb(99 143 255)',
            'rgb(0 140 235)',
            // 'rgb(54, 162, 235)',
            // 'rgb(15 121 193)',
            'rgb(3 200 249)',
            // 'rgb(110 241 237)',
            'rgb(64 231 226)'
          ],
          // hoverOffset: 30
        }]

        
      };


      const option = {
        maintainAspectRatio: false,
        cutout: '80%',
        borderRadius: 5,
        // layout: {
        //   padding: 10
        // },
        plugins: {
          legend: {
            position: "right",
            align: "end",
            labels: { 
              usePointStyle: true,
              pointStyle: 'triangle',
              // pointStyle: 'rectRounded',
              // pointStyle: 'rectRot',
              // boxWidth: 3,
            }
        }}

        
    }
  
  return (
    <div>
        <Doughnut data={data} height={210}
        options={option}/>
    </div>
  )
}

export default DoughnutChart;