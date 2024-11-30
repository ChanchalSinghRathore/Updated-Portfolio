import React , { useState } from 'react';
import "./header.css";
import { Link, NavLink } from 'react-router-dom';
import ToggleSwitch from '../ToogleSwitch/ToggleSwitch';


const Header = () => {

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    
    if(this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
})



  const [Toggle, showMenu]= useState(false);

  const [activeNav, setActiveNav]= useState("#home");

  return (
    <header className="header">
      <nav className='nav container'>
        <NavLink to='/' className='nav__logo'>Chanchal Singh Rathore</NavLink>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <NavLink to="/" onClick={()=> setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" :"nav__link" }>
                <i className="uil uil-estate nav__icon"></i> Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/work" onClick={()=> setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav__link active-link" :"nav__link" }>
                <i className="uil uil-scenery nav__icon"></i>
                Portfolio
              </NavLink>
            </li>
            <li className="nav__item nav__item2">
              <NavLink to="/about" onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" :"nav__link" }>
                <i className="uil uil-user nav__icon"></i>
                About
              </NavLink>
            </li>
            <li className="nav__item nav__item2">
              <NavLink to="/skills" onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" :"nav__link" }>
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </NavLink>
            </li>
            <li className="nav__item nav__item2 ">
              <NavLink to="/services" onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" :"nav__link" }>
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Services
              </NavLink>
            </li>
            <li className="nav__item nav__item2">
              <NavLink to="/qualification" onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" :"nav__link" }>
                <i className="uil uil-graduation-cap nav__icon"></i>
                Qualifications
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/contact" onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" :"nav__link" }>
                <i className="uil uil-message nav__icon"></i>
                Contact
              </NavLink>
            </li>
            {/* <li className="nav__item">
                <ToggleSwitch/>
            </li> */}
          </ul>
          <i className='uil uil-times nav__close' onClick={()=> showMenu(!Toggle)}></i>
        </div>
        <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
    </nav>
    </header>
  );
};


export default Header
