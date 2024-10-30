import React, { useState, useEffect } from 'react';

const Slider = ({ carData }) => {
    const [index, setIndex] = useState(0);

    const handleThumbClick = (ind) => {
        setIndex(ind);
    };

    useEffect(() => {
        const infoSliders = document.querySelectorAll('.info-slider');
        const imgSliders = document.querySelectorAll('.img-slider');
        const items = document.querySelectorAll('.item');
        
        // Atualiza a transformação das slides
        infoSliders.forEach((slide) => {
            slide.style.transform = `translateY(${index * -100}%)`;
        });
        imgSliders.forEach((slide) => {
            slide.style.transform = `translateX(${index * -100}%)`;
        });

        // Atualiza a classe 'active' para os itens
        items.forEach((item, ind) => {
            item.classList.toggle('active', ind === index);
        });

        // Atualiza a classe 'selected' para os thumbs
        const thumbs = document.querySelectorAll('.thumb li');
        thumbs.forEach((thumb, ind) => {
            thumb.classList.toggle('selected', ind === index);
        });
    }, [index]);

    return (
        <div className="carousel">
            {carData.map((car, ind) => (
                <div className={`item ${ind === index ? 'active' : ''}`} key={ind}>
                    <div className="bg"></div>

                    <div className="info-box">
                        <div className="info-slider">
                            <div className="info-item" style={{ "--i": ind }}>
                                <h2>{car.name}</h2>
                                <p>{car.description}</p>
                                <a href="#" className="btn">More</a>
                            </div>
                        </div>
                    </div>

                    <div className="img-box">
                        <div className="img-slider">
                            <div className="img-item" style={{ "--i": ind }}>
                                <img src={car.png} alt={car.name} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <ul className="thumb">
                {carData.map((car, ind) => (
                    <li 
                        className={ind === index ? 'selected' : ''} 
                        key={ind} 
                        onClick={() => handleThumbClick(ind)}
                    >
                        <img src={car.notPng} alt={car.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Slider;
