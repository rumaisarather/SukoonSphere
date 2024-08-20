import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { About, Home } from "./pages";
import HomeLayout from "./layouts/HomeLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
