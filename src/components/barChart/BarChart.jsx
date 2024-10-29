import React from "react";
import { Chart } from "primereact/chart";

const BarChart = ({ chartData, chartOptions }) => {
  return (
    <div className="h-48 mb-10 pb-5">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
