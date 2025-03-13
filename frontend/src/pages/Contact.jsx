import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useEffect } from "react";

const Contact = () => {

  useEffect(()=>{
     window.scrollTo(0,0);
  },[])

  return (
    <div className="min-h-[calc(100vh-148px)] bg-gray-100 mt-2 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl p-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">Contact <span className='text-orange-500'>Us</span></h1>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <IoIosPhonePortrait  className='size-6 text-orange-500'/>
              <span className="text-lg text-gray-700">9780479718 / 7889298940 </span>
            </div>
            <div className="flex items-center space-x-4">
            <MdOutlineMailOutline className='size-6 text-orange-500'/>

              <span className="text-lg text-gray-700">mannjogsolarpanel@gmail.com</span>
            </div>
            <div className="flex items-start space-x-4">
            <FaLocationCrosshairs  className='size-10 text-orange-500'/>

              <span className="text-lg text-gray-700">
                Street No.1,New Azad Nagar,Bahadur Ke Road,Ludhiana.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


