import { useEffect } from 'react';

const About = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <div className="w-full bg-gray-200 py-10 mt-2 min-h-[calc(100vh-148px)] px-5 font-['Be_Vietnam_Pro',sans-serif]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 bg-white rounded-2xl py-2">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 underline">ABOUT <span className='text-orange-500'>US</span></h1>
          <p className="text-gray-700 text-base md:text-lg">
            At <span className='text-orange-500'>Mannjog Solar</span>, we’re committed to delivering sustainable, high-quality solar solutions for homes, businesses, and industries. We specialize in providing reliable, efficient energy systems using the latest technology for optimal performance.

            Guided by our <span className='text-orange-500'>“Greenergetic” </span> culture, we aim to make the transition to solar energy seamless and positive for every customer. Our mission is to reduce carbon footprints, promote sustainability, and create a brighter, greener future for all. With Mannjog Solar, you’re not just adopting solar power—you’re joining a movement toward a cleaner tomorrow
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/thirdImg.jpeg"
            alt="About Us"
            className="w-full h-full object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
