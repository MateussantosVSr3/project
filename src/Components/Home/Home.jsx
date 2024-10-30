import React from 'react';
import '../../index.css'
import Navbar from './Navbar/Navbar';
import Informations from './Informations/Informations';
import Calendar from './Calendar/Calendar';
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';
import Races from './Races/Races';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Informations />
        <Races />
        <Calendar />
        <Carousel />
      </main>
      <Footer />
    </div>
  );
};

export default Home;