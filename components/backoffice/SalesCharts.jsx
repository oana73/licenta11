"use client"
import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
export default function SalesCharts() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: 'rgb(150,150,150)', // Change the color of legend labels
            },
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
        scales: {
          x: {
            ticks: {
              color: 'rgb(150,150,150)', // Change the color of x-axis labels (months)
            },
          },
          y: {
            ticks: {
              color: 'rgb(150,150,150)', // Change the color of y-axis labels
            },
          },
        }
        
      };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
          {
            label: 'Sales',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        //   {
        //     label: 'Dataset 2',
        //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        //     borderColor: 'rgb(53, 162, 235)',
        //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
        //   },
        ],
      };
    const tabs=[
        {
            title:"Sales",
            type:'sales',
            data:{
                labels,
                datasets: [
                  {
                    label: 'Sales',
                    data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                    borderColor: 'rgb(72, 201, 176)',
                    backgroundColor: 'rgba(72, 201, 176, 0.5)',
                  },
                ],}
        },
        {
            title:"Orders",
            type:'orders',
            data:{
                labels,
                datasets: [
                  {
                    label: 'Orders',
                    data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                    borderColor: 'rgb(72, 201, 176)',
                    backgroundColor: 'rgba(72, 201, 176, 0.5)',
                  },
                ],}
        },
    ];
    const[chartTodDisplay, setChatToDisplay]= useState(tabs[0].type)
  return (
    <div className='dark:bg-neutral-600 bg-slate-50 p-8 rounded-lg shadow-xl'>
      <h2 className='text-xl font-bold mb-4 text-neutral-600 dark:text-slate-50'>Best Selling Products</h2>
      <div className="p-4">
        {/* Tabs */}
        <div className="text-sm font-medium text-center text-gray-200 border-b border-gray-100 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {
                tabs.map((tab,i)=>{
                   return(
                    <li className="me-2 " key={i}>
                       <button 
                       onClick={()=>setChatToDisplay(tab.type)} 
                       className={chartTodDisplay==tab.type? 
                       "inline-block p-4 text-teal-700 border-b-2 border-teal-600 rounded-t-lg active dark:text-teal-500 dark:border-teal-500"
                       :"inline-block p-4 border-b-2 border-transparent rounded-t-lg text-neutral-500 hover:text-neutral-700 hover:border-neutral-500 dark:hover:text-gray-300"}>{tab.title}</button> 
                    </li>
                   ) 
                })
            }
          </ul>
        </div>

        {/* Content */}
        {tabs.map((tab, i) => {
            if (chartTodDisplay === tab.type) {
              return <Line options={options} data={tab.data} />;
            }
            return null;
        })}
      </div>
    </div>
  );
}
