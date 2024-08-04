import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>

    <main className="main">
        <Outlet/>
    </main>
    </>
  )
}

export default Layout
