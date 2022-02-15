import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grow from '@mui/material/Grow';
import { useInViewport } from 'react-in-viewport';
import React, { useRef } from 'react';


const Art = () => {
     const matches = useMediaQuery('(min-width:544px)');
     const myRef = useRef();
     const {
         inViewport,
         enterCount,
         leaveCount,
     } = useInViewport(myRef);

     const itemData = [
          {
               img: 'https://live.staticflickr.com/65535/51874583933_0344f2c126_k.jpg',
               title: 'Bed',
          },
          {
               img: 'https://live.staticflickr.com/65535/51874507436_26ec137b8e_k.jpg',
               title: 'Bed',
          },
          {
               img: 'https://live.staticflickr.com/65535/51875150070_b29857d15d_k.jpg',
               title: 'Kitchen',
          },     
          {
               img: 'https://live.staticflickr.com/65535/51882811726_d94014ae54_h.jpg',
               title: 'Kitchen',
          },
          {
               img: 'https://live.staticflickr.com/65535/51872130997_7185e39a84_k.jpg',
               title: 'Kitchen',
          },
          {
               img: 'https://live.staticflickr.com/65535/51874583928_655785757b_k.jpg',
               title: 'Kitchen',
          },     
          {
               img: 'https://live.staticflickr.com/65535/51873546232_4ee5e914d7_k.jpg',
               title: 'Kitchen',
          },     
          {
               img: 'https://live.staticflickr.com/65535/51874507411_a04c792932_k.jpg',
               title: 'Kitchen',
          },     
          {
               img: 'https://live.staticflickr.com/65535/51875150030_092dddacb2_k.jpg',
               title: 'Kitchen',
          },     
          {
               img: 'https://live.staticflickr.com/65535/51873546167_5dbd6feb95_k.jpg',
               title: 'Kitchen',
          },     
          {
               img: 'https://live.staticflickr.com/65535/51874507406_6cac910b93_k.jpg',
               title: 'Kitchen',
          },        
          {
               img: 'https://live.staticflickr.com/65535/51874823909_21aecac5d4_k.jpg',
               title: 'Kitchen',
          }
     ]


    return ( 
        <section id="art" class=".bg-light.bg-gradient mt-md-4 mx-md-5 pt-md-4 px-md-4 pb-md-4">
            <div class={"mt-5 mx-5"}>
                <h3 class="fw-bold mb-5">Art</h3>
                <h5 class="mb-3" >Photography</h5>

                <ImageList variant="masonry" ref={myRef} cols={matches ? 3 : 1} gap={8}>  
                    {itemData.map((item, index) => (
                    <ImageListItem key={item.img}>
                    <Grow in={inViewport} 
                         style={{ transformOrigin: '0 0 0' }}
                         {...(inViewport ? { timeout: index * 200 } : {})}
                    >
                    <img class="photo"
                         src={`${item.img}?w=248&fit=crop&auto=format`}
                         srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                         alt={item.title}
                         loading="lazy"
                    />
                    </Grow>
                    </ImageListItem>
                    ))}
               </ImageList>
  


                <br></br>
                <h5 class="mb-3 mt-5">Videography</h5>
                <div class="row row-cols-1 row-cols-md-3">
      
                    <div class="col mb-3">  
                    <div class="card">
                         <div className='embed-container'>
                              <iframe src='https://www.youtube.com/embed//jhMj3hW7QEQ' frameBorder='0' allowFullScreen></iframe>
                         </div>
                         <div class="card-body">
                         <p class="card-title fw-bold">Project Video</p>
                         <p class="card-text">A documentary video for project "You Are Speaking My Language" at Colby Museum of Art</p>
                         <p class="card-text"><a href="https://www.youtube.com/watch?v=jhMj3hW7QEQ" class="btn btn-primary btn-sm" role="button" aria-pressed="true">Watch on YouTube</a></p>
                         </div>
                    </div>
                    </div>

                    <div class="col mb-3">
                    <div class="card">
                         <div className='embed-container'>
                              <iframe src='https://www.youtube.com/embed/Rqixawr8KAA' frameBorder='0' allowFullScreen></iframe>
                         </div>
                         <div class="card-body">
                         <p class="card-title fw-bold">VLOG</p>
                         <p class="card-text">This a VLOG about one day of my life when college became online during the pandemic </p>
                         <p class="card-text"><a href="https://www.youtube.com/watch?v=Rqixawr8KAA" class="btn btn-primary btn-sm" role="button" aria-pressed="true">Watch on YouTube</a></p>
                         </div>
                    </div>
                    </div>

                    <div class="col mb-3">
                    <div class="card">
                         <div className='embed-container'>
                              <iframe src='//player.bilibili.com/player.html?aid=24703002&bvid=BV1wW411w7z8&cid=41524574&page=1' frameBorder='0' allowFullScreen></iframe>
                         </div>
                         <div class="card-body">
                         <p class="card-title fw-bold">High School Graduation Project Video</p>
                         <p class="card-text">This is the official video for the opening of my high school's graduation ceremony</p>
                         <p class="card-text"><a href="https://www.bilibili.com/video/BV1wW411w7z8?spm_id_from=333.999.0.0" class="btn btn-primary btn-sm" role="button" aria-pressed="true">Watch on Bilibili</a></p>
                         </div>
                    </div>
                    </div>

                    <div class="col mb-3">
                    <div class="card">
                         <div className='embed-container'>
                              <iframe src='https://www.youtube.com/embed/_2JlfyizEbU' frameBorder='0' allowFullScreen></iframe>
                         </div>
                         <div class="card-body">
                         <p class="card-title fw-bold">Sociology Project Video: Friend Group</p>
                         <p class="card-text">This is a project video for my Intro to Sociology class</p>
                         <p class="card-text"><a href="https://www.youtube.com/embed/_2JlfyizEbU" class="btn btn-primary btn-sm" role="button" aria-pressed="true">Watch on YouTube</a></p>
                         </div>
                    </div>
                    </div>
               </div>
               </div>
        </section>
    );
}
 
export default Art;