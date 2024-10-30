import React from 'react';
import './Streaming.css';
import '../../index.css';
import Navbar from './Navbar/Navbar';
import Informations from './Informations/Informations';
import Chat from './Chat/Chat';
import Video from './Video/Video';
import Classification from './Classification/Classification';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Footer/Footer';

const Streaming = () => {
  return (
    <main className="body">
        <Navbar />
        <div className="screens">
            <Informations />
            <Classification />
            <Video />
            <Chat />
        </div>
        <div className="statistcsF">
            <Dashboard />
            <Footer />
        </div>
    </main>
  );
};

export default Streaming;