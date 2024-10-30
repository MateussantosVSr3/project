import React from "react";
import './Informations.css';
import logo from '../../../assets/Logo/logo.png';


const Informations = () => {
    return (
        <div className="up_navbar">
            <nav className="subjects">
                <a href="https://store.fiaformulae.com/gb/en/home/?utm_campaign=mainnavigation&utm_medium=referral&utm_source=parent_domain&_ga=2.204154064.1507672303.1669192879-1285294428.1661424173" className="store">Store</a>
                <a href="/about" className="about">About</a>
                <a href="https://www.fiaformulae.com/en/calendar" className="calendar">Calendar</a>
            </nav>

            <a href="/"><img src={logo} className="up_logo" /></a>
        </div>
    )
}

export default Informations