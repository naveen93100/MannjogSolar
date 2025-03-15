import { FaMoneyCheckAlt, FaTools } from "react-icons/fa";
import { MdSolarPower } from "react-icons/md";
import { GiRobotGrab } from "react-icons/gi";
import { CgPerformance } from "react-icons/cg";

const Section4 = () => {
    let cardData = [
        { title: '80% Saving on Electricity Bills', icon: <FaMoneyCheckAlt size={30}/> },
        { title: 'Fast & Hi-Quality Installation', icon: <FaTools size={30}/> },
        { title: 'High-Efficiency Solar Panels.(more than 22.8%)', icon: <MdSolarPower size={30}/> },
        { title: 'Robotic Production Line', icon: <GiRobotGrab size={30}/> },
        { title: '30+ Years High Performance', icon: <CgPerformance size={30}/> },
        { title: 'ALMM & BIS Certified'},
    ];
  return (
    <div className='mt-1 w-full p-10 bg-gray-800 text-white font-["Big_Shoulders",sans-serif]'>
            <div className='w-full'>
                <h1 className=' text-xl sm:text-2xl md:text-4xl text-center py-4 font-bold'>Why us & Why Gautam Solar?</h1>
                <div className=' mx-auto max-w-[1024px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-3 md:grid-cols-2 justify-items-center space-y-1'>
                    {cardData.map((item, index) => (
                        <div key={index} className='w-40 h-40 md:w-64 hover:scale-105 transition-all ease-in-out  p-2  border-2 border-gray-300 hover:shadow rounded-2xl bg-white text-gray-800 text-sm md:text-lg flex items-center justify-center text-center font-semibold'>
                            <b>
                                {index===cardData.length-1?
                                <img src='/Layer.png' className="w-full h-20 object-contain"  alt="not found" />
                                :
                                <p className=" flex justify-center text-orange-500">
                                    {item.icon}
                                </p>
                                }
                                {item.title}
                            </b>
                        </div>
                    ))}
                </div>
            </div>
           
        </div>
  )
}

export default Section4