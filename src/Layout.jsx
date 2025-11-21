import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom'
import About from './components/about/About';
import InfoSection from './InfoSection';
import { useEffect, useState } from "react";
import CursorEffect from './components/cursor/CursorEffect';

function Layout() {

  


  return (
    <>
    <CursorEffect />
    <Header/>
    <main className="main">
        <Outlet/>
    </main>
    
    </>
  )
}

export default Layout
