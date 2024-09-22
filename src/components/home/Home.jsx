 import React from 'react'
 import './home.css';
 import Social from './Social';
 import Data from './Data';
 import ScrollDown from './ScrollDown';
 import Svg from '../SvgFile/Svg';


 const Home = () => {

   return (
        <section className="home section" id="home">
            <Svg/>
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social/>

                     <div className="home__img"></div>
                    <Data/>
                 
                </div>

                {/* <ScrollDown/> */}
            </div>
        </section>
   )
 }
 
 export default Home
 