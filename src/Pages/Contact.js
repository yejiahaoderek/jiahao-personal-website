import React, { useState, useEffect, useRef } from 'react';

const Contact = ({isVisible}) => {

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
        <section id="contact" class=".bg-light.bg-gradient mt-md-4 mx-md-5 pt-md-4 px-md-4 pb-md-4">
          <div className={"mt-5 mx-5 " + (isVisible ? 'animate__animated animate__fadeInUp' : 'invisible')}>
              <h3 class="fw-bold mb-5">Contact Me</h3>
                    <div class="mx-4">Intro lines</div>
                    <div class="mx-4">contact info blablabla</div>
          </div>
      </section>
    );
}
 
export default Contact;

