import './App.css';
import Header from './Pages/Header';
import Intro from './Pages/Intro';
import Experience from './Pages/Experience';
import Art from './Pages/Art';
import Life from './Pages/Life'
import Contact from './Pages/Contact';
import 'animate.css';
import React, { useState, useEffect, useRef } from 'react';


function App() {
    const [selectedKey, setSelectedKey] = useState(1);

    function handleSelect(selectedKey) {
        setSelectedKey(selectedKey);
    }

    return (
    <div class=".bg-light.bg-gradient">
        <Header onKey={handleSelect} selectedKey={selectedKey}/>
        <Intro />
        <Experience />
        <Art />
        <Life />
        <Contact/>

        <br></br>
        <br></br>


        <div class="d-flex justify-content-center mb-4 mt-5 footer">
            @Jiahao Ye 2022 :)
        </div>
    </div>
   
  );
}

export default App;
