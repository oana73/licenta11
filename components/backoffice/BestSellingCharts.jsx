"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function BestSellingCharts() {
    const data = {
        labels: [ 'PS games', 'Computers', 'Graphics card', 'Graphics card', 'Cooling fans', 'Accessories'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      const options = {
        plugins: {
          legend: {
            labels: {
              color: 'rgb(150,150,150)', // Set the legend label text color to white
            },
          },
        },
      };
  return (
    <div className='dark:bg-neutral-600 bg-slate-50 p-8 rounded-lg shadow-xl'>
        <h2 className='text-xl font-bold mb-4 text-neutral-600 dark:text-neutral-50'>Best Selling Charts</h2>
        {/* Chart */}
        <div className='p-4'>
            <Pie data={data} options={options}/>
        </div>
    </div>
  )
}
