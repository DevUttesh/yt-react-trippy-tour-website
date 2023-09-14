import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Image from '../../assets/12.jpg';
import { Destination } from '../../components/Destination/Destination';
import Trip from '../../components/Trip/Trip';
import { Footer } from '../../components/Footer/Footer';

export default function Home() {
  return (
    <>
        <Navbar/>
        <Hero
            cName="hero"
            heroImg={Image}
            title="Your Journey Your Story"
            text="Choose Your Favourite Destination"
            buttonText="Travel Plan"
            url="/"
            btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
    </>
  )
}
