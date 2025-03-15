import React from 'react'

const Section5 = () => {
  return (
    
    <div className="p-3">
      <h1 className='text-center text-4xl font-[Big_Shoulders] -tracking-tighter font-semibold p-5'>Our Solar Projects in Action</h1>
      <div className="p-10 bg-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {["thirdImg.jpeg", "fourthImg.jpeg", "firstImg.jpeg", "secondImg.jpeg"].map((img, index) => (
          <div key={index} className="relative group">
            <img
              src={`./${img}`}
              alt={`Gallery image ${index + 1}`}
              className="rounded-2xl h-60 w-80 object-cover shadow-md transition-all duration-300 ease-in-out transform group-hover:scale-95 group-hover:shadow-lg group-hover:shadow-orange-500"
            />
            <div className="absolute inset-0 bg-black/30 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center rounded-2xl">
              
            </div>
          </div>
        ))}
      </div>
      </div>
  )
}

export default Section5