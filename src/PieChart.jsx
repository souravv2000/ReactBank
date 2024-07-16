// import React from "react";
// import { Pie } from "react-chartjs-2";

// function PieChart({ chartData }) {
//   return (
//     <div className="chart-container">
//       <h2 style={{ textAlign: "center" }}>Monthly Payment: ${}</h2>
//       <Pie style={{width:"500", height:"500"}}
//         data={chartData}
//       />
//     </div>
//   );
// }
// export default PieChart;


import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
 import { CategoryScale } from "chart.js";
 Chart.register(CategoryScale);

function PieChart({ monthlyPayment, Principle, totalInterestGenerated }) {
  const chartData = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        data: [Principle, totalInterestGenerated], 
        // backgroundColor: ['#5AC191', '#D685B2'],
        backgroundColor: ['#ecf024', '#24e9f0'],
        borderWidth: 1,
      }
    ]
  };
    const options={
      plugins: {
        responsive:true
      }
    };


  return (
    <div className="chart-container" style={{width:`50%`, height:`100%`, display:"flex",
      justifyContent:"center", alignItems:"center", flexDirection:"column", gap:20
    }}> 
      <h2 style={{ textAlign: "center" }}>Monthly Payment: ${monthlyPayment}</h2>
      <div style={{ width: '400px', height: '400px' }}>
      <Pie data={chartData} />
      </div>
    </div>
  );
}

export default PieChart;
