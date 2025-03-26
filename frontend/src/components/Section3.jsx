import React from 'react'

const Section3 = () => {
    return (
        <>
            <div className=' my-2 py-2 space-y-4 text-gray-700 font-["Big_Shoulders"]  mt-1 px-7 overflow-hidden bg-gray-200'>
                <h1 className='text-3xl md:text-5xl py-3 font-bold underline'>Who We Are?</h1>

                <div className='py-4 px-3 rounded-2xl '>
                    <div className='space-y-5'>
                        <h1 className=' text-xl md:text-2xl -tracking-tighter'>
                            At <span className='text-orange-500'>Mannjog Solar</span>, we’re committed to delivering sustainable, high-quality solar solutions for homes, businesses, and industries. We specialize in providing reliable, efficient energy systems using the latest technology for optimal performance.
                        </h1>
                        <h1 className='text-xl md:text-2xl -tracking-tight'>
                            Guided by our “Greenergetic” culture, we aim to make the transition to solar energy seamless and positive for every customer. Our mission is to reduce carbon footprints, promote sustainability, and create a brighter, greener future for all. With Mannjog Solar, you’re not just adopting solar power—you’re joining a movement toward a cleaner tomorrow
                        </h1>
                    </div>
                    {/* <div className='flex items-center justify-center gap-4 flex-wrap mt-3'> */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-3 justify-items-center'>
                        <img src="./proinstall.jpg" alt="" className='rounded-2xl h-60 w-80 transition-all ease-in-out duration-200 hover:scale-95 object-cover hover:shadow-md hover:shadow-orange-500' />
                        <img src="./solarinstall.jpg" alt="" className='rounded-2xl h-60 w-80  transition-all ease-in-out duration-200 hover:scale-95 object-cover hover:shadow-md hover:shadow-orange-500' />
                        <img src="./firstImg.jpeg" alt="" className='rounded-2xl h-60 w-80 transition-all ease-in-out duration-200 hover:scale-95 object-cover hover:shadow-md hover:shadow-orange-500' />
                        <img src="./secondImg.jpeg" alt="" className='rounded-2xl h-60 w-80 transition-all ease-in-out duration-200 hover:scale-95 object-cover hover:shadow-md hover:shadow-orange-500' />
                    </div>
                </div>
            </div>

            <div className='space-y-4 my-2 py-2 text-gray-700 font-["Big_Shoulders"]  mt-1 px-7 overflow-hidden bg-gray-200'>
                <h1 className='text-3xl underline md:text-5xl py-3 font-bold'>Why choose us?</h1>

                <div className='py-4 space-y-5'>

                    <h1 className=' text-xl md:text-2xl font-["Big_Shoulders"]'>At <span className='text-orange-500'>Mannjog Solar</span>, we go beyond just providing solar energy solutions—we aim to make your journey to renewable energy seamless, reliable, and rewarding. Here’s what makes us the trusted choice for solar installations:</h1>

                    <div>
                        <h1 className=' text-xl md:text-xl text-orange-500 font-bold tracking-wider'>
                            1.Experience You Can Trust:
                        </h1>
                        <p className='text-sm -tracking-tighter font-semibold md:text-lg text-gray-700'> 
                            With years of expertise in the solar industry, we deliver solutions that are efficient, durable, and future-ready</p>
                    </div>
                    <div>
                        <h1 className=' text-xl md:text-xl text-orange-500 font-bold tracking-wider'>
                            2.Partnership with Gautam Solar:
                        </h1>
                        <p className='text-sm md:text-lg -tracking-tighter font-semibold text-gray-700'>
                            By working with Gautam Solar, we ensure that every project uses top-quality solar panels built with cutting-edge technology for superior performance.
                        </p>
                    </div>
                    <div>
                        <h1 className=' text-xl md:text-xl text-orange-500 font-bold tracking-wider'>
                            3.Customer-Centric Approach:
                        </h1>
                        <p className='text-sm md:text-lg -tracking-tighter font-semibold text-gray-700'>
                            Your satisfaction is our priority. We work closely with you to understand your energy needs and provide solutions tailored to your specific goals</p>
                    </div>
                </div>

                <h1 className='text-gray-700  mt-3 text-lg md:text-2xl'>
                    Choosing <span className='text-orange-500'>Mannjog Solar</span> isn’t just about going solar—it’s about partnering with a team that’s as invested in your success as you are. Let us light the way to a brighter, cleaner tomorrow.</h1>

                <div className='flex items-center justify-center py-1'>
                  <img src="./Group 438.png" alt="" className='rounded-2xl object-cover'/>    
                </div>    

            </div>
        </>
    )
}

export default Section3