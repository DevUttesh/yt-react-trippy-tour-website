import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ContactImg from "../../assets/2.jpg";
import { Footer } from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';

export default function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm/>
      <Footer/>

    </>
  )
}
