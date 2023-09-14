import React from 'react'
import './hero.css'
import Image from '../../assets/12.jpg'

export default function Hero(props) {
  return (
    <div className={props.cName} >
        <img src={props.heroImg} alt="heroimg" />

        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a className={props.btnClass} href={props.url}>{props.buttonText}</a>
        </div>
    </div>
  )
}
