import './App.css';
import Header from './Pages/Header';
import Intro from './Pages/Intro';
import Experience from './Pages/Experience';
import Art from './Pages/Art';
import Life from './Pages/Life'
import Contact from './Pages/Contact';

import 'animate.css';
import Swing from 'react-reveal/Swing';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import React, { useState, useEffect, useRef } from 'react';
import TrackVisibility from 'react-on-screen';


function App() {
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
    <div class=".bg-light.bg-gradient">
        <Header />
        <Intro />
        <TrackVisibility once><Experience /></TrackVisibility>
        <TrackVisibility once><Art /></TrackVisibility>
        <TrackVisibility once><Life /></TrackVisibility>
        <TrackVisibility once><Contact/></TrackVisibility>

        <br></br>
        <br></br>

        <div class="d-flex justify-content-center mb-4 mt-5">
            @Jiahao Ye 2022 :)
        </div>
    </div>
   
  );
}

export default App;
