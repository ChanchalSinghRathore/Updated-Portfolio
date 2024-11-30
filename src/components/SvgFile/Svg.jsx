import React from 'react'
import { NavLink } from 'react-router-dom'
import './Svg.css'

const Svg = () => {


    return (
        <div id="svg-container">
            <svg
                version="1.1"
                id="transring"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 414 414"
                style={{ enableBackground: 'new 0 0 414 414', backgroundColor: 'transparent' }}
            >
                <path
                    id="Transparent_Ring"
                    className="transrg"
                    style={{
                        opacity: 0.4,
                        fill: 'none',
                        stroke: '#000000',
                        strokeWidth: 2,
                        strokeMiterlimit: 10,
                        enableBackground: 'new'
                    }}
                    d="M383,208ZZs-20,173,-173,173c-40.8,0,-91,-19.4,-122.3,-50.7"
                />
                <path
                    id="Opaque_Ring"
                    className="transrgwht"
                    strokeDasharray="0,1000"
                    style={{
                        fill: 'none',
                        stroke: 'rgb(255, 255, 255)',
                        strokeWidth: 2,
                        strokeMiterlimit: 10,
                        strokeDasharray: '10, 1000'
                    }}
                    d="M383,208ZZs-20,173,-173,173c-40.8,0,-91,-19.4,-122.3,-50.7"
                />

                <g id="Dots1" className="dots-nav">
                    <NavLink
                        to="/info#about"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        <text
                            className='svg-text'
                            x="416"
                            y="216.5"
                            fontSize="15"
                            textAnchor="middle"
                            style={{ fill: "#000000" }}
                        >
                            About
                        </text>
                    </NavLink>
                    <g>
                        <path
                            className="dotsst dotsfill4"
                            style={{ fill: "#000000", opacity: 1 }}
                            d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z"
                        ></path>
                    </g>
                    <g>
                        <path
                            className="dotsstro4"
                            style={{ opacity: 1, fill: "none", stroke: "rgb(255, 255, 255)", strokeWidth: 2, strokeMiterlimit: 10 }}
                            d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z"
                        ></path>
                    </g>
                </g>
                <g id="Dots2" className="dots-nav">
                <NavLink
        to="/info#skills"
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
                        <text
                            className='svg-text'
                            x="368"
                            y="330"
                            fontSize="15"
                            textAnchor="middle"
                            style={{ fill: "#000000" }}
                        >
                            Skills
                        </text>
                    </NavLink>
                    <g>
                        <path
                            className="dotsst dotsfill5"
                            style={{ fill: '#000000', opacity: 1 }}
                            d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6 S340,315,335,315z"
                        />
                    </g>
                    <g>
                        <path
                            className="dotsstro5"
                            style={{
                                opacity: 1,
                                fill: 'none',
                                stroke: 'rgb(255, 255, 255)',
                                strokeWidth: 2,
                                strokeMiterlimit: 10
                            }}
                            d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6 S340,315,335,315z"
                        />
                    </g>
                </g>
                <g id="Dots3" className="dots-nav">
                <NavLink
        to="/info#services"
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
                        <text
                            className='svg-text'
                            x="210"
                            y="406"
                            fontSize="15"
                            textAnchor="middle"
                            style={{ fill: "#000000" }}
                        >
                            Services
                        </text>
                    </NavLink>
                    <g>
                        <path
                            className="dotsst dotsfill6"
                            style={{ fill: '#000000', opacity: 1 }}
                            d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6 S215,375,210,375z"
                        />
                    </g>
                    <g>
                        <path
                            className="dotsstro6"
                            style={{
                                opacity: 1,
                                fill: 'none',
                                stroke: 'rgb(255, 255, 255)',
                                strokeWidth: 2,
                                strokeMiterlimit: 10
                            }}
                            d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6 S215,375,210,375z"
                        />
                    </g>
                </g>
                <g id="Dots4" className="dots-nav">
                <NavLink
        to="/info#qualification"
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
                        <text
                            className='svg-text'
                            x="40"
                            y="355"
                            fontSize="15"
                            textAnchor="middle"
                            style={{ fill: "#000000" }}
                        >
                            Qualifications
                        </text>
                    </NavLink>
                    <g>
                        <path
                            className="dotsst dotsfill7"
                            style={{ fill: '#000000', opacity: 1 }}
                            d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6 S92,324,88,324z"
                        />
                    </g>
                    <g>
                        <path
                            className="dotsstro7"
                            style={{
                                opacity: 1,
                                fill: 'none',
                                stroke: 'rgb(255, 255, 255)',
                                strokeWidth: 2,
                                strokeMiterlimit: 10
                            }}
                            d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6 S92,324,88,324z"
                        />
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Svg
