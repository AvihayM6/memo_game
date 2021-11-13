import "../Styles/Footer.css"
import { ImGithub } from "react-icons/im";
import { CgWebsite, CgCopyright } from "react-icons/cg";

const Footer = () => {
    return ( 
        <div className="footer">
            <ul className="footer-divider">
                <li> <span className="name">Avihay Maman{<CgCopyright />}</span> </li>
                <li> <a href="https://github.com/AvihayM6" target="_blank" rel="noreferrer">{<ImGithub />}</a> </li>
                <li> <a href="https://www.avihaymaman.com/" target="_blank" rel="noreferrer">{<CgWebsite />}</a> </li>
            </ul>
        </div>
     );
}
 
export default Footer;