import React, { useState, useEffect } from "react";
import LinkButton from "@/components/sharedComponents/Buttons/LinkButton";
import CompanyLogo from "../../../assets/images/SukoonSphere_Logo.png";
import { links } from "../../../utils/SharedComp/PageLinks";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useAuth0 } from "@auth0/auth0-react";
import { BsThreeDotsVertical } from "react-icons/bs";

function NavMenu() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [miniMenu, setMiniMenu] = useState(false);

  const { isAuthenticated, loginWithRedirect, isLoading, user, logout } =
    useAuth0();
  const isUser = isAuthenticated && user;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleMiniMenu = () => {
    setMiniMenu(!miniMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 47);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`flex items-center justify-between w-full z-20 transition-all ease-in-out p-2 h-[70px] ${
        isSticky
          ? "sticky  top-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-md"
          : "sticky "
      }`}
    >
      <GiHamburgerMenu
        className="block place-content-end absolute right-3 md:hidden cursor-pointer text-[1.4rem] text-white"
        onClick={toggleMenu}
      />
      <div className="flex w-full justify-between items-center  px-28  ">
        <img
          src={CompanyLogo}
          className="object-contain w-14 "
          alt="Logo Loading..."
        />
        <div className=" hidden md:block">
          <ul className="flex gap-5 sm:justify-between dsm:items-center   ">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.address}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[var(--ternery)] font-extrabold"
                      : `${isSticky ? "text-white" : "text-[var(--secondary)]"}`
                  } hover:text-[var(--ternery)] transition-all duration-300`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>
        {isUser ? (
          <>
            <div className="flex items-center justify-center gap-2">
              <img
                className="w-9 h-9 rounded-full border-[3px] border-blue-400"
                src={user.picture}
                alt="User"
              />
              <BsThreeDotsVertical
                className={`block cursor-pointer  text-[1.4rem] ${isSticky?'text-white':'text-[var(--secondary)]'}`}
                onClick={toggleMiniMenu}
              />
            </div>
            <div
              className={`${
                miniMenu ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
              }  absolute overflow-hidden transition-all duration-300 ease-in-out p-2 shadow-lg rounded-[4px] bg-white flex flex-col w-44 top-[4.5rem] right-[7.5rem]`}
              style={{
                transition:
                  "opacity 0.5s ease, max-height 0.5s ease dropdown-content menu",
              }}
            >
              <div className="flex items-center gap-3 pb-3">
                <img
                  className="w-9 h-9 rounded-full border-3 border-blue-300"
                  src={user.picture}
                  alt="User"
                />
               <Link > <span className="text-black">{user.name}</span> </Link>
              </div>

              <button
                to="/#"
                onClick={async () => {
                  logout();
                }}
                className={`transition-all ease-in-out duration-200  bg-none px-4 py-1 rounded-[4px]  hover:text-white
        ${isSticky ? " border-[1.5px] border-[var(--secondary)] text-[var(--secondary)] hover:border-[var(--secondary)] hover:bg-[var(--secondary)]" : "border-[1.5px] text-[var(--secondary)]   border-[var(--secondary)] hover:bg-[var(--secondary)]"}`}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={async () => {
              loginWithRedirect();
            }}
            className={`transition-all ease-in-out duration-200  bg-none px-4 py-1 rounded-[4px]  hover:text-white
              ${isSticky ? " border-[1.5px] border-white hover:border-[#62cb9c8d] hover:bg-[#62cb9c8d]" : "border-[1.5px] text-[var(--secondary)]  border-[var(--secondary)] hover:bg-[var(--secondary)]"}`}
          >
            Login
          </button>
        )}
      </div>
      <div className="block md:hidden">
        <ul
          className={`flex flex-col w-80 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]  p-4 transition-all  ease-in-out duration-600 absolute top-0 h-[100vh] ${menuOpen ? "left-0" : "-left-full"}`}
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
          ${isSticky && "bg-[var(--btn-primary)]"}`}
          >
            Login
          </LinkButton>
        </ul>
      </div>
    </nav>
  );
}
export default NavMenu;
