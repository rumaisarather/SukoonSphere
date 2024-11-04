import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from './routes';
import { UserProvider } from './context/UserContext';

const App = () => {
  const router = createBrowserRouter(routes);
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
