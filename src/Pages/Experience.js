import React, { useState, useEffect, useRef } from 'react';
import meta from '../picture/meta.png';
import tiktok from '../picture/tiktok.png';
import gb from '../picture/growthbox.png';
import colby from '../picture/colby.png';

const Experience = ({isVisible}) => {

    // let [active, setActive] = useState(false);
    // const hiddenRef = useRef();
    // useEffect(() => {
    //     window.addEventListener('scroll', scrollHandler);
    //     return () => window.removeEventListener('scroll', scrollHandler);
    // }, []);

    // const scrollHandler = () => {
    //     if(window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop)
    //         setActive(true)
    // }

    return ( 
        <section id="work" class=".bg-light.bg-gradient mt-md-4 mx-md-5 pt-md-4 px-md-4 pb-md-4">
        <div className={"mt-5 mx-5 "}>
            <h3 class="fw-bold mb-4">Experience</h3>
                <div class="row">
                <div class={"col-12 col-md-6 "}>
                    <div class={"fst-italic mt-4 mb-3"}>Current</div>
                    <div class="container d-flex flex-wrap">
                        <div class="role px-3 d-flex align-items-center">
                              Incoming Software Engineer Intern @ Meta
                        </div>
                        <div class="role px-3 d-flex align-items-center">
                            Board Member
                            @ 5C K-POP Performance Unit
                        </div>
                        <div class="role px-3 d-flex align-items-center">
                            Student Photographer
                            @ Pomona Communications Office
                        </div>
                        <div class="role px-3 d-flex align-items-center">
                            Full stack developer
                            @ Milk & Honey Student-run Boba Shop
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div class="fst-italic mt-4 mb-3">Past</div>
                    <div class="container d-flex flex-wrap">
                        <div className="role px-3 d-flex align-items-center">
                            Product Strategy Intern @ TikTok
                        </div>
                        <div className="role px-3 d-flex align-items-center">
                            Growth Hacker Intern @ GrowthBox
                        </div>

                        <div className="role px-3 d-flex align-items-center">
                            Admissions Tour Guide @ Colby
                        </div>
                        <div className="role px-3 d-flex align-items-center">
                            Student Videographer <br/> @ Colby Museum of Art
                        </div>
                    </div>
                </div>
                </div>

            <div class={"row mt-4 " + (isVisible ? 'animate__animated animate__fadeInUp' : 'invisible')}>
                <div class="col-6 col-lg-3 d-flex flex-column"><img src={meta} class="logo align-self-center mt-4"/></div>
                <div class="col-6 col-lg-3 d-flex flex-column"><img src={tiktok} class="logo align-self-center mt-4"/></div>
                <div class="col-6 col-lg-3 d-flex flex-column"><img src={gb} class="logo align-self-center mt-4"/></div>
                <div class="col-6 col-lg-3 d-flex flex-column"><img src={colby} class="logo align-self-center mt-4"/></div>
            </div>
        </div>
      </section>
    );
}
 
export default Experience;