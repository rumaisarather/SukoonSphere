import CompanyLogo from "../../assets/images/SukoonSphere_Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="grid  grid-cols-1 sm:grid-cols-3 sm:place-items-center place-items-start  text-white p-4 sm:pt-4  mt-7  bg-gradient-to-r from-[#0c2b64] to-[rgb(44,89,174)] ">
      <div className=" ">
        <img
          src={CompanyLogo}
          className="object-cover w-32"
          alt="Logo Loading..."
        />
        <h4 className="pb-3">Social</h4>
        <div className="flex gap-3">
          <FaFacebook className="size-6 " />
          <FaTwitter className="size-6" />
          <AiFillInstagram className="size-6" />
        </div>
      </div>
      <div className="pt-3 pb-3 sm:p-6 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit eum
          laborum officiis et? Ipsa perferendis, saepe eaque quaerat quasi
          recusandae dolore hic earum aliquid adipisci quas! Maiores velit unde
          atque corporis consequatur tempore perspiciatis, voluptatem numquam
          sunt doloribus? Laboriosam!
        </p>
      </div>
      <nav className=" flex flex-col">
        <h6 className="footer-title">Quick Links</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <div className="col-span-full mt-3 border-t-[.03px] text-center p-4 border-t-[#ffffff81] w-full">
        <p>
          Copyright© 2024 PVHC - All Rights Reserved | Website by Sukoon Sphere
        </p>
      </div>
    </footer>
  );
};
export default Footer;
