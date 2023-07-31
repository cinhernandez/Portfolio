import React from 'react'
import WorkWander from '../Assets/Workwander.png'
import PWRStackLab from '../Assets/PWRStackLab.png'
import KMN from '../Assets/KMN.png'
import PlurPortal from '../Assets/PlurPortal.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-600 gradient-bg'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-600 border-pink-600'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            {/*container*/}

            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

                {/*Card 1*/} 
                <div style={{backgroundImage: `url(${PWRStackLab})`}}
                className='shadow-lg shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/*Hoover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
            React JS and Flask Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/cinhernandez/Power-Stack-Lab.git" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 n-2 bg-white text-gray-700 font-bold text-lg'> Code </button>
                            </a>

                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${WorkWander})`}}
                className='shadow-lg shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/*Hoover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
            React JS and Flask Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/blorty/Project-WorkWander.git" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 n-2 bg-white text-gray-700 font-bold text-lg'> Code </button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${KMN})`}}
                className='shadow-lg shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/*Hoover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/cinhernandez/Kingdom-Meals-and-Nutrition.git" target="_blank" rel="noopener noreferrer" >
                                <button className='text-center rounded-lg px-4 py-3 n-2 bg-white text-gray-700 font-bold text-lg'> Code </button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${PlurPortal})`}}
                className='shadow-lg shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/*Hoover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
            Python CLI Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/cinhernandez/PlurPortal.git" target="_blank" rel="noopener noreferrer" >
                                <button className='text-center rounded-lg px-4 py-3 n-2 bg-white text-gray-700 font-bold text-lg'> Code </button>
                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    
    </div>
  )
}

export default Work