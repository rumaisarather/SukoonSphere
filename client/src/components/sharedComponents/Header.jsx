// const Header = () => {
//   // Create a Nav,
//   // Inside navbar : Logo , navigation links , login button(link)
//   // Import Links in new component (navlinks)
//   // Create ul tag
//   // Map links form Pagelinks.js
//   // Destructure links {name, address,}
//   // return li..... <link name ={name} address ={address}>{}<link/>
//   //
//   //
//   // const Link = ({adress, name, sublist}) =>{
//   //     return(
//   //         <li key={name}>
//   //              <a>{name}</a>
//   //              {sublist &&
//   //              <ul>
//   //                 <li>{sublist.map((sublink)=>{
//   // return(
//   //         <li key={sublink.name}>
//   //              <a>{sublink.name}</a>
//   //              </li>
//   //              </ul>}
//   //         </li>
//   //     )
//   // 
//   return (
//     <div className="navbar bg-white sticky top-0 z-10 max-h-40">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
//             <li><a>Item 1</a></li>
//             <li>
//               <a>Parent</a>
//               <ul className="p-2">
//                 <li><a>Submenu 1</a></li>
//                 <li><a>Submenu 2</a></li>
//               </ul>
//             </li>
//             <li><a>Item 3</a></li>
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">SUKOON-SPHERE</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1  ">
//           <li ><a>Home</a></li>
//           <li><a>Sevirce</a></li>
//           <li><a>Content</a></li>
//           <li>
//             <details>
//               <summary>Dropdown</summary>
//               <ul className=" dropdown-content menu bg-white z-[1] w-52 p-2 shadow">
//                 <li><a>Submenu 1</a></li>
//                 <li><a>Submenu 2</a></li>
//                 <li><a>Submenu 2</a></li>
//               </ul>
//             </details>
//           </li>
//           <li><a>Help</a></li>
//         </ul>
//       </div>
//       <div className="navbar-end">
//         <a className="btn">Login</a>
//       </div>
//     </div>
//   )
// }
// export default Header



import React from 'react';
import Navbackground from "../../assets/images/testimonial-bg.jpeg";

import SocialLinks from '../homeComponents/HeaderComponents/SocialLinks';
import NavMenu from '../homeComponents/HeaderComponents/NavMenu';
import { SectionWrapper } from '@/assets/styles/HomeLayout';


const Header = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${Navbackground})`, height: '60vh'
    }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-3 flex flex-col items-center justify-center  text-center">
        <SocialLinks />
        <div className="container text-white py-3">
          <SectionWrapper>
            <NavMenu />
            <div className='py-4'>
              <h4 className='text-2xl font-semibold py-3' style={{ color: 'var(--white-color)', fontFamily: "Luxurious Roman", fontWeight: 400, fontStyle: ' normal', }}>
                We are here for
              </h4>
              <h1 className='text-4xl font-extrabold' style={{
                color: 'var(--white-color) ', fontFamily: "Luxurious Roman", fontWeight: 400, fontStyle: ' normal',
              }}>
                Helping you find clarity and balance
              </h1>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section >

  );
};

export default Header;
