import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QaSection, Articles, Home, ProfessionalsProfile, Quiz, Podcast, Posts, AllQuizzes, MentalHealth, AllVideos, Video, } from "./pages";

import HomeLayout from "./layouts/HomeLayout";
import { ArticlesLoader } from "./pages/articles/Articles";
import { AllQuizzesLoader } from "./pages/quiz/AllQuizzes";
import { QuizDetailsLoader } from "./pages/quiz/Quiz";
import PodcastPage from "./pages/podcast/PodcastPage";

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
        path: "/QA-section",
        element: <QaSection />,
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
        path: "/podcast-page",
        element: <PodcastPage />,
      },
      {
        path: "/Posts",
        element: <Posts />,
      },
      {
        path: "/user-profile/:id",
        element: <ProfessionalsProfile />,
      },
      {
        path: "/all-quizzes",
        element: <AllQuizzes></AllQuizzes>,
        loader: AllQuizzesLoader,
      },
      {
        path: "/all-quizzes/quiz/:id",
        element: <Quiz />,
        loader: QuizDetailsLoader,
      },

      {
        path: 'about/mental-health',
        element: <MentalHealth />
      },
      {
        path: 'media/all-videos',
        element: <AllVideos />
      },
      {
        path: 'media/all-videos/video',
        element: <Video />
      }

    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
