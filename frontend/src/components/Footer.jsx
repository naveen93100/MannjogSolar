// import React from 'react'

// const Footer = () => {
//   return (
//     <div className='bg-gray-800 p-10'>
//         <div className='flex justify-center'>
//             <img src="./logo.png" alt="" />
//              <div>
//                  contact us 
//                  9780479718
//                  7889298940
//              </div>
//              <div>
//                 email:mannjogsolarpanel@gmail.com
//              </div>
//              <div>
//                 address:Street No.1 New Azad Nagar,Bahadur Ke Road,Ludhiana
//              </div>
//         </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-6 md:p-10 font-[Big_Shoulders] -tracking-tighter">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
        
        {/* Logo Section */}
        <div className="mb-6 md:mb-0 bg-white rounded-2xl p-1">
          <img src="./logo.png" alt="Company Logo" className="h-16 rounded-2xl" />
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-right space-y-3">
          <p className="font-semibold text-lg underline ">Contact Us</p>

          <p className="flex items-center justify-center md:justify-end underline font-semibold ">
            <FaPhoneAlt className="text-orange-500 mr-2  " /> 9780479718 | 7889298940
          </p>

          <p className="flex items-center justify-center md:justify-end underline font-semibold ">
            <FaEnvelope className="text-orange-500 mr-2 " /> mannjogsolarpanel@gmail.com
          </p>

          <p className="flex items-center justify-center md:justify-end underline font-semibold ">
            <FaMapMarkerAlt className="text-orange-500 mr-2 " />
            Street No.1, New Azad Nagar, Bahadur Ke Road, Ludhiana
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
