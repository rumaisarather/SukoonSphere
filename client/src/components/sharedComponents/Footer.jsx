import CompanyLogo from "../../assets/images/SukoonSphere_Logo.png";


const Footer = () => {
  return (
    <footer className={`footer  place-items-center text-white p-10 mt-7  bg-[#0c2b64] `}  >
       <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
    <img src={CompanyLogo} className="object-cover w-40" alt="Logo Loading..." />
    </div>
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
 
</footer>
  )
}
export default Footer