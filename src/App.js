import './App.css';
import Header from './Pages/Header';
import headshot from './picture/headshot.jpg';
import headshot2 from './picture/headshot2.png';
import meta from './picture/meta.png';
import tiktok from './picture/tiktok.png';
import gb from './picture/growthbox.png';
import colby from './picture/colby.png';
import 'animate.css';
import Swing from 'react-reveal/Swing';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import React, { useState, useEffect, useRef } from 'react';


function App() {
    let [active, setActive] = useState(false);
    const hiddenRef = useRef();
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    const scrollHandler = () => {
        if(window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop)
            setActive(true)
    }

    return (
    <div class=".bg-light.bg-gradient">
      <Header/>

      <section id="about" class=".bg-light.bg-gradient mt-md-4 mx-md-5 pt-md-4 px-md-4 pb-md-4">
            <div class="mt-5 mx-5">
                <img src={headshot2} class="mb-4 headshot"/>
                <div class="fs-3" ><span class="d-flex">Hi<Swing class="inline">👋</Swing></span>
                  <span class="fs-3 animate__animated animate__fadeInUp">My name is <span class="fw-bold emphasize fs-2">Jiahao Ye</span><span class="fst-italic fs-4"> he/him</span></span></div>
                    <div class="fst-italic mb-2 mt-4 animate__animated animate__fadeInUp">I'm a</div>
                    <div class="container d-flex flex-wrap">
                        <div class="tag animate__animated animate__fadeInUp animate__delay-1s">Photographer</div>
                        <div class="tag animate__animated animate__fadeInUp animate__delay-1s">Developer</div>
                        <div class="tag animate__animated animate__fadeInUp animate__delay-1s">Coffee lover</div>
                        <div class="tag animate__animated animate__fadeInUp animate__delay-1s">Dancer</div>
                        <div class="tag animate__animated animate__fadeInUp animate__delay-1s">Cat lover</div>
                    </div>
            <div class="mt-4 animate__animated animate__fadeInUp animate__delay-2s">
                <p class="fs-8 fs-sm-1 lh-lg">I'm currently a senior at <a className="link" href="https://www.pomona.edu">Pomona
                    College</a> in California.</p>
                <p class="fs-8 lh-lg">I'm from Deqing, China.</p>
              <p class="fs-8 lh-lg">I major in Computer Science. But I'm also very pasionate about social sciences. I study politics, international relations, anthropology, sociology, and had a field study in Uganda during my undergraduate studies.</p>
                <p class="fs-8 lh-lg">I dance K-POP. I love coffee. And I have a cat called 小宝 (Xiaobao).</p>

            </div>
          </div>
      </section>


      <section id="work" ref = {hiddenRef} class=".bg-light.bg-gradient mt-md-4 mx-md-5 pt-md-4 px-md-4 pb-md-4">
        <div className={"mt-5 mx-5 " + (active ? 'animate__animated animate__fadeInUp' : 'invisible')}>
            <h3 class="fw-bold mb-4">Experience</h3>
                <div class="row">
                <div class="col-12 col-md-6">
                    <div class="fst-italic mt-4 mb-3">Current</div>
                    <div class="container d-flex flex-wrap">
                        <div class="role px-3 d-flex align-items-center">
                              Incoming Software Engineer Intern
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
                            @ Milk & Honey
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div class="fst-italic mt-4 mb-3">Past</div>
                    <div class="container d-flex flex-wrap">
                        <div className="role px-3 d-flex align-items-center">
                            Product Strategy Intern
                        </div>
                        <div className="role px-3 d-flex align-items-center">
                            Growth Hacker Intern
                        </div>

                        <div className="role px-3 d-flex align-items-center">
                            Admissions Tour Guide
                        </div>
                        <div className="role px-3 d-flex align-items-center">
                            Student Videographer <br/> @ Colby Museum of Art
                        </div>
                    </div>
                </div>
                </div>

            <div class="row mt-4">
                <div class="col-6 col-lg-3 d-flex flex-column"><img src={meta} class="logo align-self-center mt-4"/></div>
                <div class="col-6 col-lg-3 d-flex flex-column"><img src={tiktok} class="logo align-self-center mt-4"/></div>
                <div class="col-6 col-lg-3 d-flex flex-column"><img src={gb} class="logo align-self-center mt-4"/></div>
                <div class="col-6 col-lg-3 d-flex flex-column"><img src={colby} class="logo align-self-center mt-4"/></div>
            </div>
        </div>
      </section>

        <section id="art" className=".bg-light.bg-gradient mt-md-4 mx-md-5 pt-md-4 px-md-4 pb-md-4">
            <div className={"mt-5 mx-5 " + (active ? 'animate__animated animate__fadeInUp' : 'd-none')}>
                <h3 className="fw-bold mb-5">Art</h3>
                <h5 class="mb-3">Photography</h5>
                <div class="grid">
                    <img className="photo" src="https://live.staticflickr.com/65535/51874583933_0344f2c126_k.jpg"
                         alt="Sample photo"/>
                    <img className="photo" src="https://live.staticflickr.com/65535/51872130997_7185e39a84_k.jpg"
                         alt="Sample photo"/>
                    <img className="photo" src="https://live.staticflickr.com/65535/51874507436_26ec137b8e_k.jpg"
                         alt="Sample photo"/>
                    <img className="photo" src="https://live.staticflickr.com/65535/51875150070_b29857d15d_k.jpg"
                         alt="Sample photo"/>
                    <img className="photo" src="https://live.staticflickr.com/65535/51874583928_655785757b_k.jpg"
                         alt="Sample photo"/>
                    <img className="photo" src="https://live.staticflickr.com/65535/51873546232_4ee5e914d7_k.jpg"
                         alt="Sample photo"/>
                    <img className="photo" src="https://live.staticflickr.com/65535/51874507411_a04c792932_k.jpg"
                         alt="Sample photo"/>
                    <img className="photo" src="https://live.staticflickr.com/65535/51875150030_092dddacb2_k.jpg"
                         alt="Sample photo"/>
                    <img className="photo" src="https://live.staticflickr.com/65535/51873546167_5dbd6feb95_k.jpg"
                         alt="Sample photo"/>
                    <img className="photo" src="https://live.staticflickr.com/65535/51874507406_6cac910b93_k.jpg"
                         alt="Sample photo"/>
                    <img className="photo" src="https://live.staticflickr.com/65535/51874823909_21aecac5d4_k.jpg"
                         alt="Sample photo"/>
                </div>

                <br></br>
                <h5 className="mb-3 mt-5">Videography</h5>
                <div className='embed-container'>
                    <iframe src='https://www.youtube.com/embed//jhMj3hW7QEQ' frameBorder='0' allowFullScreen></iframe>
                </div>
            </div>
        </section>

      <section id="life"  class=".bg-light.bg-gradient mt-md-4 mx-md-5 pt-md-4 px-md-4 pb-md-4">
          <div className={"mt-5 mx-5 " + (active ? 'animate__animated animate__fadeInUp' : 'invisible')}>
              <h3 class="fw-bold mb-5">Life</h3>
              <h5 className="mb-3">My Cat</h5>
              <div class="embedsocial-hashtag" data-ref="95dc5f78c6fcc432b1a8b23adf85153ecee20ea7"></div>

              <h5 className="mb-3 mt-5">Dance</h5>
              <iframe
                  src="//player.bilibili.com/player.html?aid=290797100&bvid=BV1ef4y1h7ZA&cid=344903910&page=1"
                  allowFullScreen="allowfullscreen" width="100%" height="500" scrolling="no" frameBorder="0"
                  sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts">
              </iframe>
              <a href="" class="btn btn-primary btn-sm" role="button" aria-pressed="true">Primary link</a>


          </div>
      </section>


      <section id="contact" class=".bg-light.bg-gradient mt-md-4 mx-md-5 pt-md-4 px-md-4 pb-md-4">
          <div className={"mt-5 mx-5 " + (active ? 'animate__animated animate__fadeInUp' : 'invisible')}>
              <h3 class="fw-bold mb-5">Contact Me</h3>
                    <div class="mx-4">Intro lines</div>
                    <div class="mx-4">contact info blablabla</div>
          </div>
      </section>

        <br></br>
        <br></br>
      <div class="d-flex justify-content-center mb-4 mt-5">
          @Jiahao Ye 2022 :)
      </div>


    </div>
   
  );
}

export default App;
