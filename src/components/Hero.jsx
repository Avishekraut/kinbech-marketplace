import React from 'react';
import HeroImg from '../images/hero-img.jpg'

const Hero = () => {
  return (
    <div className='hero-img'>
      <img src={HeroImg} alt='Hero'></img>
    </div>
  );
}

export default Hero;
