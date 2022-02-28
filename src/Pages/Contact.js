import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import headshot2 from '../picture/headshot2.png';


const Contact = () => {
    const myRef = useRef();
    const {
        inViewport,
        enterCount,
        leaveCount,
    } = useInViewport(myRef);

    return ( 
        <section id="contact" ref={myRef} class=".bg-light.bg-gradient mt-md-4 mx-md-5 pt-md-4 px-md-4 pb-md-4">
            <div className={"mt-5 narrow mx-5 "}>
              <h3 class="fw-bold mb-5">Contact Me</h3>
                <div class={"mx-4 + (inViewport ? 'animate__animated animate__fadeInUp' : 'invisible')"}>
                    <div className="d-flex justify-content-center"><img src={headshot2} className="headshotFooter"/></div>
                    <div className="d-flex justify-content-center mt-3">
                        <IconButton aria-label="linkedin" color="primary" href="https://www.linkedin.com/in/jiahao-ye/">
                            <LinkedInIcon/>
                        </IconButton>
                        <IconButton aria-label="ins" color="primary" href="https://www.instagram.com/yejiahaoderek/">
                            <InstagramIcon/>
                        </IconButton>
                        <IconButton aria-label="ins" color="primary" href="mailto: yejiahaoderek@gmail.com">
                            <EmailIcon/>
                        </IconButton>
                    </div>
                    <div class="mt-3 d-flex justify-content-center">Feel free to reach out to me at any time! </div>
                </div>
          </div>
        </section>
    );
}
 
export default Contact;

