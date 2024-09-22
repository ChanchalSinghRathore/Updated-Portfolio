import React from 'react';
import { useLocation } from 'react-router-dom';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import { Outlet } from 'react-router-dom'

function InfoSection()  {
  return (
    <>
    <About  />
    <Skills />
    <Services />
    <Qualification />
    </>
  )
}

export default InfoSection;