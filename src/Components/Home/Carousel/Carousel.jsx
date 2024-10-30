import React, { useEffect } from 'react';
import './Carousel.css';
import Slider from './Slider';

import andrettiNotPng from '../../../assets/Cars/NotPng/andretti.jpg';
import andrettiPng from '../../../assets/Cars/Png/andretti.png';
import cupraNotPng from '../../../assets/Cars/NotPng/cupra.webp';
import cupraPng from  '../../../assets/Cars/Png/cupra.png';
import envisionNotPng from '../../../assets/Cars/NotPng/envision.webp';
import envisionPng from '../../../assets/Cars/Png/envision.png';
import ertNotPng from '../../../assets/Cars/NotPng/ert.jpg';
import ertPng from '../../../assets/Cars/Png/ert.png';
import jaguarNotPng  from '../../../assets/Cars/NotPng/jaguar.webp';
import jaguarPng from '../../../assets/Cars/Png/jaguar.png';
import mahindraNotPng from  '../../../assets/Cars/NotPng/mahindra.jpg';
import mahindraPng from '../../../assets/Cars/Png/mahindra.png';
import maseratiNotPng from  '../../../assets/Cars/NotPng/maserati.webp';
import maseratiPng from '../../../assets/Cars/Png/maserati.png';
import neomNotPng  from  '../../../assets/Cars/NotPng/neom.webp';
import neomPng from '../../../assets/Cars/Png/neom.png';
import nissanNotPng from   '../../../assets/Cars/NotPng/nissan.jpg';
import nissanPng from  '../../../assets/Cars/Png/nissan.png';
import penskeNotPng  from  '../../../assets/Cars/NotPng/penske.webp';
import penskePng from  '../../../assets/Cars/Png/penske.png';
import porscheNotPng from   '../../../assets/Cars/NotPng/porsche.avif';
import porschePng from  '../../../assets/Cars/Png/porsche.png';


const carData = [
    {
        name: "ABT CUPRA FORMULA E TEAM",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum sint tempora, eligendi odit commodi possimus sapiente distinctio deserunt dignissimos qui excepturi dicta ut.",
        notPng: cupraNotPng,
        png: cupraPng,
    },
    {
        name: "ANDRETTI FORMULA E",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum sint tempora, eligendi odit commodi possimus sapiente distinctio deserunt dignissimos qui excepturi dicta ut.",
        notPng: andrettiNotPng,
        png: andrettiPng,
    },
    {
        name: "DS PENSKE",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum sint tempora, eligendi odit commodi possimus sapiente distinctio deserunt dignissimos qui excepturi dicta ut.",
        notPng: penskeNotPng,
        png: penskePng,
    },
    {
        name: "ENVISION RACING",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum sint tempora, eligendi odit commodi possimus sapiente distinctio deserunt dignissimos qui excepturi dicta ut.",
        notPng: envisionNotPng,
        png: envisionPng,
    },
    {
        name: "ERT FORMULA E TEAM",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum sint tempora, eligendi odit commodi possimus sapiente distinctio deserunt dignissimos qui excepturi dicta ut.",
        notPng: ertNotPng,
        png: ertPng,
    },
    {
        name: "JAGUAR TCS RACING",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum sint tempora, eligendi odit commodi possimus sapiente distinctio deserunt dignissimos qui excepturi dicta ut.",
        notPng: jaguarNotPng,
        png: jaguarPng,
    },
    {
        name: "MAHINDRA RACING",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum sint tempora, eligendi odit commodi possimus sapiente distinctio deserunt dignissimos qui excepturi dicta ut.",
        notPng: mahindraNotPng,
        png: mahindraPng,
    },
    {
        name: "MASERATI MSG RACING",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum sint tempora, eligendi odit commodi possimus sapiente distinctio deserunt dignissimos qui excepturi dicta ut.",
        notPng: maseratiNotPng,
        png: maseratiPng,
    },
    {
        name: "NEOM MCLAREN FORMULA E TEAM",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum sint tempora, eligendi odit commodi possimus sapiente distinctio deserunt dignissimos qui excepturi dicta ut.",
        notPng: neomNotPng,
        png: neomPng,
    },
    {
        name: "NISSAN FORMULA E TEAM",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum sint tempora, eligendi odit commodi possimus sapiente distinctio deserunt dignissimos qui excepturi dicta ut.",
        notPng: nissanNotPng,
        png: nissanPng,
    },
    {
        name: "TAG HEUER PORSCHE FORMULA E TEAM",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum sint tempora, eligendi odit commodi possimus sapiente distinctio deserunt dignissimos qui excepturi dicta ut.",
        notPng: porscheNotPng,
        png: porschePng,
    },
];

const Carousel = () => {
    

    return (
        <div>
            <Slider carData={carData} />
        </div>
    );

};

export default Carousel;
