import { FaHome } from "react-icons/fa"; // Home icon
import { MdArticle } from "react-icons/md"; // Article icon
import { BiQuestionMark } from "react-icons/bi"; // Quiz icon
import { BsChatDots } from "react-icons/bs"; // Discussion icon
import { GiPodium } from "react-icons/gi"; // Podcasts icon
import { MdVideoLibrary } from "react-icons/md"; // Videos icon
import { AiOutlineMail } from "react-icons/ai"; // Contact Us icon
import { AiOutlineInfoCircle } from "react-icons/ai"; // About Us icon
import { FaBrain } from "react-icons/fa"; // Mental Health icon
import { FiUsers } from "react-icons/fi"; // Our Review Board icon

export const links = [
  {
    name: "Home",
    address: "/",
    // icon: <FaHome />, // Icon for Home
  },
  {
    name: "Articles & Resources",
    address: '',
    // icon: <MdArticle />, // Icon for Articles & Resources
    sublinks: [
      {
        name: "Articles",
        address: 'articles',
        // icon: <MdArticle />, // Icon for Articles
      },
      {
        name: "Quizzes",
        address: 'all-quizzes',
        // icon: <BiQuestionMark />, // Icon for Quizzes
      },
    ],
  },
  {
    name: 'Debates & Discussions',
    address: "",
    // icon: <BsChatDots />, // Icon for Debates & Discussions
    sublinks: [
      {
        name: "QA-Section",
        address: "QA-Section",
        // icon: <BiQuestionMark />, // Icon for QA-Section
      },
      {
        name: "Stories",
        address: 'Posts',
        // icon: <BsChatDots />, // Icon for Stories
      },
    ],
  },
  {
    name: 'Media Libraries',
    address: "",
    // icon: <MdVideoLibrary />, // Icon for Media Libraries
    sublinks: [
      {
        name: "Podcasts",
        address: "podcast/playlists",
        // icon: <GiPodium />, // Icon for Podcasts
      },
      {
        name: "Videos",
        address: 'media/all-videos',
        // icon: <MdVideoLibrary />, // Icon for Videos
      },
    ],
  },
  {
    name: 'Contact & Help',
    address: "",
    // icon: <AiOutlineMail />, // Icon for Contact & Help
    sublinks: [
      {
        name: "Contact Us",
        address: "contact-us",
        // icon: <AiOutlineMail />, // Icon for Contact Us
      },
      {
        name: "About Us",
        address: 'about-us',
        // icon: <AiOutlineInfoCircle />, // Icon for About Us
      },
      {
        name: "Mental Health",
        address: 'about/mental-health',
        // icon: <FaBrain />, // Icon for Mental Health
      },
      {
        name: "Our Review Board",
        address: '/about/our-team',
        // icon: <FiUsers />, // Icon for Our Review Board
      },
    ],
  },
];
