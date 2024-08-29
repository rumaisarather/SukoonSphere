import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { About, Articles, Home, Quiz } from "./pages";
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
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
