import React from "react";
import CompanyLogo from "../../assets/images/SukoonSphere_Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { links } from "@/utils/SharedComp/PageLinks";
import { FaCircleDot } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    // Main Containerg
    <div className="bg-[#061c23] mt-6">
      {/* Top Container */}
      <div className="flex  px-20 py-6 gap-4 ">
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
        <div className="flex gap-8 ">
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
        <div className="bg-[#061c23] px-20 text-gray-500">
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

// <div className="text-white text-sm p-5 bg-[#061c23]" >
// <div className="container mx-auto grid grid-cols-12  gap-4">
//   <div className='col-span-3 flex flex-col justify-center items-center'>
//     <img
//       src={CompanyLogo}
//       className="object-cover w-32"
//       alt="Logo Loading..."
//     />
//     <p className='text-sm text-justify' >
//       Our content helps you make the best choices for your mental well-being. Through powerful storytelling, expert advice, and a supportive community, we aim to raise awareness about mental health and break the stigma surrounding it. Join us as we embark on this journey towards a healthier mind and a brighter future.
//     </p>
//   </div>

//   <div className="space-y-2 text-white col-span-3 text-center mt-10 items-center border-t border-[var(--ternery)] " >
//     <ul className="flex flex-col gap-3 sm:justify-between  sm:items-center mt-2">
//       {links.map((link, index) => (
//         <li className='text-base font-extrabold' key={`${link.name}-${index}`}>
//           <NavLink

//             to={link.address}
//             className="text-[var(--white-color)] hover:text-[var(--ternery)]"
//           >
//             {link.name}
//           </NavLink>
//         </li>
//       ))}
//     </ul>
//   </div>
//   <div className='col-span-3 items-center text-center mt-10 border-t border-[var(--ternery)]'>
//     <ul className="space-y-3 mt-2">
//       <li className='text-base font-extrabold'>
//         <Link to="about/mental-health" className='text-[var(--white-color)] hover:text-[var(--ternery)]'> About Mental Health</Link>
//       </li>
//       <li className='text-base font-extrabold'>
//         <Link to="about/mental-health" className='text-[var(--white-color)] hover:text-[var(--ternery)]'> About Us</Link>
//       </li>
//       <li className='text-base font-extrabold'>
//         <Link to="/about/our-team" className='text-[var(--white-color)] hover:text-[var(--ternery)]'> Our Review Board</Link>
//       </li>
//       <li className='text-base font-extrabold'>
//         <Link to=""> Contact Page</Link>
//       </li>
//       <li className='text-base font-extrabold'>
//         <Link to="" className='text-[var(--white-color)] hover:text-[var(--ternery)]'> Terms of Service</Link>
//       </li>
//     </ul>
//   </div>
//   <div className="col-span-3  flex flex-col justify-between text-center mt-10  items-center border-t border-[var(--ternery)] ">
//     <div className='mt-2'>
//       <h1 className="text-lg font-bold text-[var(--white-color)]">Daily Tips for a Healthy Mind to Your Inbox</h1>
//       <input type="email" placeholder="Enter your email" className="input w-full max-w-xs mt-2" />
//       <button className="action-button mt-2">SIGN UP</button>
//     </div>
//     <div className="flex space-x-4 mt-4 md:mt-0 cursor-pointer">
//       <FaFacebook className="size-6 hover:text-[var(--ternery)]" />
//       <FaTwitter className="size-6 hover:text-[var(--ternery)]" />
//       <AiFillInstagram className="size-6 hover:text-[var(--ternery)]" />
//     </div>
//   </div>
// </div>
// <div className="border-t border-gray-700 mt-4 pt-4 text-xs text-[var(--white-color)] max-w-7xl pl-6 ">
//   <p className='text-sm'>SukoonSphere's content is for informational and educational purposes only. Our website is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</p>
//   <p>© 2024 Inc. — All rights reserved.</p>
// </div>
// </div >
export default Footer;
