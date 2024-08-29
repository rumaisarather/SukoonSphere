import React, { useState, useEffect } from "react";
import LinkButton from "@/components/sharedComponents/Buttons/LinkButton";
import CompanyLogo from "../../../assets/images/SukoonSphere_Logo.png";
import { links } from "../../../utils/SharedComp/PageLinks";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function NavMenu() {
  const [isSticky, setIsSticky] = useState(false);

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
<<<<<<< Updated upstream
      className={`hidden lg:flex justify-between w-full z-20 transition-colors duration-300 ease-linear p-2 h-20 ${isSticky ? "fixed top-0 left-0 bg-[#0c2b64] shadow-md" : "absolute"
        }`}
    >
      <img src={CompanyLogo} className="object-contain" alt="Logo Loading..." />
      <ul className="flex justify-between w-96 items-center">

=======
      className={` flex  sm:items-center sm:flex-row justify-between w-full z-20 transition-colors duration-300 ease-linear p-2 h-20 ${
        isSticky ? "fixed top-0 left-0 bg-[#0c2b64] shadow-md" : "absolute"
      }`}
    >
      <img
        src={CompanyLogo}
        className="object-contain w-14 "
        alt="Logo Loading..."
      />
      <GiHamburgerMenu className="block  md:hidden " />
      <ul className="flex gap-3 sm:justify-between sm:w-96 sm:items-center   ">
>>>>>>> Stashed changes
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
        <LinkButton
          to="/#"
          variant="primary"
          size="small"
          className={`
<<<<<<< Updated upstream
          ${isSticky && 'bg-[#f98702]'
            }`}
=======
          ${isSticky && "bg-[#f98702]"}`}
>>>>>>> Stashed changes
        >
          Login
        </LinkButton>
      </ul>
    </nav>
  );
}

export default NavMenu;
