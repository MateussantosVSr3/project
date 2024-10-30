import React from 'react';
import './Contact.css';
import Navbar from './Navbar/Navbar';
import Informations from './Informations/Informations';
import Footer from './Footer/Footer'

function Contact() {
  return (
    <div>
      <section className='found'>
        <div>
        <Navbar />
        <Informations />
        </div>
        <div className='Contact'>
          <h2>Contact</h2>
          <form action='' method='post'>
            <label>Name</label>
            <input type='text' name='name' placeholder='Enter your name'/>
            <label>Email</label>
            <input type='email' name='email' placeholder='Enter your email'/>
            <label>Message</label>
            <textarea name='message' cols='30' rows='10' placeholder='Enter your message'></textarea>
            <button type='submit' href="/thanks">Submit</button>
          </form>
        </div>
      </section>
      <div>
          <Footer />
      </div>
    </div>
  );
};

export default Contact;