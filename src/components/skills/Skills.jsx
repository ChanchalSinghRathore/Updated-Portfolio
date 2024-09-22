import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Svgline from '../SvgFile/Svgline';
const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <Svgline/>
            <h2 className='section__title'>Skills</h2>
            <span className='section__subtitle'>My Technical Level</span>


            <div className="skills__container container grid">
            <Frontend/>

            <Backend/>
            </div>
        </section>
    )
}

export default Skills
