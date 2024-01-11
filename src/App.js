import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Start } from './pages/startNow/start';
import { Card } from "react-bootstrap";
import { CardGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from './components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="home" element={<Home />}/>
          <Route path="start" element={<Start />}/>
          <Route path="contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
