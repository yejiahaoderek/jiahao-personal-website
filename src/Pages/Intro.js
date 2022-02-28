import headshot2 from '../picture/headshot2.png';
import Swing from 'react-reveal/Swing';


const Intro = () => {
    return (
        <section id="about" class=".bg-light.bg-gradient mt-md-4 mx-md-5 pt-md-4 px-md-4 pb-md-4">
            <div className={"mt-5 narrow mx-5 "}>
                <img src={headshot2} class="mb-4 headshot"/>
                <div class="fs-3" ><span class="d-flex">Hi<Swing class="inline">👋</Swing></span>
                  <span class="fs-3 animate__animated animate__fadeInUp">My name is <span class="fw-bold emphasize fs-2">Jiahao Ye</span><span class="fst-italic fs-4"> he/him</span></span></div>
                    <div class="fst-italic mb-2 mt-4 animate__animated animate__fadeInUp">I'm a</div>
                    <div class="container d-flex flex-wrap">
                        <div class="tag animate__animated animate__fadeInUp animate__delay-1s">Photographer</div>
                        <div class="tag animate__animated animate__fadeInUp animate__delay-1s">Developer</div>
                        <div class="tag animate__animated animate__fadeInUp animate__delay-1s">Coffee lover</div>
                        <div class="tag animate__animated animate__fadeInUp animate__delay-1s">Dancer</div>
                        <div class="tag animate__animated animate__fadeInUp animate__delay-1s">Videographer</div>
                        <div class="tag animate__animated animate__fadeInUp animate__delay-1s">Cat lover</div>
                    </div>
            <div class="mt-4 animate__animated animate__fadeInUp animate__delay-2s">
                <p class="fs-8 fs-sm-1 lh-lg">I'm currently a senior at <a className="link" href="https://www.pomona.edu">Pomona
                    College</a> in California.</p>
                <p class="fs-8 lh-lg">I'm from Deqing, China.</p>
              <p class="fs-8 lh-lg">While I major in Computer Science, I'm also very interested in social sciences. I study politics, international relations, anthropology, and sociology. I stayed in Uganga for a month studying international development and NGO influence with <a href="https://lauraseay.wordpress.com/curriculum-vitae/">Professor Seay</a>.</p>
                <p class="fs-8 lh-lg">I love coffee & K-POP dance. I have a <a href="#life">cat called 小宝 (Xiaobao)</a>.</p>

            </div>
          </div>
      </section>
    )
}
 
export default Intro;