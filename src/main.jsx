import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Team from "./pages/team/Team.jsx";
import BarChart from "./pages/barChart/BarChart.jsx";
import Calendar from "./pages/calender/Calendar.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import FAQ from "./pages/FAQ/FAQ.jsx";
import Invoices from "./pages/invoices/Invoices.jsx";
import LineChart from "./pages/LineChart/LineChart.jsx";
import PieChart from "./pages/PieChart/PieChart.jsx";
import Profile from "./pages/profile/Profile.jsx";
import GeographyChart from "./pages/GeographyChart/GeographyChart.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="profile" element={<Profile />} />
      <Route path="line" element={<LineChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="geography" element={<GeographyChart />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
