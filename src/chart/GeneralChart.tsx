import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';


interface Iprops {
    labels: string[];
    data: number[];
  }
  
  

const GeneralChart:React.FC<Iprops>= ({labels, data}) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null);
  
    useEffect(() => {
      if (chartRef.current) {
        // Destroy the previous chart instance
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
          chartInstanceRef.current = null;
        }  
  
        const chd = chartRef.current.getContext('2d');
        // const ctx = chartRef.current.getContext('2d');
        const chart = new Chart(chd, {
          type: 'bar',
          data: {
            labels,
            datasets: [{
              label: 'My Data',
              data,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              text: 'My Chart'
            }
          }
        });
  
        // Store the chart instance
        chartInstanceRef.current = chart;
      }
  
      // Clean up function to destroy the chart instance when the component unmounts
      return () => {
        if (chartInstanceRef.current !== null) {
          chartInstanceRef.current.destroy();
        }
      };
    },  [labels, data]);
  
    return (
        <div className="chart-container">
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
    )
}

export default GeneralChart

