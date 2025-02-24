import { Route, BrowserRouter as Router, Routes } from "react-router";
import AppLayout from "./layout/AppLayout";
import AuthLayout from "./layout/AuthLayout";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import Blank from "./pages/Blank";
import Calendar from "./pages/Calendar";
import Ecommerce from "./pages/Dashboard/ECommerce";
import FormElements from "./pages/Forms/FormElements";
import NotFound from "./pages/OtherPage/NotFound";
import BasicTables from "./pages/Tables/BasicTables";
import Alerts from "./pages/UiElements/Alerts";
import Avatars from "./pages/UiElements/Avatars";
import Badges from "./pages/UiElements/Badges";
import Buttons from "./pages/UiElements/Buttons";
import Images from "./pages/UiElements/Images";
import Videos from "./pages/UiElements/Videos";
import UserListPage from "./pages/User/UserListPage";
import UserListProfiles from "./pages/UserProfile/User_List_Profiles";
import SalesOverview from "./pages/SalesOverview/SalesOverview";
import UserProfiles from "./pages/UserProfiles";
import People_Dashboard from "./pages/Dashboard/People_Dashboard/People_Dashboard";
import InventoryList from  './components/RecentOrders/InventoryList'
import AssetMaintenance from "./pages/AssestMaintenance/AssestMaintenance";
import Inventory_Dashboard from "./pages/Dashboard/Inventory_Dashboard/Inventory_Dashboard"
import Operations_Dashboard from "./pages/Dashboard/Operations_Dashboard/Operations_Dashboard"
import ProjectManagement from "./pages/ProjectManagement/ProjectManagement";
import IncidentManagement from "./pages/IncidenceManagement/IncidenceManagement";
import BarChart from "./pages/Charts/BarChart";
import LineChart from "./pages/Charts/LineChart";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Ecommerce />} />
            <Route index path="/people-dashbord" element={<People_Dashboard />} />
            <Route index path="/Inventory-dashbord" element={<Inventory_Dashboard />} />
            <Route index path="/Operations-dashbord" element={<Operations_Dashboard />} />



            {/* Others Page */}
            <Route path="/profile/:id" element={<UserListProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Users */}
            <Route path="/user-list" element={<UserListPage />} />
            {/* <Route path="/user-details" element={<UserDetails />} /> */}

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badges" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Operations routes */}
            <Route path="/sales_overview" element={<SalesOverview />} />
                {/* inventory list */}
           <Route  path="/inventory_list" element={<InventoryList />} />
           <Route  path="/assest_maintenance" element={<AssetMaintenance />} />


           <Route path="/project_management" element={<ProjectManagement />} />
            <Route path="/incidence_management" element= {<IncidentManagement />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />


       


        </Routes>
      </Router>
    </>
  );
}
