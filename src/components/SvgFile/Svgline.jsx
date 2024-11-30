import React from 'react'
import './Svg.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll';

const Svgline = () => {
  return (
    <div >
       <svg id='svgline' width="100" height="500" xmlns="http://www.w3.org/2000/svg">
    {/* Vertical Line */}
    <line x1="50" y1="0" x2="50" y2="400" stroke="black" strokeWidth="1" />
    
    {/* Dots */}
    <circle cx="50" cy="7" r="7" fill="black" />
    <Link to="about" smooth={true} >
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
                    </Link>    {/* Top */}
    <circle cx="50" cy="100" r="7" fill="black" />
    <Link to="skills" smooth={true} >
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
                    </Link>   {/* Upper middle */}
    <circle cx="50" cy="200" r="7" fill="black" />
    <Link to="services" smooth={true} >
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
                    </Link>   {/* Lower middle */}
    <circle cx="50" cy="300" r="7" fill="black" /> 
    <Link to="Qualification" smooth={true} >
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
                    </Link>  {/* Bottom */}
  </svg>
    </div>
  )
}

export default Svgline
