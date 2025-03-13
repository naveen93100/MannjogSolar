import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='w-full py-2 mt-14 md:mt-0 border-b-1'>
                <div className='bg-gray-100 flex justify-between items-center h-full px-5'>
                    <Link to='/'>
                        <img src="./logo.png" alt="Mannjog solar" className='object-cover w-20 md:w-28' />
                    </Link>

                    <Link to='https://www.gautamsolar.com/' target='_blank'>
                        <img src="./gautamLogo.png" className='w-20 md:w-28 object-cover' alt="" />
                    </Link>
                </div>
            </div>
            <div className='px-3 py-2  fixed flex justify-between items-center max-w-[500px] w-full top-2 md:top-7 left-1/2 -translate-x-1/2 z-40 '>
                <div className='border p-1 bg-orange-500/10 backdrop-blur-sm border-orange-500 flex justify-between items-center w-full rounded-full font-[Big_Shoulders] -tracking-tighter'>
                    <Link to='/' className="text-lg text-orange-600 ">
                        Home
                    </Link>
                    <Link to='/about' className="text-lg text-orange-600 ">
                        About
                    </Link>
                    <Link to='/contact' className="text-lg text-orange-600 ">
                        Contact
                    </Link>
                </div>
            </div>
        </>

    )
}

export default Navbar