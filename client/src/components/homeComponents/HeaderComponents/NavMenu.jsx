import React, { useState } from "react";
import LinkButton from "@/components/sharedComponents/Buttons/LinkButton";
import CompanyLogo from "../../../assets/images/SukoonSphere_Logo.png";
import links from "@/utils/SharedComp/PageLinks";
import { Form, Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useAuth0 } from "@auth0/auth0-react";
import { BsDatabase, BsKey, BsPencil, BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsFillTriangleFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowUp, MdPrivateConnectivity } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
function NavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [miniMenu, setMiniMenu] = useState(false);
  const isUser = false;

  const user = {
    name: "Sartaj Ashraf",
    email: 'sartajashraf842@gmail.com',
    picture: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
  }
  // const { isAuthenticated, loginWithRedirect, user, logout } = useAuth0();
  // const isUser = isAuthenticated && user;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMiniMenu = () => {
    setMiniMenu(!miniMenu);
  };

  return (
    <nav className="w-full flex bg-white sticky top-0 items-center justify-between shadow-[0px_1px_10px_rgba(0,0,0,0.1)]  z-50 transition-all ease-in-out p-2 h-[65px]">
      <GiHamburgerMenu
        className="block absolute right-3 md:hidden cursor-pointer text-[1.4rem]"
        onClick={toggleMenu}
      />
      <div className="flex w-full justify-between items-center px-12">
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
                  className="flex group items-center justify-center gap-1"
                >
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                  {index !== 0 &&
                    <MdOutlineKeyboardArrowUp className="size-[1.4rem] ml-1 group-hover:rotate-180 transition-all" />}
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
                          <div className=" border bg-[var(--primary)] text-white text-base border-[var(--primary)] rounded-full p-2 font-bold ">
                            {sublink.icon}
                          </div>
                          <div className="flex flex-col ml-2 text-[16px] text-gray-600">
                            <span className="hover:text-[var(--ternery)]">{sublink.name}</span>
                            <span className="text-[12px] text-gray-400 ">
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
              className={` ${miniMenu
                ? "opacity-100 max-h-[500px] "
                : "opacity-0 max-h-0"} 
               absolute overflow-hidden transition-all duration-300 
                ease-in-out shadow-lg rounded-[4px] bg-[var(--body)] flex flex-col w-72 top-[4.5rem] right-[7.5rem]
                `}
              style={{
                transition: "opacity 0.5s ease, max-height 0.5s ease ",
              }}
            >
              <div className="flex items-center flex-col gap-4 pb-3 relative">
                {/* Header Section */}
                <div className="bg-[var(--primary)] w-full h-[100px] flex items-center justify-center relative rounded-t-lg">
                  <h4 className="text-white text-lg font-bold">SARTAJ</h4>
                  <button className="absolute right-4 bottom-2 text-white text-sm hover:text-gray-300">
                    <BsPencil />
                  </button>
                </div>

                {/* Profile Section */}
                <div className="flex flex-col justify-center items-center mt-[-40px] z-10">
                  <img
                    className="w-12 h-12 rounded-full border-1 border-black shadow-lg"
                    src={user.picture || '/path/to/default/profile.jpg'}
                    alt="User"
                  />
                  <h4 className="text-[var(--gray--900)] mt-2 font-semibold">SARTAJ ASHRAF</h4>
                  <p className="text-[var(--grey--800)] text-sm">sartajashraf842@gmail.com</p>
                  <div className="flex gap-1">
                    <Link to={"/user/change-passowrd"}>
                      <button className="bg-gray-800 hover:bg-gray-900 text-white rounded-full p-2 ">
                        <BsKey className="size-5" />
                      </button>
                    </Link>
                    <Link to={"/"}>
                      <button className="bg-gray-800 hover:bg-gray-900 text-white rounded-full p-2 ">
                        <MdPrivateConnectivity className="size-5" />
                      </button>
                    </Link>
                    <Link to={"/"}>
                      <button className="bg-gray-800 hover:bg-gray-900 text-white rounded-full p-2 ">
                        <BsDatabase className="size-5" />
                      </button>
                    </Link>
                  </div>
                  <div className="flex justify-center gap-4 mt-4">
                    {/* <button className="bg-gray-800 hover:bg-gray-900 text-white rounded-full p-3">
                      <i className="fas fa-id-card text-lg"></i>
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-white rounded-full p-3">
                      <i className="fas fa-map-marker-alt text-lg"></i>
                    </button> */}
                  </div>

                  <div>
                    <Form method="post" action="/logout">
                      <button type="submit" className={`btn-2 `}>Logout</button>
                    </Form>
                  </div>
                </div>


              </div>


            </div>
          </>
        ) : (
          <div className="flex gap-2">

            <Link to={"/auth/sign-up"}>
              <button
                // onClick={async () => {
                //   loginWithRedirect();
                // }}
                className="hidden sm:flex bg-white items-center gap-1 rounded-[5px] shadow-[0_2px_0_0_rgba(0,0,0,0.04),_inset_0_0_0_2px_#e0e0e0] transition-all ease-in-out duration-600 text-gray-900 px-3 py-2 text-xs leading-[1.32] hover:bg-[#f2f6ff]"
              >
                <span>Sign Up</span>
                <FaArrowRightLong />
              </button>
            </Link>
            <Link to={"/auth/sign-in"}>
              <button
                className="hidden sm:flex bg-black items-center gap-1 rounded-[5px] transition-all ease-in-out duration-600 text-white px-3 py-2 text-xs leading-[1.32] hover:bg-[#15264e]"
              >
                <span>Login</span>
                <FaArrowRightLong />
              </button>
            </Link>
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
    </nav >
  );
}

export default NavMenu;
