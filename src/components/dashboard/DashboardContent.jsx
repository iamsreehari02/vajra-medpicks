import React from "react";
import {
  dashboardCardLeftSideData,
  dashboardCardRightSideData,
  gaugeChartData,
  headerData,
  incidentsChartData,
  incidentsStatsData,
  serviceChartData,
  serviceStatsData,
  tableData,
} from "../../utils/data";
import MiniCard from "../miniCard/MiniCard";
import ChartContainer from "../chartContainer/ChartContainer";
import { INCIDENTS, SERVICES } from "../../constants/Constants";
import GaugeChart from "../gaugeChart/GaugeChart";

const DashboardContent = () => {
  return (
    <div className="flex gap-4 min-h-screen w-full p-4">
      <div className="flex-1 flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-4">
          {dashboardCardLeftSideData.map((data) => (
            <div key={data.id}>
              <MiniCard
                title={data.title}
                count={data.count}
                status={data.status}
              />
            </div>
          ))}
        </div>

        <div className="flex-1 bg-white">
          <ChartContainer
            title={SERVICES}
            showTable={true}
            chartData={serviceChartData}
            statsData={serviceStatsData}
            tableData={tableData}
            headerData={headerData}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-4">
          {dashboardCardRightSideData.map((data) => (
            <div key={data.id}>
              <MiniCard
                title={data.title}
                count={data.count}
                status={data.status}
              />
            </div>
          ))}
        </div>

        <div className="flex-1 bg-white">
          <ChartContainer
            title={INCIDENTS}
            statsData={incidentsStatsData}
            chartData={incidentsChartData}
            tableData={tableData}
            headerData={headerData}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {gaugeChartData.map((chartData, index) => (
            <div key={index}>
              <GaugeChart
                title={chartData.title}
                total={chartData.total}
                metrics={chartData.metrics}
                actionText={chartData.actionText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
