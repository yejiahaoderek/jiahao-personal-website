import React, { useState, useEffect, useRef } from 'react';
import useOnScreen from './useOnScreen'

const Art = ({isVisible}) => {
    return ( 
        <section id="art" class=".bg-light.bg-gradient mt-md-4 mx-md-5 pt-md-4 px-md-4 pb-md-4">
            <div class={"mt-5 mx-5"}>
                <h3 class="fw-bold mb-5">Art</h3>
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
    );
}
 
export default Art;