import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Articles, Home, ProfessionalsProfile, Quiz, Podcast } from "./pages";

import HomeLayout from "./layouts/HomeLayout";
import { ArticlesLoader } from "./pages/articles/Articles";
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
        loader: ArticlesLoader,
      },
      // Added Quiz oute
      {
        path: "/quiz",
        element: <Quiz />,
      },
      // Podcast Added
      {
        path: "/podcast",
        element: <Podcast />,
      },
      {
        path: "/user-profile/:id",
        element: <ProfessionalsProfile />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
