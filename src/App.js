import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Pages/Header';
import About from './Pages/About'
import headshot from './picture/headshot.jpg';
import meta from './picture/meta.png';
import tiktok from './picture/tiktok.png';


function App() {
  return (
    <div class=".bg-light.bg-gradient">
      <Header/>
        <div className="alert alert-primary" role="alert">
            This site is still under construction!
        </div>

      <section id="about" class=".bg-light.bg-gradient mt-4 mx-5 pt-4 px-4 pb-4">
            <div class="mt-5 mx-5">
                <img src={headshot} class="mb-4 headshot"/>
              <div class="fs-3">Hi 👋</div>
                  <span class="fs-3">My name is <span class="fw-bold emphasize fs-2">Jiahao Ye</span><span class="fst-italic fs-4"> hi/him</span></span>
                    <div class="fst-italic mb-2 mt-4">I'm a</div>
                    <div class="container d-flex flex-wrap">
                        <div className="tag">Photographer</div>
                        <div className="tag">Developer</div>
                        <div className="tag">Coffee lover</div>
                        <div className="tag">Dancer</div>
                        <div className="tag">Cat lover</div>
                    </div>
            <div class="mt-4">
                <p class="fs-8 lh-lg">I'm currently a senior at <a className="link" href="https://www.pomona.edu">Pomona
                    College</a> in California.</p>
                <p class="fs-8 lh-lg">I'm from Deqing, China.</p>
              <p class="fs-8 lh-lg">I major in Computer Science. But I'm also very pasionate about social sciences. I study politics, international relations, anthropology, sociology, and had a field study in Uganda during my undergraduate studies.</p>
                <p class="fs-8 lh-lg">I dance K-POP. I love coffee. And I have a cat called 小宝 (Xiaobao).</p>

            </div>
          </div>
      </section>

        <br></br>

      <section id="work" class=".bg-light.bg-gradient mt-4 mx-5 pt-4 px-4 pb-4">
        <div className="mt-5 mx-5">
            <h3 class="fw-bold">Experience</h3>
            <div class="row">
            <div class="col-12 col-lg-6">
                <div class="fst-italic mt-4 mb-3">Current</div>
                    <div class="container d-flex flex-wrap">
                        <div class="role">
                            <div>
                                <span>Incoming Software Engineer Intern</span>
                                <img src={meta} class="logo mx-4"/>
                            </div>
                        </div>
                        <div className="role">
                            Board Member @ 5C K-POP Performance Unit
                        </div>
                        <div className="role">
                            Student Photographer @ Pomona Communications Office
                        </div>
                        <div className="role">
                            Full stack developer @ Milk & Honey
                        </div>
                    </div>
            </div>
            <div className="col-12 col-lg-6">
                <div className="fst-italic mt-4 mb-3">Past</div>
                    <div class="container d-flex flex-wrap">
                        <div class="role">
                            <div>
                                <span>Product Strategy Intern</span>
                                <img src={tiktok} className="logo mx-4"/>
                            </div>
                        </div>
                        <div className="role">
                            Admissions Tour Guide @ Colby College
                        </div>
                        <div className="role">
                            Student Videographer @ Colby Museum of Art
                        </div>
                    </div>


            </div>
            </div>
        </div>

      </section>

      <section id="cat" class="border .bg-light.bg-gradient mt-4 mx-5 pt-4 px-4 pb-4">

      </section>

      <section id="photography" class="section .bg-light.bg-gradient mt-4 mx-5 pt-4 px-4 pb-4">

      </section>

      <section id="contact" class="section .bg-light.bg-gradient mt-4 mx-5 pt-5 pb-5 px-5 py-5">

      </section>


    </div>
   
  );
}

export default App;
