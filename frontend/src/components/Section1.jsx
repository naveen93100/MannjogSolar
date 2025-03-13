import React from 'react'

const Section1 = () => {
    return (
        <div className='px-4 py-2 w-full'>
            <div className='relative'>
            <img src="./firstImg.jpeg" alt="" className='w-full object-cover h-96 rounded-2xl shadow-lg' />
                <div className='w-full py-10 h-full bg-black/30 rounded-2xl absolute top-0 flex items-center justify-end px-2'>
                    <div className='w-full lg:w-1/2 space-y-10 tracking-wide text-center'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl text-gray-200 font-bold capitalize font-["Bebas_Neue",sans-serif] -tracking-tighter'>
                            it's time to do something good for your wallet and planet earth
                        </h1>
                        <span className='bg-orange-500 text-white py-2 px-3 rounded-lg text-center text-[10px] md:text-sm '>Find your nearest dealer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1