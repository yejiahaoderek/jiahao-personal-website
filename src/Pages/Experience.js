import React, { useRef } from 'react';
import meta from '../picture/meta.png';
import colby2 from '../picture/colby2.png';
import pomona from '../picture/pomona.jpg';
import webDemo from '../picture/webDemo.gif'
import pomona2 from '../picture/pomona2.png';
import tiktok from '../picture/tiktok.png';
import gb from '../picture/growthbox.png';
import colby from '../picture/colby.png';
import Grow from '@mui/material/Grow';
import todoDemo from '../picture/todoDemo.gif'
import { useInViewport } from 'react-in-viewport';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';




const Experience = () => {
    const matches = useMediaQuery('(min-width:960px)');

    const myRef = useRef();
    const {
        inViewport,
        enterCount,
        leaveCount,
    } = useInViewport(myRef);

    return ( 
        <section id="work" ref={myRef} class=".bg-light.bg-gradient mt-md-4 mx-md-5 pt-md-4 px-md-4 pb-md-4">
        <div className={"mt-5 mx-5 "}>
            <h3 class="fw-bold mb-4">Experience</h3>
            <div class="row">
                <div class={"col-12 col-md-6"}>
                    <div class={"fst-italic mt-4 mb-3"}>Current</div>
                    <Grow in={inViewport}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(inViewport ? { timeout: 800 } : {})}
                   >
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
                    </Grow>
                </div>
                <div className="col-12 col-md-6">
                    <div class="fst-italic mt-4 mb-3">Past</div>
                    <Grow in={inViewport}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(inViewport ? { timeout: 1000 } : {})}
                   >
                    <div class="container d-flex flex-wrap">
                        <div className="role px-3 d-flex align-items-center">
                            Product Strategy Intern @ TikTok
                        </div><div class="break"></div> 
                        <div className="role px-3 d-flex align-items-center">
                            Growth Hacker Intern @ GrowthBox
                        </div><div class="break"></div> 

                        <div className="role px-3 d-flex align-items-center">
                            Admissions Tour Guide @ Colby
                        </div><div class="break"></div> 
                        <div className="role px-3 d-flex align-items-center">
                            Student Videographer @ Colby Museum of Art
                        </div>
                    </div>
                    </Grow>
                </div>
            </div>

            <div class={"row mt-4 " + (inViewport ? 'animate__animated animate__fadeInUp' : 'invisible')}>
                <div class="row">
                <div class="col-6 col-md d-flex justify-content-center flex-column"><img src={meta} class="logo align-self-center mb-5 mt-4"/></div>
                <div class="col-6 col-md d-flex justify-content-center flex-column"><img src={tiktok} class="logo align-self-center mb-5 mt-4"/></div>
                <div class="col-6 col-md d-flex justify-content-center flex-column"><img src={pomona2} class="logo align-self-center mb-5 mt-4"/></div>
                <div class="col-6 col-md d-flex justify-content-center flex-column"><img src={gb} class="logo align-self-center mb-5 mt-4"/></div>
                <div class="col-6 col-md d-flex justify-content-center flex-column"><img src={colby} class="logo align-self-center mb-5 mt-4"/></div>
                </div>
            </div>

            <div class="row">
            <div class={"fst-italic mt-5 mb-4"}>Projects</div>
            <div class="mb-3">
                <div class="row justify-content-between">
                    <div class="col-12 col-md-6">
                        <Grow in={inViewport}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(inViewport ? { timeout: 800 } : {})}
                        >
                        <div class="row projectCard d-flex align-items-center">
                        <div class="col-md-4">
                           <img src={todoDemo} class={"img-fluid rounded-start "} alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <h4 class={!matches ? "mt-3" : ""}>Task Manager</h4>
                            <p>An app designed with UI/UX principles in mind to support both basic and advanced to-do list functionalities such as
                                sharing list of to-dos with friends.
                            </p>
                            <p><Button href="https://yejiahaoderek.github.io/cs124/" variant="outlined">Try it out</Button></p>
                            <div class=" d-flex flex-wrap">
                                <div class="sm-tag text-muted">React.JS</div>
                                <div class="sm-tag text-muted">Firestore</div>
                                <div class="sm-tag text-muted">Fully Self-written CSS</div>
                                <div class="sm-tag text-muted">Responsive Design</div>
                                <div class="sm-tag text-muted">Accessibility</div>
                                <div class="sm-tag text-muted">Log-In</div>
                                <div class="sm-tag text-muted">Sharing</div>
                            </div>
                        </div> 
                        </div>  
                        </Grow>
                    </div>

                    <div class="col-12 col-md-6">
                        <Grow in={inViewport}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(inViewport ? { timeout: 800 } : {})}
                        >
                        <div class="row projectCard d-flex align-items-center">
                        <div class="row">
                           <img src={webDemo} class={"img-fluid rounded-start "} alt="..."/>
                        </div>
                        <div class="row">
                        <h4 class={"mt-3"}>"Hi, I'm Jiahao"</h4>
                            <p>My personal website
                            </p>
                            <p><Button href="https://jiahao-ye.com" variant="outlined">Check it out</Button></p>
                            <div class=" d-flex flex-wrap">
                                <div class="sm-tag text-muted">React.JS</div>
                                <div class="sm-tag text-muted">Fade In Animation</div>
                                <div class="sm-tag text-muted">Responsive Design</div>
                                <div class="sm-tag text-muted">Partially self-written CSS</div>
                                <div class="sm-tag text-muted">Bootstrap</div>
                                <div class="sm-tag text-muted">MaterialUI</div>
                            </div>
                        </div> 
                        </div>  
                        </Grow>
                    </div>
                    
                </div>
            </div>
            </div>
            
      </div>
      </section>
      
    );
}
 
export default Experience;