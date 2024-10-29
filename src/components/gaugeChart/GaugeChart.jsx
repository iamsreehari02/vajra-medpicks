import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { CENTER, COLORS, MIDDLE } from "../../constants/Constants";

ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeChart = ({
  title,
  total,
  metrics,
  actionText,
  showAction = true,
}) => {
  const remainingValue = 180 - total;

  const data = {
    datasets: [
      {
        data: [...metrics.map((m) => m.value), remainingValue],
        backgroundColor: [...metrics.map((m) => m.color), COLORS.TRANSPARENT],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    cutout: "75%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const centerText = {
    id: "centerText",
    afterDatasetsDraw(chart) {
      const {
        ctx,
        chartArea: { width, height },
      } = chart;

      ctx.fillStyle = "#1a365d";
      ctx.textAlign = CENTER;
      ctx.textBaseline = MIDDLE;
      ctx.fillText(total, width / 2, height / 2);
    },
  };

  return (
    <div className="bg-white p-6  h-[420px] flex flex-col group">
      <div className="mb-8">
        <h3>{title}</h3>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="relative h-40 mb-6">
          <Doughnut data={data} options={options} plugins={[centerText]} />
        </div>

        <div className="space-y-2">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center text-sm">
              <span
                className="w-3 h-3 rounded-sm mr-2"
                style={{ backgroundColor: metric.color }}
              />
              <span className="font-medium mr-2">{metric.value}</span>
              <span className="text-gray-600">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      {showAction && (
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between bg-transparent group-hover:bg-primaryColor transition-all duration-300 ease-in-out rounded-full px-5 py-2 cursor-pointer">
            <h3 className="group-hover:text-white transition-colors duration-300">
              {actionText}
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-0 w-0 group-hover:h-5 group-hover:w-5 transition-all duration-300 ease-in-out"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaugeChart;
