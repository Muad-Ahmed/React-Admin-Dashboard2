import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import BarChart from "./page/barChart/BarChart";
import Calendar from "./page/calendar/Calendar";
import Contacts from "./page/contacts/Contacts";
import FAQ from "./page/faq/FAQ";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="bar" element={<BarChart />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="faq" element={<FAQ />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
