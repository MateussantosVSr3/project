import React from "react";
import './Races.css';
import jeddah from '../../../assets/Calendar/jeddah.png';
import brasil from '../../../assets/Calendar/brasil.webp';
import mexico from '../../../assets/Calendar/mexico.webp'

const Races = () => {
    return (
        <section className="races" id="races">
            <div className="text-content">
                <h2>Next Races!</h2>
            </div>

            <div id="card-area">
                <div className="wrapper">
                    <div className="box-area">
                        <div className="box">
                            <img alt="São Paulo track" src={brasil} />
                            <div className="overlay">
                                <h3>São Paulo</h3>
                                <p>07 December, 2024</p>
                                <a href="#">Soon!</a>
                            </div>
                        </div>
                        <div className="box">
                            <img alt="Mexico City track" src={mexico} />
                            <div className="overlay">
                                <h3>Mexico City</h3>
                                <p>11 January, 2025</p>
                                <a href="#">Soon!</a>
                            </div>
                        </div>
                        <div className="box">
                            <img alt="Jeddah track" src={jeddah} />
                            <div className="overlay">
                                <h3>Jeddah</h3>
                                <p>14 February, 2025</p>
                                <a href="#">Soon!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Races;