import React, {useEffect} from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';

function MuiButtonGroup() {
    useEffect(()=>{
        Aos.init({duration: 1000});
      },[])
  return (
    <div data-aos="fade-up">MuiButtonGroup</div>
  )
}

export default MuiButtonGroup