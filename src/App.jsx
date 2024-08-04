import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from './pages/landing/index.jsx';
import Login from './pages/auth/login.jsx';
import SignUp from './pages/auth/signUp.jsx';
import RootLayout from './layouts/rootLayout';
import Hire from './pages/hire/index.jsx';
import Find from './pages/find/index.jsx';
import Dashboard from './pages/dashboard/index.jsx';
import Profile from './pages/profile/index.jsx';





function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Landing />
        },
        {
          path: 'hire',
          element: <Hire />
        },
        {
          path: 'find',
          element: <Find />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'signup',
          element: <SignUp />
        },
        {
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          path: 'profile',
          element: <Profile />
        }

      ]
    }

  ]);

  return <RouterProvider router={router} />;
}

export default App
