// import CompanyLogo from "../../assets/images/SukoonSphere_Logo.png";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
// const Footer = () => {
//   return (
//     <footer className="grid  grid-cols-1 sm:grid-cols-3 sm:place-items-center place-items-start  text-white p-4 sm:pt-4  mt-7  bg-gradient-to-r from-[#0c2b64] to-[rgb(44,89,174)] ">
//       <div className=" ">
//         <img
//           src={CompanyLogo}
//           className="object-cover w-32"
//           alt="Logo Loading..."
//         />
//         <h4 className="pb-3">Social</h4>
//         <div className="flex gap-3">
//           <FaFacebook className="size-6 " />
//           <FaTwitter className="size-6" />
//           <AiFillInstagram className="size-6" />
//         </div>
//       </div>
//       <div className="pt-3 pb-3 sm:p-6 ">
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit eum
//           laborum officiis et? Ipsa perferendis, saepe eaque quaerat quasi
//           recusandae dolore hic earum aliquid adipisci quas! Maiores velit unde
//           atque corporis consequatur tempore perspiciatis, voluptatem numquam
//           sunt doloribus? Laboriosam!
//         </p>
//       </div>
//       <nav className=" flex flex-col">
//         <h6 className="footer-title">Quick Links</h6>
//         <a className="link link-hover">About us</a>
//         <a className="link link-hover">Contact</a>
//         <a className="link link-hover">Jobs</a>
//         <a className="link link-hover">Press kit</a>
//       </nav>
//       <div className="col-span-full mt-3 border-t-[.03px] text-center p-4 border-t-[#ffffff81] w-full">
//         <p>
//           Copyright© 2024 PVHC - All Rights Reserved | Website by Sukoon Sphere
//         </p>
//       </div>
//     </footer>
//   );
// };
// export default Footer;


import React from 'react';

import CompanyLogo from "../../assets/images/SukoonSphere_Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { links } from '@/utils/SharedComp/PageLinks';
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="text-white text-sm p-5" style={{ background: 'linear-gradient(var(--primary), var(--secondary))' }}>
      <div className="container mx-auto grid grid-cols-12  gap-4">
        <div className='col-span-3 flex flex-col justify-center items-center'>
          <img
            src={CompanyLogo}
            className="object-cover w-32"
            alt="Logo Loading..."
          />
          <p className='text-sm text-justify' >
            Our content helps you make the best choices for your mental well-being. Through powerful storytelling, expert advice, and a supportive community, we aim to raise awareness about mental health and break the stigma surrounding it. Join us as we embark on this journey towards a healthier mind and a brighter future.
          </p>
        </div>

        <div className="space-y-2 text-white col-span-3 text-center mt-10 items-center border-t border-[var(--ternery)] " >
          <ul className="flex flex-col gap-3 sm:justify-between  sm:items-center mt-2">
            {links.map((link) => (
              <li className='text-base font-extrabold'>
                <NavLink
                  key={link.name}
                  to={link.address}
                  className="text-[var(--white-color)] hover:text-[var(--ternery)]"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='col-span-3 items-center text-center mt-10 border-t border-[var(--ternery)]'>
          <ul className="space-y-3 mt-2">
            <li className='text-base font-extrabold'>
              <Link to="about/mental-health" className='text-[var(--white-color)] hover:text-[var(--ternery)]'> About Mental Health</Link>
            </li>
            <li className='text-base font-extrabold'>
              <Link to="about/mental-health" className='text-[var(--white-color)] hover:text-[var(--ternery)]'> About Us</Link>
            </li>
            <li className='text-base font-extrabold'>
              <Link to="/about/our-team" className='text-[var(--white-color)] hover:text-[var(--ternery)]'> Our Review Board</Link>
            </li>
            <li className='text-base font-extrabold'>
              <Link to=""> Contact Page</Link>
            </li>
            <li className='text-base font-extrabold'>
              <Link to="" className='text-[var(--white-color)] hover:text-[var(--ternery)]'> Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-3  flex flex-col justify-between text-center mt-10  items-center border-t border-[var(--ternery)] ">
          <div className='mt-2'>
            <h1 className="text-lg font-bold text-[var(--white-color)]">Daily Tips for a Healthy Mind to Your Inbox</h1>
            <input type="email" placeholder="Enter your email" className="input w-full max-w-xs mt-2" />
            <button className="action-button mt-2">SIGN UP</button>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0 cursor-pointer">
            <FaFacebook className="size-6 hover:text-[var(--ternery)]" />
            <FaTwitter className="size-6 hover:text-[var(--ternery)]" />
            <AiFillInstagram className="size-6 hover:text-[var(--ternery)]" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-4 pt-4 text-xs text-[var(--white-color)] max-w-7xl pl-6 ">
        <p className='text-sm'>SukoonSphere's content is for informational and educational purposes only. Our website is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</p>
        <p>© 2024 Inc. — All rights reserved.</p>
      </div>
    </div >
  );
};

export default Footer;

