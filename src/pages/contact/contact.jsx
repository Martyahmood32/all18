import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CiMail } from "react-icons/ci";
import { CiMapPin } from "react-icons/ci";
import { CiVolumeHigh } from "react-icons/ci";

export const Contact = () => {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_plg8fkc', 
    'template_7cnk63o', 
    form.current, 
    'rIbpSAKcXsCptLGxE'
    )
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <section className='contact'>

      <div className="contact-heading">
        <h2>Contact Us</h2>
      </div>

      <div className="container">
        <div className="row">

           <div className="column">
          <div className="contact-widget">

            <div className="contact-widget-item">
              <div className="icon">
              <CiVolumeHigh size='3rem'/>
              <i class="fa fa-mobile" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h5></h5>
                <h2>844-SHIP-IT-1</h2>
                <p>844-744-7481</p>
              </div>
            </div>


            <div className="contact-widget-item">
              <div className="icon">
              <CiMail size='3rem' />
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h2>Email</h2>
                <p>contact@all18dispatchingandtrucking.com</p>
              </div>
            </div>

            <div className="today">
              <h2></h2>
            </div>

            <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>MC Number</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

          </div>
          </div>



        </div>

        <div className="row">
          <div className="map-column">
            <div className="contact-map">
            <iframe src="https://goo.gl/maps/zeP6niGBmJQ8WBiJ6" 
            width="600" 
            height="450" 
            style={{border: 0}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"> 
            </iframe>
            </div>
          </div>
        </div>
      </div>
 </section>

  )
}
