import { FaHome } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    address: "/",
    icon: FaHome,
  },
  {
    name: "Articles & Resources",
    address: '',
    // icon: <MdArticle />,
    description: "Educational content and tools",
    sublinks: [
      {
        name: "Articles",
        address: 'articles',
        description: "In-depth written content",
        // icon: <MdArticle />,
      },
      {
        name: "Quizzes",
        address: 'all-quizzes',
        description: "Interactive knowledge tests",
        // icon: <BiQuestionMark />,
      },
    ],
  },
  {
    name: 'Debates & Discussions',
    address: "",
    // icon: <BsChatDots />,
    description: "Engage in dialogues",
    sublinks: [
      {
        name: "QA-Section",
        address: "QA-Section",
        description: "Question and answer forum",
        // icon: <BiQuestionMark />,
      },
      {
        name: "Stories",
        address: 'Posts',
        description: "User-submitted discussions",
        // icon: <BsChatDots />,
      },
    ],
  },
  {
    name: 'Media Libraries',
    address: "",
    // icon: <MdVideoLibrary />,
    description: "Audio-visual resources",
    sublinks: [
      {
        name: "Podcasts",
        address: "podcast/playlists",
        description: "Audio-based discussions",
        // icon: <GiPodium />,
      },
      {
        name: "Videos",
        address: 'media/all-videos',
        description: "Visual media content",
        // icon: <MdVideoLibrary />,
      },
    ],
  },
  {
    name: 'Contact & Help',
    address: "",
    // icon: <AiOutlineMail />,
    description: "Get support or learn more",
    sublinks: [
      {
        name: "Contact Us",
        address: "contact-us",
        description: "Get in touch with support",
        // icon: <AiOutlineMail />,
      },
      {
        name: "About Us",
        address: 'about-us',
        description: "Learn about our mission",
        // icon: <AiOutlineInfoCircle />,
      },
      {
        name: "Mental Health",
        address: 'about/mental-health',
        description: "Mental health resources",
        // icon: <FaBrain />,
      },
      {
        name: "Our Review Board",
        address: '/about/our-team',
        description: "Meet our expert team",
        // icon: <FiUsers />,
      },
    ],
  },
];
