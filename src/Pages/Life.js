import React, { useState, useEffect, useRef } from 'react';

const Life = ({isVisible}) => {

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
        <section id="life"  class=".bg-light.bg-gradient mt-md-4 mx-md-5 pt-md-4 px-md-4 pb-md-4">
          <div className={"mt-5 mx-5 "}>
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
    );
}
 
export default Life;

