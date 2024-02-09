import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./Layout/MainLayOut";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Todo from "./Components/Todo";
import AuthProvider from "./provider/AuthProvider";
import Login from "./Users/Login";
import Register from "./Users/Register";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/todo",
        element: <Todo></Todo>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="font-poppins">
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
