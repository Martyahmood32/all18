import React from 'react'
import { useRef } from 'react';
import './start.css'
import emailjs from '@emailjs/browser';

export const Start = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_1se4zgc', 
    'template_s5v9wpw', 
    form.current, 
    'rIbpSAKcXsCptLGxE'
    )
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
    }

  return (

<div className='form'>
    <div className='heading'>
      <h2 className='Apply'>Apply Now</h2>
    </div>
    <div className="column">
      <form ref={form} onSubmit={sendEmail}>
      <div className="row1">
      <label>Carrier Name</label>
      <input type="text" name="user_name" />

      <label>Contact Name</label>
      <input type="text" name="user_name" />

      <label>Address</label>
      <input type="text" name="user_address" />

      <label>City</label>
      <input type="text" name="user_city" />

      <label>State</label>
      <input type="text" name="user_state" />

      <label>Zip</label>
      <input type="text" name="user_zip" />

      <label>Phone</label>
      <input type="text" name="user_phone" />

      <label>Email</label>
      <input type="text" name="user_email" />

      </div>
      <div className="row2">

      <label>Trucks Owned</label>
      <input type="text" name="user_trucks" />

      <label>Trailers Owned</label>
      <input type="text" name="user_trailers" />

      <label>Year of Truck</label>
      <input type="text" name="user_years" />

      <label>Insurance 1M</label>
      <input type="text" name="user_insurance" />

      <label>250K Cargo</label>
      <input type="text" name="user_cargo" />

      <label>45K Trailer</label>
      <input type="text" name="user_trailer" />

      <label>MC Number</label>
      <input type="text" name="user_mc" />



      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      </div>
    </form>
    </div>
    </div>
  

  )
}
