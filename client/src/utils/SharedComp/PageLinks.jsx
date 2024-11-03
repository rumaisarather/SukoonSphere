import { FaHome } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
const links = [
  {
    name: "Home",
    address: "/",
    icon: <FaHome />,
  },
  {
    name: "Articles & Resources",
    address: '',

    description: "Educational content and tools",
    sublinks: [
      {
        name: "Articles",
        address: 'articles',
        description: "In-depth written content",
        icon: <FaCaretRight />,
      },
      {
        name: "Quizzes",
        address: 'all-quizzes',
        description: "Interactive knowledge tests",
        icon: <FaCaretRight />,

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
        icon: <FaCaretRight />,

        // icon: <BiQuestionMark />,
      },
      {
        name: "Stories",
        address: 'Posts',
        description: "User-submitted discussions",
        icon: <FaCaretRight />,

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
        icon: <FaCaretRight />,

        // icon: <GiPodium />,
      },
      {
        name: "Videos",
        address: 'media/all-videos',
        description: "Visual media content",
        icon: <FaCaretRight />,

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
        icon: <FaCaretRight />,

        // icon: <AiOutlineMail />,
      },
      {
        name: "About Us",
        address: 'about-us',
        description: "Learn about our mission",
        icon: <FaCaretRight />,

        // icon: <AiOutlineInfoCircle />,
      },
      {
        name: "Mental Health",
        address: 'about/mental-health',
        description: "Mental health resources",
        icon: <FaCaretRight />,

        // icon: <FaBrain />,
      },
      {
        name: "Our Review Board",
        address: '/about/our-team',
        description: "Meet our expert team",
        icon: <FaCaretRight />,

        // icon: <FiUsers />,
      },
    ],
  },
];
export default links;