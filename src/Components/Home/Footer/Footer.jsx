import React from "react";
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <div>

            <footer className="footer-02">
                <div className="site-section">
                    <div className="container">
                        <div className="cta d-block d-md-flex align-items-center px-5">
                            <div>
                                <h2 className="mb-0">Ready for the next race?</h2>
                                <h3 className="mb-0">Let's go!</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <a href="/" className="footer-logo">Formula E</a>
                                <p className="copyright">
                                    <small>&copy; 2024</small>
                                </p>
                            </div>
                            <div className="col-sm">
                                <h3>Team</h3>
                                <ul className="list-unstyled links">
                                    <li><a href="/">Teams</a></li>
                                    <li><a href="/streaming">Streaming</a></li>
                                </ul>
                            </div>
                            <div className="col-sm">
                                <h3>Company</h3>
                                <ul className="list-unstyled links">
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li><a href="/">News</a></li>
                                </ul>
                            </div>
                            <div className="col-sm">
                                <h3>Statements</h3>
                                <ul className="list-unstyled links">
                                    <li><a href="https://www.fiaformulae.com/en/terms-and-conditions">Terms & Conditions</a></li>
                                    <li><a href="https://www.fiaformulae.com/en/privacy-policy">Privacy Policy</a></li>
                                    <li><a href="https://resources.formula-e.pulselive.com/formula-e/document/2024/01/09/d6006a8b-e545-4fb0-941d-099299c8dafe/Formula-E-Anti-Slavery-and-Human-Trafficking-Policy-Statement-2023.pdf">Anti-Slavery Policy</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3>Follow us</h3>
                                <ul className="list-unstyled social">
                                    <li><a href="https://www.facebook.com/fiaformulae/?locale=pt_BR"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                    <li><a href="https://www.youtube.com/@fiaformulae"><FontAwesomeIcon icon={faYoutube} /></a></li>
                                    <li><a href="https://www.linkedin.com/company/formula-e/?trk=public_profile_volunteering-position_profile-section-card_full-click&originalSubdomain=br"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    <li><a href="https://www.instagram.com/fiaformulae/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
