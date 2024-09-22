import React from 'react'
import { NavLink } from 'react-router-dom'

const ScrollDown = () => {
  return (
        <div className="home__scroll">
            <NavLink to="/work" className="home__scroll-button button--flex">
            <svg
                width="30px"
                height="30px"
                class="home__scroll-mouse"
                viewBox="0 0 247 390"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                  fillrule: "evenodd",
                  cliprule: "evenodd",
                  strokelinecap: "round",
                  strokelinejoin: "round",
                  strokemiterlimit: "1.5",
                }}
              >
                <path
                  class="wheel"
                  d="M123.359,79.775l0,72.843"
                  style={{
                    fill: "none",
                    stroke: " var(--title-color)",
                    strokeWidth: "20px",
                  }}
                ></path>
                <path
                  id="mouse"
                  d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                  style={{
                    fill: "none",
                    stroke:" var(--title-color)",
                    strokeWidth: "20px",
                  }}
                ></path>
              </svg>
              {/* <i className='bx bx-chevron-right  home__scroll-arrow'></i> */}
              <span className='home__scroll-name'>Scroll Down</span>
              <i className='bx bx-down-arrow-alt  home__scroll-arrow'></i>
            </NavLink>
        </div>
  ) 
}

export default ScrollDown
