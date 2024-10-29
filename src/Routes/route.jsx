import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";
import OurMenu from "../pages/OurMenu";
import OurShop from "../pages/OurShop";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import PrivetRoute from "../Provider/PrivetRoute";
import DashBoard from "../pages/DashBoard/DashBoard";
import Carts from "../pages/DashBoard/Carts";
import Users from "../pages/DashBoard/Users";
import AdminRoute from "../Provider/AdminRoute";
import AddItems from "../pages/DashBoard/AddItems";
import ManageItems from "../pages/DashBoard/ManageItems";
import UpdateItems from "../pages/DashBoard/UpdateItems";
import Payment from "../pages/DashBoard/Payment";
import PaymentHistory from "../pages/DashBoard/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/our-shop/:category",
        element: <OurShop></OurShop>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: (
          <PrivetRoute>
            <Contact></Contact>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <DashBoard />
      </PrivetRoute>
    ),
    children: [
      {
        path: "admin-home",
        element: <></>,
      },
      {
        path: "carts",
        element: <Carts></Carts>,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "payment-hitory",
        element: <PaymentHistory />,
      },
      {
        // ------Admin parts------
        path: "users",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "add-items",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manage-items",
        element: <ManageItems></ManageItems>,
      },
      {
        path: "update-items/:id",
        element: <UpdateItems />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
