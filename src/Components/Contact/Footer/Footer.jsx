import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <div className="socialIcons">
                    <a href="https://www.facebook.com/fiaformulae/?locale=pt_BR"><FontAwesomeIcon icon={faFacebook} className="Icon"/></a>
                    <a href="https://www.instagram.com/fiaformulae/"><FontAwesomeIcon icon={faInstagram} className="Icon"/></a>
                    <a href="https://x.com/FIAFormulaE"><FontAwesomeIcon icon={faTwitter} className="Icon"/></a>
                    <a href="https://www.youtube.com/channel/UC-DuRqsBQOEk_5o1q4Ze-Fg"><FontAwesomeIcon icon={faYoutube} className="Icon"/></a>
                </div>
                <div className="footerNav">
                    <ul><li><a href="/home">Home</a></li>
                        <li><a href="https://www.fiaformulae.com/en/teams">Teams</a></li>
                        <li><a href="/streaming">Streaming</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="https://www.fiaformulae.com/en/news">News</a></li>
                        <li><a href="https://www.fiaformulae.com/en/terms-and-conditions">Terms & Conditions</a></li>
                        <li><a href="https://www.fiaformulae.com/en/privacy-policy">Privacy Policy</a></li>
                        <li><a href="https://resources.formula-e.pulselive.com/formula-e/document/2024/01/09/d6006a8b-e545-4fb0-941d-099299c8dafe/Formula-E-Anti-Slavery-and-Human-Trafficking-Policy-Statement-2023.pdf">Anti-Slavery Policy</a></li>
                    </ul>
                </div>
                
            </div>
            <div className="footerBottom">
                <p>Copyright &copy;2024; Designed by <span className="designer">Phase-X</span></p>
            </div>
        </footer>
    )
}

export default Footer