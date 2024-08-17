import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing/index.jsx";
import Login from "./pages/auth/login.jsx";
import SignUp from "./pages/auth/signUp.jsx";
import RootLayout from "./layouts/rootLayout";
import Hire from "./pages/hire/index.jsx";
import Find from "./pages/find/index.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import Profile from "./pages/profile/index.jsx";
import ClientProfile from "./pages/client/index.jsx";
import { apiGetFreelancer } from "./services/profile.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "hire",
          element: <Hire />,
        },
        {
          path: "find",
          element: <Find />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "profile",
          element: <Profile />,
          loader: async ({ params }) => {
            // const username = params.username;
            try {
              const response = await apiGetFreelancer();
              console.log(response.data);
              // const userProfileData = response?.data.user;
              return response.data;
            } catch (error) {
              toast.error("An error occurred");
              return null;
            }
          },
        },
        {
          path: "client",
          element: <ClientProfile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
