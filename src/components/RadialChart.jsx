import React from 'react';
import Chart, { LinearScale } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

// 'Councelling', 'Psychological support', 'Physical intervention', 'DCPU'
// 210, 30, 150, 75
// 'rgb(99 143 255)', 'rgb(0 140 235)', 'rgb(3 200 249)', 'rgb(64 231 226)'

const RadialChart = (props) => {
    const data = {
        labels: ['New Calls Arrived', 'Councelling', 'Psychological support', 'Physical intervention', 'DCPU'],
        datasets: [
        {
            label: 'New Calls Arrived',
            data: [100],
            backgroundColor: 'rgb(5 71 239)',
            circumference: 170,
            barThickness: 9,
            borderWidth: 3.5,
            borderColor: '#FFFFFF',
        },
        {
            label: 'Councelling',
            data: [210],
            backgroundColor: 'rgb(99 143 255)',
            circumference: 200,
            barThickness: 9,
            borderWidth: 3.5,
            borderColor: '#FFFFFF',
        },
        {
            label: 'Psychological support',
            data: [150],
            backgroundColor: 'rgb(0 140 235)',
            circumference: 230,
            barThickness: 9,
            borderWidth: 3.5,
            borderColor: '#FFFFFF',
        },
        {
            label: 'Physical intervention',
            data: [30],
            backgroundColor: 'rgb(3 200 249)',
            circumference: 190,
            barThickness: 9,
            borderWidth: 3.5,
            borderColor: '#FFFFFF',
        },
        {
            label: 'DCPU',
            data: [75],
            backgroundColor: 'rgb(64 231 226)',
            circumference: 250,
            barThickness: 9,
            borderWidth: 3.5,
            borderColor: '#FFFFFF',
        },
        
    ]
    };

    const option = {
        maintainAspectRatio: false,
        cutout: '40%',
        borderRadius: 5,
        plugins: {
            legend: {
              position: "left",
              align: "top",
              labels: { usePointStyle: true, pointStyle: 'circle'}
            }
        } 
    }
  



  return (
    <div>
        <Doughnut data={data} height={210}
        options={option} />
    </div>
  )
}

export default RadialChart
