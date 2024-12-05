import React from 'react';
import video from '../../img/hero.mp4';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <video 
        src={video} 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome to Our Website</h1>
      </div>

      {/* Optional Overlay for darkening the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default HeroSection;
