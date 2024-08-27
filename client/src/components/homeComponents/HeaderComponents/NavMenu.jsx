
import LinkButton from "@/components/sharedComponents/Buttons/LinkButton";
import CompanyLogo from "../../../assets/images/SukoonSphere_Logo.png";
const styles = {
    a: {


    }

}
const NavMenu = () => (

    <nav className="hidden lg:flex justify-between">
        <img src={CompanyLogo} alt="Logo Loading..." width={'150px'} />
        <ul className="flex space-x-8 items-center">
            <li>
                <a href="#" className="text-white hover:text-gray-400 uppercase">Collections</a>
            </li>
            <li>
                <a href="https://scholarlykitchen.sspnet.org/translation/" className="text-white hover:text-gray-400 uppercase">Translations</a>
            </li>
            <li>
                <a href="https://scholarlykitchen.sspnet.org/about/" className="text-white hover:text-gray-400 uppercase">About</a>
            </li>
            <li>
                <a href="https://scholarlykitchen.sspnet.org/archives/" className="text-white hover:text-gray-400 uppercase">Archives</a>
            </li>
            <li>
                <a href="#" className="text-white hover:text-gray-400 uppercase">Collections</a>
            </li>
            <li>
                <a href="https://scholarlykitchen.sspnet.org/translation/" className="text-white hover:text-gray-400 uppercase">Translations</a>
            </li>
            <LinkButton to="/#" variant="primary" size="small" className="uppercase">Login</LinkButton>
        </ul>
    </nav>


);
export default NavMenu;