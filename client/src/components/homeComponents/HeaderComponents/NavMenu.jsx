import React, { useState, useEffect } from "react";
import LinkButton from "@/components/sharedComponents/Buttons/LinkButton";
import CompanyLogo from "../../../assets/images/SukoonSphere_Logo.png";
import { links } from "../../../utils/SharedComp/PageLinks";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useAuth0 } from "@auth0/auth0-react";

function NavMenu() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  const { isAuthenticated, loginWithRedirect, isLoading, user, logout } = useAuth0();
  const isUser = isAuthenticated && user;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 45);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={` flex items-center sm:items-center  sm:flex-row justify-between w-full z-20 transition-colors duration-[.2s] ease-in-out p-2 h-[70px] px-6 ${
        isSticky ? "fixed top-0 left-0 bg-[#0c2b64] shadow-md" : "absolute"
      }`}
    >
      <img
        src={CompanyLogo}
        className="object-contain w-14 "
        alt="Logo Loading..."
      />
      <GiHamburgerMenu
        className="block place-content-end absolute right-3 md:hidden cursor-pointer text-[1.4rem] text-white"
        onClick={toggleMenu}
      />
      <div className=" hidden md:block">
        <ul className="flex gap-3 sm:justify-between  sm:items-center   ">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.address}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-300 font-bold"
                  : "text-white  hover:text-orange-300"
              }
            >
              {link.name}
            </NavLink>
          ))}
          {isUser ? (
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-center gap-2 ">
                <img className="w-9 h-9 rounded-full border-4 border-blue-400" src={user.picture} />
                <span className="text-white">{user.name}</span>
              </div>
              <LinkButton
                to="/#"
                variant="primary"
                size="small"
                onClick={async () => {
                  logout();
                }}
                className={`
          ${isSticky && "bg-[#f98702]"}`}
              >
                logout
              </LinkButton>
            </div>
          ) : (
            <LinkButton
              to="/#"
              variant="primary"
              size="small"
              onClick={async () => {
                loginWithRedirect();
              }}
              className={`
          ${isSticky && "bg-[#f98702]"}`}
            >
              Login
            </LinkButton>
          )}
        </ul>
      </div>
      <div className="block md:hidden">
        <ul
          className={`flex flex-col w-80 bg-gradient-to-r from-[#0c2b64] to-[rgb(44,89,174)]  p-4 transition-all  ease-in-out duration-600 absolute top-0 h-[100vh] ${menuOpen ? "left-0" : "-left-full"}`}
        >
          <RxCross2
            onClick={toggleMenu}
            className="absolute right-3 text-[1.4rem] text-white cursor-pointer"
          />
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.address}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-300 font-bold"
                  : "text-white  hover:text-orange-300"
              }
              onClick={toggleMenu}
            >
              {link.name}
            </NavLink>
          ))}
          <LinkButton
            to="/#"
            variant="primary"
            size="small"
            className={`
          ${isSticky && "bg-[#f98702]"}`}
          >
            Login
          </LinkButton>
        </ul>
      </div>
    </nav>
  );
}

// gap: 1rem;
// width: 100%;
// /* margin-top: 2rem; */
// background: blue;
// position: absolute;
// padding: 1rem;
// left: -100%;
// left: 0;
// transition: .4s ease;
export default NavMenu;
