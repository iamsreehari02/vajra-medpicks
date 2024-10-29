// Sidebar tabs
import DashboardTabIcon from "../assets/svg/dashboardIcon.svg";
import AssetsTabIcon from "../assets/svg/assetsIcon.svg";
import IncidentsTabIcon from "../assets/svg/assetsIcon.svg";
import ServicesTabIcon from "../assets/svg/servicesIcon.svg";
import RequestTabIcon from "../assets/svg/requestIcon.svg";
import UsersTabIcon from "../assets/svg/usersIcon.svg";
import ReportTabIcon from "../assets/svg/reportsIcon.svg";

// Sidebar footer button icons
import ContactIcon from "../assets/svg/contactIcon.svg";
import LogoutIcon from "../assets/svg/logoutIcon.svg";

// Header icons
import ProfileIcon from "../assets/svg/profileIcon.svg";
import NotificationIcon from "../assets/svg/notificationIcon.svg";
import ScanIcon from "../assets/svg/scanIcon.svg";

export const sidebarTabs = [
  {
    id: 1,
    tabName: "Dashboard",
    icon: DashboardTabIcon,
    alt: "dashboardTab",
    key: "dashboard",
  },
  {
    id: 2,
    tabName: "Assets",
    icon: AssetsTabIcon,
    alt: "assetsTab",
    key: "assets",
  },
  {
    id: 3,
    tabName: "Incidents",
    icon: IncidentsTabIcon,
    alt: "incidentsTab",
    key: "incidents",
  },
  {
    id: 4,
    tabName: "Services",
    icon: ServicesTabIcon,
    alt: "servicesTab",
    key: "services",
  },
  {
    id: 5,
    tabName: "Request",
    icon: RequestTabIcon,
    alt: "requestTab",
    key: "request",
  },
  {
    id: 6,
    tabName: "Users",
    icon: UsersTabIcon,
    alt: "usersTab",
    key: "users",
  },
  {
    id: 7,
    tabName: "Reports",
    icon: ReportTabIcon,
    alt: "reportsTab",
    key: "reports",
  },
];

// Sidebar buttons
export const sideBarFooterButtons = [
  {
    id: 1,
    label: "Contact Us",
    icon: ContactIcon,
  },
  { id: 2, label: "Logout", icon: LogoutIcon },
];

// Header icons
export const headerIcons = [
  { id: 1, icon: ScanIcon },
  { id: 2, icon: NotificationIcon },
  { id: 3, icon: ProfileIcon },
];

export const headerDetailData = [
  { id: 1, title: "3.8", description: "Monthly Rating", type: "rating" },
  { id: 2, title: "₹ 35,000", description: "Budget Spent" },
  { id: 3, title: "Monthly Report", description: "Generate", type: "button" },
];

export const locations = [
  { label: "Vijayanagar", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];

export const dashboardCardLeftSideData = [
  { id: 1, title: "Assets", count: "450" },
  { id: 2, count: "14", status: "Not working" },
  { id: 3, title: "Discarded", count: "32" },
];

export const dashboardCardRightSideData = [
  { id: 1, title: "Departments", count: "32" },
  { id: 2, title: "Check Outs", count: "08" },
  { id: 3, title: "Movements", count: "03" },
];

export const serviceChartData = {
  labels: [
    "Blood Co...",
    "Emergen...",
    "Laborato...",
    "Blood Co...",
    "Emergen...",
    "Laborato...",
    "Emergen...",
  ],
  datasets: [
    {
      data: [0, 2, 0.5, 4, 0, 2, 0],
      backgroundColor: ["#FF6B00", "#1e293b"],
      barThickness: 15,
    },
  ],
};

export const serviceStatsData = [
  {
    id: 1,
    value: "04",
    label: "Check out",
  },
  {
    id: 2,
    value: "02",
    label: "Check In",
  },
  {
    id: 3,
    value: "$15000",
    label: "Expenditure",
  },
];

// Dashboard service section datatable header
export const tableData = [
  {
    asset: "Asset A",
    code: "A123",
    dept: "Engineering",
    services: 5,
    status: "Working",
  },
  {
    asset: "Asset B",
    code: "B456",
    dept: "Maintenance",
    services: 3,
    status: "Not Working",
  },
  {
    asset: "Asset C",
    code: "C789",
    dept: "Operations",
    services: 4,
    status: "Working",
  },
  {
    asset: "Asset D",
    code: "D101",
    dept: "Logistics",
    services: 2,
    status: "Under Maintenance",
  },
  {
    asset: "Asset E",
    code: "E202",
    dept: "Engineering",
    services: 6,
    status: "Working",
  },
  {
    asset: "Asset F",
    code: "F303",
    dept: "Maintenance",
    services: 1,
    status: "Not Working",
  },
  {
    asset: "Asset G",
    code: "G404",
    dept: "Quality Control",
    services: 3,
    status: "Working",
  },
  {
    asset: "Asset H",
    code: "H505",
    dept: "Operations",
    services: 7,
    status: "Working",
  },
  {
    asset: "Asset I",
    code: "I606",
    dept: "Engineering",
    services: 2,
    status: "Under Inspection",
  },
  {
    asset: "Asset J",
    code: "J707",
    dept: "Maintenance",
    services: 5,
    status: "Working",
  },
  {
    asset: "Asset K",
    code: "K808",
    dept: "Operations",
    services: 4,
    status: "Not Working",
  },
];

export const headerData = [
  { id: 1, title: "Asset", key: "asset" },
  { id: 2, title: "Code", key: "code" },
  { id: 3, title: "Dept.", key: "dept" },
  { id: 4, title: "No of Services", key: "services" },
  { id: 5, title: "Status", key: "status" },
];

// Incidents data
export const incidentsStatsData = [
  {
    id: 1,
    value: "02 Days 12 h : 34 m : 45 s",
    label: "Downtime",
  },
  {
    id: 2,
    value: "₹ 20,000",
    label: "Expenditure",
  },
];

export const incidentsChartData = {
  labels: [
    "Blood Co...",
    "Emergen...",
    "Laborato...",
    "Blood Co...",
    "Emergen...",
    "Laborato...",
    "Emergen...",
  ],
  datasets: [
    {
      data: [5, 1, 3, 4, 1, 2, 2.5],
      backgroundColor: ["#FF6B00", "#1e293b"],
      barThickness: 15,
    },
  ],
};

// Gauge chart data
export const gaugeChartData = [
  {
    title: "Calibrations",
    total: 273,
    metrics: [
      { value: 257, label: "Calibrated", color: "#1a365d" },
      { value: 12, label: "Not Calibrated", color: "#e2e8f0" },
      { value: 4, label: "Not Required", color: "#f3f4f6" },
    ],
    actionText: "04 Due",
  },
  {
    title: "AMC / CMC",
    total: 298,
    metrics: [
      { value: 237, label: "AMC", color: "#1a365d" },
      { value: 64, label: "CMC", color: "#e2e8f0" },
    ],
    actionText: "00 Due",
  },
  {
    title: "Warranty",
    total: 267,
    metrics: [
      { value: 267, label: "Total", color: "#1a365d" },
      { value: 15, label: "Requested", color: "#e2e8f0" },
      { value: 6, label: "Expires soon", color: "#f97316" },
    ],
    actionText: "06 Expiry",
  },
];
