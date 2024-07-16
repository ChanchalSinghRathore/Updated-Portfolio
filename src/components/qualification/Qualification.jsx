import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, seToggleState]= useState(1);

    const toggleTab = (index) => {
        seToggleState(index);
    }
  return (
        <section className="qualification section">
               <h2 className='section__title'>Qualification</h2>
               <span className='section__subtitle'>My personal journey</span>

               <div className="qualification__container container">
                <div className="qualification__tabs">


                    <div className={toggleState === 1 ? "qualification__button qualification__active  button--flex" : "qualification__button button--flex"}  onClick={() => toggleTab(1)}>


                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                     <div className={toggleState === 2 ? "qualification__button qualification__active  button--flex" : "qualification__button button--flex"}   onClick={() => toggleTab(2)}>

                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>

                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active": "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">BCA</h3>
                                <span className="qualification__subtitle">AIMT, Lucknow</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                        2023-2025
                                </div>

                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title"> Proficient in Java, Python</h3>
                                <span className="qualification__subtitle">Relevent-course</span>
                                <div className="qualification__calender">
                                     <i className="uil uil-calendar-alt"></i>
                                        2024 - Present
                                </div>

                            </div>
                           
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Technical Skill</span>
                                <div className="qualification__calender">
                                     <i className="uil uil-calendar-alt"></i>
                                        2024 - Present
                                </div>

                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Algorithms</h3>
                                <span className="qualification__subtitle">Relevent-Course</span>
                                <div className="qualification__calender">
                                     <i className="uil uil-calendar-alt"></i>
                                        2024 - Present
                                </div>

                            </div>
                           
                        </div> 
                    </div>


                    <div className={toggleState === 2 ? "qualification__content qualification__content-active": "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">Freelancer</span>
                                <div className="qualification__calender">
                                     <i className="uil uil-calendar-alt"></i>
                                        2023
                                </div>

                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Certified in Algorithms</h3>
                                <span className="qualification__subtitle">Princeton University</span>
                                <div className="qualification__calender">
                                     <i className="uil uil-calendar-alt"></i>
                                        2024
                                </div>

                            </div>
                           
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">Figma-Community</span>
                                <div className="qualification__calender">
                                     <i className="uil uil-calendar-alt"></i>
                                        2024 - Present
                                </div>

                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                       
                    </div>
                </div>
               </div>
        </section>
  )
}

export default Qualification
