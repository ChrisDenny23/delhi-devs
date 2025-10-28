import { useState, useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [splineLoaded, setSplineLoaded] = useState(false);

  const handleSplineLoad = () => {
    setSplineLoaded(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  // Add a timeout fallback in case Spline fails to load
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!splineLoaded) {
        console.warn('Spline scene took too long to load, proceeding anyway');
        setIsLoading(false);
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timeout);
  }, [splineLoaded]);

  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] relative overflow-hidden">
    
      {/* Loading Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-700 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-gray-700 border-t-white rounded-full animate-spin"></div>
          <p className="text-gray-400 text-sm tracking-wider">Loading Experience...</p>
        </div>
      </div>

      {/* Content Container */}
      <div 
        className={`max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0 transition-all duration-1000 ${
          !isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        {/* Tag box with gradient border */}
        <div 
          className={`relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full transition-all duration-700 ${
            !isLoading ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
            <i className='bx bx-diamond'></i>
            DEVELOP
          </div>
        </div>

        {/* Hero Text */}
        <h1 
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8 transition-all duration-700 ${
            !isLoading ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          We Build
          <br /> What You Imagine.
        </h1>

        {/* Hero Description */}
        <p 
          className={`text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] transition-all duration-700 ${
            !isLoading ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          We are a team of passionate developers dedicated to turning your ideas into reality. From concept to deployment, we provide top-notch web and app development services tailored to your needs.
        </p>

        {/* Call to Action Buttons */}
        <div className='flex gap-4 mt-12'>
          <div
            className={`transition-all duration-700 ${
              !isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <a 
              className='inline-block border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] hover:scale-105' 
              href="#"
            >
              View Our Work <i className='bx bxs-briefcase'></i>
            </a>
          </div>

          <div
            className={`transition-all duration-700 ${
              !isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <a 
              className='inline-block border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white hover:scale-105' 
              href="#"
            >
              Let's Build Together <i className='bx bx-link-external'></i>
            </a>
          </div>
        </div>
      </div>

      {/* Hero 3D Model */}
      <div className="absolute -top-20 right-0 w-full h-full lg:top-0 lg:w-1/2">
        <Spline 
          scene="https://prod.spline.design/FcEi7UgxlxywaHG5/scene.splinecode"
          onLoad={handleSplineLoad}
        />
      </div>
    </main>
  );
};

export default Hero;