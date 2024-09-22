import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App';
import Layout from './Layout';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Qualification from './components/qualification/Qualification';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import InfoSection from './InfoSection';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='work' element={<Work/>} />
    <Route path='about' element={<About/>} />
    <Route path='skills' element={<Skills/>} />
    <Route path='services' element={<Services/>} />
    <Route path='qualification'element={<Qualification/>} />
    </Route>


  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);


