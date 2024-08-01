import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from './pages/landing/index.jsx';
import Login from './pages/auth/login.jsx';
import SignUp from './pages/auth/signUp.jsx';


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'signup',
      element: <SignUp />
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
