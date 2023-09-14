import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ServiceImg from "../../assets/night.jpg";
import { Footer } from '../../components/Footer/Footer';
import Trip from '../../components/Trip/Trip';

export default function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={ServiceImg}
        title="Service"
        btnClass="hide"
      />
      <Trip/>
      <Footer/>
    </>
  )
}
