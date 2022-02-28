import { useInViewport } from 'react-in-viewport';
import React, { useRef } from 'react';
import InstagramFeed from "react-ig-feed";
import Grow from '@mui/material/Grow';
import "react-ig-feed/dist/index.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';


const Life = () => {
    const matches = useMediaQuery('(min-width:544px)');

    const myRef = useRef();
    const {
        inViewport,
        enterCount,
        leaveCount,
    } = useInViewport(myRef);

    return ( 
        <section id="life" ref={myRef} class=".bg-light.bg-gradient mt-md-4 mx-md-5 pt-md-4 px-md-4 pb-md-4">
            <div className={"mt-5 narrow mx-5 "}>
              <h3 class="fw-bold mb-5">Life</h3>
              <h5 className="mb-3" id="cat">My Cat</h5>
              <InstagramFeed
                token='IGQVJVOFBZAY0FCVzZAQY0hIeVg0ZA2xqUTJNMV9nZAWNmQXNQb24zWHdtc0VBcU9oWTVnSU0tNUhyZAkdsTnMxUHBpWjFSbWhZASUFMTEhfZAmRxQmxDUmdFbnBTSnN0UkpPR0NZAT0RydHo0WEd1YVYxVlJKVQZDZD'
                counter={matches ? 14 : 6}
                />
            
              <h5 className="mb-3 mt-5">Dance</h5>
              <div class="col-md-4 col-12">
              <div class="videoCard">
                    <div className='embed-container video'>
                        <iframe src='//player.bilibili.com/player.html?aid=290797100&bvid=BV1ef4y1h7ZA&cid=344903910&page=1' frameBorder='0' allowFullScreen></iframe>
                    </div>
                    <div class="card-body">
                    <p class="card-title fw-bold">火箭少女-月亮警察Cover</p>
                    <p class="card-text">This is a dance cover with the amazing friends I met during my gap semeseter in Beijing</p>
                    <p class="card-text"><Button href="https://www.bilibili.com/video/BV1ef4y1h7ZA?spm_id_from=333.999.0.0" variant="outlined" role="button">Watch on Bilibili</Button></p>
                    </div>
             </div>
             </div>
          </div>
        </section>
    );
}
 
export default Life;

