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
import { MdBorderColor } from "react-icons/md";

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
