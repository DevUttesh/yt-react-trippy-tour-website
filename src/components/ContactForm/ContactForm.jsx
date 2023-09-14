import './contactform.css'

import React from 'react'

export default function ContactForm() {
  return (
    <div className='form-container' >
        <h1>Send a message to us!</h1>
        <form action="">
            <input placeholder='Name' type="text" />
            <input placeholder='Email' type="email" />
            <input placeholder='Subject' type="text" />
            <textarea name="Message" placeholder='Message' id="" cols="30" rows="4"></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}
