import React from "react";
import ArrowIcon from "../../assets/svg/arrow.svg";
import {
  COLORS,
  COUNTDOWN_INTITIAL_TIME,
  IMG_ALT,
} from "../../constants/Constants";
import AddButton from "../addButton/AddButton";
import BarChart from "../barChart/BarChart";
import CustomDataTable from "../customDataTable/CustomDataTable";
import Countdown from "../countDown/CountDown";
import CautionIcon from "../../assets/svg/notWorkingIcon.svg";

const ChartContainer = ({
  title,
  chartData,
  tableData,
  showTable,
  statsData,
  headerData,
}) => {
  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 8,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 2,
          padding: 10,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 10,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const statusTemplate = (rowData) => {
    const statusClass =
      rowData.status === "Working" ? "text-blue-500" : "text-orange-500";
    return <span className={statusClass}>{rowData.status}</span>;
  };

  return (
    <div className="w-full h-full p-4 bg-white flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-lightBlue">{title}</h3>
          <img src={ArrowIcon} alt={IMG_ALT.ARROW_ICON} />
        </div>

        <AddButton
          bgColor={COLORS.TRANSPARENT}
          fontColor={COLORS.SECONDARY_COLOR}
        />
      </div>

      <div
        className={`grid gap-4 mb-8 pb-7 border-b-2 ${
          statsData.length === 2
            ? "grid-cols-2 justify-between w-max"
            : "grid-cols-3"
        }`}
      >
        {statsData.map((stat) => (
          <div key={stat.id} className="flex flex-col">
            <span
              className="text-3xl font-semibold font-inter"
              style={{
                textAlign: stat.label === "Expenditure" ? "end" : "left",
              }}
            >
              {stat.label === "Downtime" ? (
                <div className="flex items-center gap-2">
                  <img src={CautionIcon} alt={IMG_ALT.CAUTION_ICON} />
                  <Countdown initialTime={COUNTDOWN_INTITIAL_TIME} />
                </div>
              ) : (
                stat.value
              )}
            </span>

            <h4
              style={{
                fontWeight: "600",
                marginTop: "1rem",
                textAlign: stat.label === "Expenditure" ? "end" : "left",
              }}
            >
              {stat.label}
            </h4>
          </div>
        ))}
      </div>

      <BarChart chartData={chartData} chartOptions={chartOptions} />

      {showTable && (
        <div className="mt-6">
          <CustomDataTable tableData={tableData} headerData={headerData} />
        </div>
      )}
    </div>
  );
};

export default ChartContainer;
