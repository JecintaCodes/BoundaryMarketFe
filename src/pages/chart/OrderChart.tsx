// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// const OrderChart = () => {
//   const dailyChartRef = useRef(null);
//   const monthlyChartRef = useRef(null);
//   const yearlyChartRef = useRef(null);

//   useEffect(() => {
//     const fetchOrders = async (endpoint) => {
//       try {
//         const response = await fetch(
//           `http://localhost:2003/api/v1/${endpoint}`
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return await response.json();
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     const fetchAndRenderCharts = async () => {
//       const [daily, monthly, yearly] = await Promise.all([
//         fetchOrders("daily"),
//         fetchOrders("monthly"),
//         fetchOrders("yearly"),
//       ]);

//       const renderChart = (
//         chartRef,
//         data,
//         type,
//         label,
//         backgroundColor,
//         borderColor
//       ) => {
//         new Chart(chartRef.current, {
//           type,
//           data: {
//             labels: data.map((order) => order._id),
//             datasets: [
//               {
//                 label,
//                 data: data.map((order) => order.totalOrders),
//                 backgroundColor,
//                 borderColor,
//                 borderWidth: 1,
//               },
//             ],
//           },
//           options: {
//             scales: {
//               y: {
//                 beginAtZero: true,
//               },
//             },
//           },
//         });
//       };

//       renderChart(
//         dailyChartRef,
//         daily,
//         "line",
//         "Daily Orders",
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(255, 99, 132, 1)"
//       );
//       renderChart(
//         monthlyChartRef,
//         monthly,
//         "bar",
//         "Monthly Orders",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(54, 162, 235, 1)"
//       );
//       renderChart(
//         yearlyChartRef,
//         yearly,
//         "bar",
//         "Yearly Orders",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(255, 206, 86, 1)"
//       );
//     };

//     fetchAndRenderCharts();
//   }, []);

//   return (
//     <div className="container mx-auto p-4 md:p-6 lg:p-8">
//       <h1 className="text-3xl font-bold mb-4 lg:mb-6">Orders Charts</h1>
//       <div className="flex flex-wrap justify-center">
//         <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:p-6 lg:p-8">
//           <h2 className="text-2xl font-bold mb-4 lg:mb-6">Daily Orders</h2>
//           <canvas
//             ref={dailyChartRef}
//             width="100%"
//             height="300"
//             className="bg-white rounded-lg shadow-md"
//           ></canvas>
//         </div>
//         <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:p-6 lg:p-8">
//           <h2 className="text-2xl font-bold mb-4 lg:mb-6">Monthly Orders</h2>
//           <canvas
//             ref={monthlyChartRef}
//             width="100%"
//             height="300"
//             className="bg-white rounded-lg shadow-md"
//           ></canvas>
//         </div>
//         <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:p-6 lg:p-8">
//           <h2 className="text-2xl font-bold mb-4 lg:mb-6">Yearly Orders</h2>
//           <canvas
//             ref={yearlyChartRef}
//             width="100%"
//             height="300"
//             className="bg-white rounded-lg shadow-md"
//           ></canvas>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderChart;
// OrderChart.js
import { Bar } from "react-chartjs-2";

// import { useState, useEffect, useRef } from "react";
// import { Bar as ChartBar } from "react-chartjs-2";

// function OrderChart() {
//   const [orders, setOrders] = useState([]);

//   const chartRef = useRef(null);

// import { useState, useEffect, useRef } from "react";
import { Bar as ChartBar } from "react-chartjs-2";

import { useState, useEffect, useRef } from "react";
// import { Bar } from "react-chartjs-2";

function OrderChart() {
  const [orders, setOrders] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:2003/api/v1/monthly");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const chartData = {
    labels: orders.map((order) =>
      new Date(order._id).toLocaleString("default", { month: "long" })
    ),
    datasets: [
      {
        label: "Monthly Orders",
        data: orders.map((order) => order.totalOrders),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        borderRadius: 5,
        hoverBackgroundColor: "rgba(54, 162, 235, 0.4)",
        hoverBorderColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  // const chartOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       display: true,
  //       position: "top",
  //       labels: {
  //         font: {
  //           size: 12,
  //           family: "Arial",
  //         },
  //         color: "#333",
  //       },
  //     },
  //   },
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //       ticks: {
  //         stepSize: 5,
  //         font: {
  //           size: 10,
  //           family: "Arial",
  //         },
  //         color: "#666",
  //       },
  //     },
  //     x: {
  //       ticks: {
  //         font: {
  //           size: 10,
  //           family: "Arial",
  //         },
  //         color: "#666",
  //         autoSkip: false,
  //       },
  //     },
  //   },
  // };

  const chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            size: 12,
            family: "Arial",
          },
          color: "#333",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          font: {
            size: 10,
            family: "Arial",
          },
          color: "#666",
        },
      },
      x: {
        ticks: {
          font: {
            size: 10,
            family: "Arial",
          },
          color: "#666",
          autoSkip: false,
        },
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Monthly Orders</h2>
      {orders.length > 0 && (
        <Bar
          ref={chartRef}
          key={orders.length}
          data={chartData}
          options={chartOptions}
          className="chart-container"
        />
      )}
    </div>
  );
}

export default OrderChart;
