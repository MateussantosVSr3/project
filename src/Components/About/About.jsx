import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Photocar from '../../assets/3-Formula-E-Gen3-review.webp';
import logo1 from '../../assets/ABB-logo.webp';
import logo2 from '../../assets/1200px-SABIC_Logo_RGB.webp';
import logo3 from '../../assets/Aggreko-Logo-RGB-01.webp';
import logo4 from '../../assets/Allianz-sponsor.webp';
import logo5 from '../../assets/antofagasta-minerals-logo.webp';
import logo6 from '../../assets/Bosch-Logo-1925.webp';
import logo7 from '../../assets/DHL_Logo.svg.webp';
import logo8 from '../../assets/Hackett_Sport_Logo_Black.webp';
import logo9 from '../../assets/HK_2019_Logo-1-.webp';
import logo10 from '../../assets/Ifosys-Logo.webp';
import logo11 from '../../assets/Julius-baer-logo.webp';
import logo12 from '../../assets/pif_colour.webp';
import logo13 from '../../assets/Saudia-logo-new.webp';
import logo14 from '../../assets/southwire-logo.webp';
import logo15 from '../../assets/taittinger_logo.webp';
import logo16 from '../../assets/Tata-Communications-Logo-Stacked-Blue-New.webp';
import logo17 from '../../assets/WhatsApp-Image-2024-03-14-at-20.27.28.webp';
import logo18 from '../../assets/FIA-Emblem-Lockup.png';
import Informations from './Informations/Informations';
import Footer from  './Footer/Footer';
import Navbar from './Navbar/Navbar';





function About() {
  return  (
    <div>
      <div className='About'>
        <div>
          <Navbar />
          <Informations />
        </div>
        {/* Banner Section */}
        <div className="banner_section layout_padding">
          <div className="container">
            <div id="main_slider" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {/* Slide 1 */}
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="banner_taital">
                        <h1 className="outstanding_text">Outstanding</h1>
                        <h1 className="sub_text">Formula E</h1>
                        <p className="there_text">
                          Formula E is the future of racing, combining speed, cutting-edge technology, and sustainability! Watch the world's fastest electric cars race through iconic city circuits, and experience the adrenaline of a sport that's redefining motorsport while inspiring a greener future.
                        </p>
                        <div className="learnmore_bt">
                          <a href="#">Learn More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="banner_taital">
                        <h1 className="outstanding_text">Sustainable Mobility & Emissions</h1>
                        <h1 className="sub_text">Racing Towards a Greener Future</h1>
                        <p className="there_text">
                          Formula E is a motorsport category focused on promoting sustainable mobility through 100% electric vehicles that produce no emissions during races. The category encourages innovations in battery technology and energy efficiency, with solutions that can be applied to passenger vehicles. Additionally, Formula E aims to achieve carbon neutrality in its operations, contributing to a cleaner and more sustainable future.
                        </p>
                        <div className="learnmore_bt">
                          <a href="#">Learn More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="banner_taital">
                        <h1 className="outstanding_text">Social Impact & Eco-Education</h1>
                        <h1 className="sub_text">Racing for a Greener Tomorrow</h1>
                        <p className="there_text">
                          In addition to the races, Formula E implements social initiatives and educational programs to promote electric mobility and environmental awareness. It conducts community activities in each city where a race takes place, aiming to inspire young people to adopt sustainable practices. The category uses its visibility to address issues such as air pollution and climate change, positioning itself as a transformative force for a greener and more inclusive future.
                        </p>
                        <div className="learnmore_bt">
                          <a href="#">Learn More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <a className="carousel-control-prev" href="#main_slider" role="button" data-bs-slide="prev">
                <i className="fa fa-angle-left"><FontAwesomeIcon icon={faAngleLeft} /></i>
              </a>
              <a className="carousel-control-next" href="#main_slider" role="button" data-bs-slide="next">
                <i className="fa fa-angle-right"><FontAwesomeIcon icon={faAngleRight} /></i>
              </a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="about_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="about_taital_main">
                  <div className="about_taital">About Us</div>
                  <p className="about_text">
                      Racing Towards a Sustainable Future
                  </p>
                  <p className="about_text">
                      Formula E is at the forefront of sustainable motorsport, showcasing fully electric race cars in urban environments since 2014. Our mission is to promote clean energy solutions and inspire the transition to electric mobility. Through thrilling races in iconic cities, we demonstrate the potential of electric vehicles while engaging communities and driving positive change. Join us in our journey towards a greener future!
                  </p>
                  <div className="read_bt">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 centralize">
                <div className="about_img">
                  <img src={Photocar} alt="Man driving a Formula E car" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsors */}
        <div>
              <main className="vw-100 d-flex flex-row justify-content-center align-items-center">
                  <div
                  className="logos overflow-hidden py-5 px-0 position-relative"
                  style={{ backgroundColor: '#fff', whiteSpace: 'nowrap' }}
                  >
                      <div className="logos-slide d-inline-block">
                          {/* Imagens */}
                          <img
                          src={logo1}
                          alt="ABB"
                          />
                          <img
                          src={logo2}
                          alt="SABIC"
                          />
                          <img
                          src={logo3}
                          alt="Aggreko"
                          />
                          <img
                          src={logo4}
                          alt="Allianz"
                          />
                          <img
                          src={logo5}
                          alt="Antofagasta Minerals"
                          />
                          <img
                          src={logo6}
                          alt="Bosch"
                          />
                          <img
                          src={logo7}
                          alt="DHL"
                          />
                          <img
                          src={logo8}
                          alt="Hackett"
                          />
                          <img
                          src={logo9}
                          alt="HK"
                          />
                          <img
                          src={logo10}
                          alt="Ifosys"
                          />
                          <img
                          src={logo11}
                          alt="Julius Baer"
                          />
                          <img
                          src={logo12}
                          alt="PIF"
                          />
                          <img
                          src={logo13}
                          alt="Saudia"
                          />
                          <img
                          src={logo14}
                          alt="Southwire"
                          />
                          <img
                          src={logo15}
                          alt="Taittinger"
                          />
                          <img
                          src={logo16}
                          alt="Tata Communications"
                          />
                          <img
                          src={logo17}
                          alt="Google Cloud"
                          />
                          <img
                          src={logo18}
                          alt="FIA"
                          />
                      </div>
                  </div>
              </main>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;