import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QaSection, Articles, Home, ProfessionalsProfile, Quiz, PodcastEpisodes, Posts, AllQuizzes, MentalHealth, AllVideos, Video, PodcastPlaylists, OurTeam, AboutUs, Article, } from "./pages";

import HomeLayout from "./layouts/HomeLayout";
import { ArticlesLoader } from "./pages/articles/Articles";
import { AllQuizzesLoader } from "./pages/quiz/AllQuizzes";
import { QuizDetailsLoader } from "./pages/quiz/Quiz";
import PodcastPage from "./pages/podcast/PodcastPage";
import { AllVideosLoader } from "./pages/mediaLibrary/AllVideos";
import { SingleVideoDetailsLoader } from "./pages/mediaLibrary/video";

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
      {
        path: "/articles/article",
        element: <Article />,
      },
      // Added Quiz oute
      {
        path: "/quiz",
        element: <Quiz />,
      },
      // Podcast Added
      {
        path: "/podcast/:id",
        element: <PodcastEpisodes />,
      },
      {
        path: "/podcast-page/:id",
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
        path: "/about/our-team",
        element: <OurTeam />,
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
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: 'media/all-videos',
        element: <AllVideos />,
        loader: AllVideosLoader,
      },
      {
        path: 'media/all-videos/video',
        element: <Video />
      },
      {
        path: 'podcast/playlists',
        element: <PodcastPlaylists />
      },
      {
        path: 'media/all-videos/video/:id',
        element: <Video />,
        loader: SingleVideoDetailsLoader
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
