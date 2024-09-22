import React from 'react'
import './Svg.css'
import { NavLink } from 'react-router-dom'

const Svgline = () => {
  return (
    <div >
       <svg id='svgline' width="100" height="500" xmlns="http://www.w3.org/2000/svg">
    {/* Vertical Line */}
    <line x1="50" y1="0" x2="50" y2="400" stroke="black" strokeWidth="1" />
    
    {/* Dots */}
    <circle cx="50" cy="7" r="7" fill="black" />
    <NavLink to="/About" >
                        <text
                            className='svg-text'
                            x="90"
                            y="13"
                            fontSize="14"
                            textAnchor="middle"
                            style={{ fill: "#111111" }}
                        >
                            About
                        </text>
                    </NavLink>    {/* Top */}
    <circle cx="50" cy="100" r="7" fill="black" />
    <NavLink to="/skills">
                        <text
                            className='svg-text'
                            x="87"
                            y="105"
                            fontSize="14"
                            textAnchor="middle"
                            style={{ fill: "#111111" }}
                        >
                            Skills
                        </text>
                    </NavLink>   {/* Upper middle */}
    <circle cx="50" cy="200" r="7" fill="black" />
    <NavLink to="/services">
                        <text
                            className='svg-text'
                            x="100"
                            y="205"
                            fontSize="14"
                            textAnchor="middle"
                            style={{ fill: "#111111" }}
                        >
                            Services
                        </text>
                    </NavLink>   {/* Lower middle */}
    <circle cx="50" cy="300" r="7" fill="black" /> 
    <NavLink to="/Qualification">
                        <text
                            className='svg-text'
                            x="120"
                            y="305"
                            fontSize="14"
                            textAnchor="middle"
                            style={{ fill: "#111111" }}
                        >
                            Qualifications
                        </text>
                    </NavLink>  {/* Bottom */}
  </svg>
    </div>
  )
}

export default Svgline
