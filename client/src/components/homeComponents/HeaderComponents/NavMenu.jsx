import React, { useState } from "react";
import LinkButton from "@/components/sharedComponents/Buttons/LinkButton";
import CompanyLogo from "../../../assets/images/SukoonSphere_Logo.png";
import { links } from "@/utils/SharedComp/PageLinks";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useAuth0 } from "@auth0/auth0-react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsFillTriangleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
function NavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [miniMenu, setMiniMenu] = useState(false);

  const { isAuthenticated, loginWithRedirect, user, logout } = useAuth0();
  const isUser = isAuthenticated && user;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMiniMenu = () => {
    setMiniMenu(!miniMenu);
  };

  return (
    <nav className="flex  bg-white sticky top-0 items-center justify-between shadow-[0px_1px_10px_rgba(0,0,0,0.1)] w-full z-20 transition-all ease-in-out p-2 h-[60px]">
      <GiHamburgerMenu
        className="block absolute right-3 md:hidden cursor-pointer text-[1.4rem]"
        onClick={toggleMenu}
      />
      <div className="flex w-full justify-between items-center px-28">
        <img
          src={CompanyLogo}
          className="object-contain w-14"
          alt="Logo Loading..."
        />
        <div className="hidden md:flex justify-center flex-grow">
          <ul className="flex mt-10 h-16 gap-5 items-center">
            {links.map((link, index) => (
              <div
                className="group relative h-full align-middle"
                key={link.name}
              >
                <NavLink
                  to={link.address}
                  className="flex items-center justify-center"
                >
                  {link.icon}
                  <span className="ml-1">{link.name}</span>
                  {index !== 0 && <IoIosArrowDown className="mt-[3px] ml-1" />}
                </NavLink>

                {link.sublinks && (
                  <ul className="top-14  absolute opacity-0 max-h-0 invisible group-hover:opacity-100 group-hover:max-h-[500px] group-hover:visible transition-[opacity, max-height, transform] duration-300 ease-in-out transform group-hover:translate-y-1 shadow-[0px_1px_10px_rgba(0,0,0,0.1)] bg-white p-2 rounded-[5px] w-72">
                    <BsFillTriangleFill className="text-lg absolute -top-3 left-5 text-white" />
                    {link.sublinks.map((sublink) => (
                      <li
                        key={sublink.name}
                        className="transition-opacity duration-300 ease-in-out border-b-[2px] border-gray-500] last-of-type:border-none"
                      >
                        <NavLink
                          to={sublink.address}
                          className="flex items-center gap-2 px-2 py-2 text-[var(--primary)] hover:text-[var(--ternery)] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        >
                          <div className="bg-[var(--primary)] rounded-full p-5">
                            {sublink.icon}
                          </div>
                          <div className="flex flex-col ml-2 text-gray-500">
                            <span>{sublink.name}</span>
                            <span className="text-[12px]">
                              {sublink.description}
                            </span>
                          </div>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
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
                className="block cursor-pointer text-[1.4rem]"
                onClick={toggleMiniMenu}
              />
              <Link to={"about/user"}>
                <span className="text-black">{user.name}</span>
              </Link>
            </div>
            <div
              className={`${miniMenu ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
                } absolute overflow-hidden transition-all duration-300 ease-in-out p-2 shadow-lg rounded-[4px] bg-white flex flex-col w-44 top-[4.5rem] right-[7.5rem]`}
              style={{
                transition: "opacity 0.5s ease, max-height 0.5s ease ",
              }}
            >
              <div className="flex items-center gap-3 pb-3">
                <img
                  className="w-9 h-9 rounded-full border-3 border-blue-300"
                  src={user.picture}
                  alt="User"
                />
                <Link to={"about/user"}>
                  <span className="text-black">{user.name}</span>
                </Link>
              </div>

              <button
                onClick={async () => {
                  logout();
                }}
                className={`transition-all ease-in-out duration-200 bg-none px-4 py-1 rounded-[4px] hover:text-white`}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={async () => {
                loginWithRedirect();
              }}
              className="hidden sm:flex bg-white items-center gap-1 rounded-[5px] shadow-[0_2px_0_0_rgba(0,0,0,0.04),_inset_0_0_0_2px_#e0e0e0] transition-all ease-in-out duration-600 text-gray-900 px-3 py-2 text-xs leading-[1.32] hover:bg-[#f2f6ff]"
            >
              <span>Sign in</span>
              <FaArrowRightLong />
            </button>
            <button
              onClick={async () => {
                loginWithRedirect();
              }}
              className="hidden sm:flex bg-black items-center gap-1 rounded-[5px] transition-all ease-in-out duration-600 text-white px-3 py-2 text-xs leading-[1.32] hover:bg-[#15264e]"
            >
              <span>Get in touch</span>
              <FaArrowRightLong />
            </button>
          </div>
        )}
      </div>
      <div className="block md:hidden">
        <ul
          className={`flex flex-col w-80 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] p-4 transition-all ease-in-out duration-600 absolute top-0 h-[100vh] ${menuOpen ? "left-0" : "-left-full"}`}
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
                  : "text-white hover:text-orange-300"
              }
              onClick={toggleMenu}
            >
              {link.icon}
              <span className="ml-1">{link.name}</span>
            </NavLink>
          ))}
          <LinkButton to="/#" variant="primary" size="small">
            Login
          </LinkButton>
        </ul>
      </div>
    </nav>
  );
}

export default NavMenu;
