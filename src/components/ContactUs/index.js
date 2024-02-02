import React, { useRef } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import emailjs from '@emailjs/browser';
import './index.css'

export const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ws02txh', 'template_ngffx7f', form.current, 'OKVrcWLLHEYnfSzue')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <Header/>
    <h1 className='contact-us-heading'>Contact Us</h1>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" required/>
      <label>Email</label>
      <input type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message"/>
      <input type="submit" value="Send" className='submit-btn' />
    </form>
    <Footer/>
    </>
  );
};