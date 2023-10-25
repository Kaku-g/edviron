import React from 'react';
import './Chart.css';

import {Chart as ChartJS} from 'chart.js/auto';
import { Bar,Pie } from 'react-chartjs-2';


const options = {
    responsive: true,
    plugins: {
      legend: {
        position: '',
      },
      title: {
        display: false,
        
      },
      grid:{
        display:false
      }
    },
    scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
            ticks:{
                display:false
            },
          grid: {
            display: false
          }
        }
      }
  
  };
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: '',
      },
    }}


  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
   const data = [
 
    
          "50",
          "50",
          "50",
          "40",
          "30",
          "25",
          "20",
          "20",
          "18",
          "15",
          "10",
          "8",
   ];

   const userData={
    labels:labels.map((el)=>el),
    datasets:[
        {
            label:'',
            data:data.map((el)=>el),
            hoverBackgroundColor:'#5932EA',
            backgroundColor:'#F2EFFF'
        }
    ]
   }

   const pieData={
    labels:['Cheque','Cash','Online'],
    datasets:[
        {
            label:'',
            data:['11','25','63'],
            hoverBackgroundColor:['#F2EFFF',
            '#4318FF','#CDF4FF'
        ],
            backgroundColor:['#F2EFFF',
            '#4318FF','#CDF4FF'
        ]
        }
    ]
   }
    
  
  
const Trends = () => {
    console.log(data)
  return (
    <div className="graph-section">
        <div className="trends">
        <div className="trends-heading">Overview</div>
        <div className="trends-subheading">Monthly Collection</div>
      <Bar data={userData} options={options}/>
      </div>

      <div className="pie-chart">
        <div className="pie-heading">
            Payment Mode
        </div>
        <div className="pie-subheading">
            Split between online,cash and cheque for collection till date
        </div>
        <div className="chart">
        <Pie data={pieData} 
        options={pieOptions} 
       />
        </div>
     
        <div className="pie-stats">
            <div className="pie-stats-item">
                <div className="heading"><span style={{width:'12px',height:'12px',backgroundColor:'#CDF4FF',display:'block',borderRadius:'50%'}}></span>Online</div>
                <div className="value">63%</div>
            </div>
            <div className="pie-stats-item">
                <div className="heading"><span style={{width:'12px',height:'12px',backgroundColor:'#4318FF',display:'block',borderRadius:'50%'}}></span>Cash</div>
                <div className="value">25%</div>
            </div>
            <div className="pie-stats-item">
                <div className="heading"><span style={{width:'12px',height:'12px',backgroundColor:'#F2EFFF',display:'block',borderRadius:'50%'}}></span>Cheque</div>
                <div className="value">11%</div>
            </div>
        </div>

      </div>



      </div>

     

  )
}

export default Trends