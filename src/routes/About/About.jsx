import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import AboutImg from "../../assets/night.jpg";
import './about.css';
import { Footer } from '../../components/Footer/Footer';
import AboutUs from "../../components/AboutUs/AboutUs";

export default function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
    </>
  );
}
