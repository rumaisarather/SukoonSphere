import React from "react";
import CompanyLogo from "../../assets/images/SukoonSphere_Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import links from "@/utils/SharedComp/PageLinks";
import { FaCircleDot } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    // Main Containerg
    <div className="bg-[#061c23] mt-6 px-6 sm:px-0">
      {/* Top Container */}
      <div className="flex-col sm:flex sm:flex-row sm:px-20 py-6 gap-4 ">
        <div className="text-white flex flex-col gap-4 mt-4">
          {/* Left container */}
          <h1>Subscribe to People First Dispatch</h1>
          <p>A weekly digest of latest news, articles and resources</p>
          <div className="flex gap-4">
            <input
              type="search"
              className="p-4 w-full bg-white rounded-[4px] "
              placeholder="Enter Your Quries"
            />
            <button className="bg-[var(--brand--goldenrod)] text-[var(--grey--900)] rounded-[6px] px-6 py-2 text-sm leading-[1.32]">
              Search
            </button>
          </div>
          <p>
            By continuing, you agree to NovaBenefits{" "}
            <Link className="text-blue-600">Terms of Use</Link> and{" "}
            <Link className="text-blue-600">Privacy Policy</Link>
          </p>
          <div className="flex gap-3  md:mt-0 cursor-pointer text-white">
            <span>Follow us on </span>
            <FaFacebook className="size-6 hover:text-[var(--ternery)]" />
            <FaTwitter className="size-6 hover:text-[var(--ternery)]" />
            <AiFillInstagram className="size-6 hover:text-[var(--ternery)]" />
          </div>
        </div>
        <div className="bg-[var(--grey--900)] w-[1px] mx-[60px]"></div>
        <div className="flex flex-col sm:flex-row gap-8 ">
          {/* Right Container */}
          <div className="flex flex-col gap-3 sm:justify-between text-white mt-2">
            <span className="text-gray-500 uppercase font-extrabold text-lg">
              Quick Links
            </span>
            <ul className="flex flex-col gap-3 sm:justify-between mt-2">
              {links.map((link, index) => (
                <li
                  className="text-base font-extrabold"
                  key={`${link.name}-${index}`}
                >
                  <NavLink
                    to={link.address}
                    className="text-[var(--white-color)] hover:text-[var(--ternery)]"
                  >
                    {link.name}
                  </NavLink>

                  {link.sublinks && (
                    <ul>
                      {link.sublinks.map((sublink) => (
                        <li key={sublink.name} className="flex gap-2 font-normal items-center ">
                          <FaCircleDot className="text-[.6rem]" />
                          <NavLink to={sublink.address}

                          >
                            <span>{sublink.name}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* <ul className="flex flex-col gap-3 sm:justify-between text-white mt-2">
            <span className="text-gray-500 uppercase font-extrabold text-lg">
              Quick Links
            </span>
            {links.map((link) =>
              link.sublinks?.map((sublink, index) => (

                <li className="text-white font-extrabold" key={sublink.name}>
                  <NavLink
                    to={sublink.address}
                    className="hover:text-[var(--ternery)]"
                  >
                    {sublink.name}
                  </NavLink>
                </li>
              ))
            )}
          </ul> */}

          <ul className="space-y-3 mt-2">
            <span className="text-gray-500 uppercase font-extrabold text-lg">
              Know Us
            </span>
            <li className="text-base font-extrabold">
              <Link
                to="about/mental-health"
                className="text-[var(--white-color)] hover:text-[var(--ternery)]"
              >
                {" "}
                About Mental Health
              </Link>
            </li>
            <li className="text-base font-extrabold">
              <Link
                to="about/mental-health"
                className="text-[var(--white-color)] hover:text-[var(--ternery)]"
              >
                {" "}
                About Us
              </Link>
            </li>
            <li className="text-base font-extrabold">
              <Link
                to="/about/our-team"
                className="text-[var(--white-color)] hover:text-[var(--ternery)]"
              >
                {" "}
                Our Review Board
              </Link>
            </li>
            <li className="text-white font-extrabold">
              <Link to=""> Contact Page</Link>
            </li>
            <li className="text-base font-extrabold">
              <Link
                to=""
                className="text-[var(--white-color)] hover:text-[var(--ternery)]"
              >
                {" "}
                Terms of Service
              </Link>
            </li>
          </ul>
          <ul>
            <span className="text-gray-500 uppercase font-extrabold text-lg">
              RECO BY NMHP
            </span>
            <li>
              <Link></Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Container */}
      <div className="bg-gray-500  h-[.1px] mt-[28px] mb-[18px] mx-20"></div>
      <div>
        <div className="bg-[#061c23] sm:px-20 text-gray-500 ">
          <p className="text-sm">
            SukoonSphere's content is for informational and educational purposes
            only. Our website is not intended to be a substitute for
            professional medical advice, diagnosis, or treatment.
          </p>
          <p>© 2024 Inc. — All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
