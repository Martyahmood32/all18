import React from 'react';
import { Link } from 'react-router-dom';
import {} from "phosphor-react";
import './navbar.css' 


export const Navbar = () => {
  return (
    <div className='navbar'>
    <h2 className='all'>All 18</h2>
    <img src="" alt="" />
    <h2 className="number">844-744-7481</h2>
        <div className='links'>
          <Link to='home'>Home</Link>
          <Link to='start'>Start Now</Link>
          <Link to='contact'>Contact</Link>
        </div>
    </div>
  )
}
