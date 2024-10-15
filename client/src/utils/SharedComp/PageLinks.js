import { FaHome } from "react-icons/fa";


export const links = [
  {
    name: "Home",
    address: "/",
    icon: FaHome,  // JSX version of the icon
  },
  {
    name: "Articles & Resources",
    address: '',
    // icon: <MdArticle />, 
    sublinks: [
      {
        name: "Articles",
        address: 'articles',
        // icon: <MdArticle />, 
      },
      {
        name: "Quizzes",
        address: 'all-quizzes',
        // icon: <BiQuestionMark />, 
      },
    ],
  },
  {
    name: 'Debates & Discussions',
    address: "",
    // icon: <BsChatDots />, 
    sublinks: [
      {
        name: "QA-Section",
        address: "QA-Section",
        // icon: <BiQuestionMark />, 
      },
      {
        name: "Stories",
        address: 'Posts',
        // icon: <BsChatDots />,
      },
    ],
  },
  {
    name: 'Media Libraries',
    address: "",
    // icon: <MdVideoLibrary />, 
    sublinks: [
      {
        name: "Podcasts",
        address: "podcast/playlists",
        // icon: <GiPodium />, 
      },
      {
        name: "Videos",
        address: 'media/all-videos',
        // icon: <MdVideoLibrary />, 
      },
    ],
  },
  {
    name: 'Contact & Help',
    address: "",
    // icon: <AiOutlineMail />, 
    sublinks: [
      {
        name: "Contact Us",
        address: "contact-us",
        // icon: <AiOutlineMail />, 
      },
      {
        name: "About Us",
        address: 'about-us',
        // icon: <AiOutlineInfoCircle />, 
      },
      {
        name: "Mental Health",
        address: 'about/mental-health',
        // icon: <FaBrain />, 
      },
      {
        name: "Our Review Board",
        address: '/about/our-team',
        // icon: <FiUsers />, 
      },
    ],
  },
];
