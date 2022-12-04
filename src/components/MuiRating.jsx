import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

function MuiRating() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <div data-aos="fade-up">MuiButton</div>
  )
}

export default MuiRating;