import { Link } from 'react-router-dom';
import {} from "phosphor-react";
import './navbar.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';



export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  
  return (
 <header>
  <h3>All 18</h3>
  <nav ref={navRef}>
    <a href="home">Home</a>
    <a href="contact">Contact</a>
    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
      <FaTimes/>
    </button>
  </nav>
  <button className='nav-btn' onClick={showNavbar}>
    <FaBars/>
  </button>
 </header>
  )
}
