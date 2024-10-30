import React from "react";
import './Calendar.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'; 
import jeddah from '../../../assets/Calendar/jeddah.png';
import miami from '../../../assets/Calendar/miami.png';
import monaco from '../../../assets/Calendar/monaco.png';
import tokyo from '../../../assets/Calendar/tokyo.jpg';
import shanghai from '../../../assets/Calendar/shanghai.png';
import jakarta from '../../../assets/Calendar/jakarta.png';
import berlin from '../../../assets/Calendar/berlin.png';
import london from '../../../assets/Calendar/london.png';
import brasil from '../../../assets/Calendar/brasil.webp';
import mexico from '../../../assets/Calendar/mexico.webp';

const CalendarData = [
    { image: jeddah, place: 'Jeddah', date: 'February 15, 2025' },
    { image: miami, place: 'Miami', date: 'April 12, 2025' },
    { image: monaco, place: 'Monaco', date: 'May 3, 2025' },
    { image: tokyo, place: 'Tokyo', date: 'May 17, 2025' },
    { image: shanghai, place: 'Shanghai', date: 'May 31, 2025' },
    { image: jakarta, place: 'Jakarta', date: 'June 21, 2025' },
    { image: berlin, place: 'Berlin', date: 'June 12, 2025' },
    { image: london, place: 'London', date: 'June 26, 2025' },
];

const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const Calendar = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="calendar" id="calendar">
            <div className="cards">
                <Slider {...settings}>
                    {CalendarData.map((race, index) => (
                        <div className="card" key={index}>
                            <div className="image-content">
                                <span className="overlay"></span>
                                <div className="card-image">
                                    <img src={race.image} alt={race.place} className="card-img" />
                                </div>
                            </div>
                            <div className="card-content">
                                <h2 className="place">{race.place}</h2>
                                <p className="description">{race.date}</p>
                                <button className="button" aria-label={`More info about ${race.place}`}>Soon!</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}


export default Calendar;
