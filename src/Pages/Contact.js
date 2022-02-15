import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

const Contact = () => {
    const myRef = useRef();
    const {
        inViewport,
        enterCount,
        leaveCount,
    } = useInViewport(myRef);

    return ( 
        <section id="contact" ref={myRef} class=".bg-light.bg-gradient mt-md-4 mx-md-5 pt-md-4 px-md-4 pb-md-4">
          <div className={"mt-5 mx-5 " + (inViewport ? 'animate__animated animate__fadeInUp' : 'invisible')}>
              <h3 class="fw-bold mb-5">Contact Me</h3>
                    <div class="mx-4">Email: <a href="mailto: yejiahaoderek@gmail.com">yejiahaoderek@gmail.com</a></div>
          </div>
        </section>
    );
}
 
export default Contact;

