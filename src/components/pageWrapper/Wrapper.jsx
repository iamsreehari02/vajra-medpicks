import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import { TABS } from "../../constants/Constants";
import DashboardContent from "../dashboard/DashboardContent";

const Wrapper = () => {
  const [activeTab, setActiveTab] = useState(TABS.DASHBOARD);

  const renderContent = () => {
    switch (activeTab) {
      case TABS.DASHBOARD:
        return <DashboardContent />;
      case TABS.PROFILE:
        return <h1>Profile Tab</h1>;
      case TABS.SERVICES:
        return <h1>Services Tab</h1>;
      case TABS.ASSETS:
        return <h1>Assets Tab</h1>;
      case TABS.INCIDENTS:
        return <h1>Incidents Tab</h1>;
      case TABS.REQUEST:
        return <h1>Request Tab</h1>;
      case TABS.REPORTS:
        return <h1>Reports Tab</h1>;
      case TABS.USERS:
        return <h1>Users Tab</h1>;
      default:
        return null;
    }
  };

  console.log("actiev tab ", activeTab);

  return (
    <div className="flex h-screen">
      <Sidebar onTabChange={setActiveTab} activeTab={activeTab} />
      <div className="flex-1 flex flex-col">
        <Header activeTab={activeTab} />
        <div className="flex-1 p-3 bg-mainBG">{renderContent()} </div>
      </div>
    </div>
  );
};

export default Wrapper;
