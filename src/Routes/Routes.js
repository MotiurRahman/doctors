import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Reviews from "../Pages/Reviews/Reviews";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import MyAppointment from "../Components/MyAppointment/MyAppointment";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes/AdminRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/appointment",

        element: (
          <PrivateRoute>
            <Appointment></Appointment>
          </PrivateRoute>
        ),
      },

      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>,
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default routes;
