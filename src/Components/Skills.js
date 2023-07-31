import React from 'react'
import HTML from '../Assets/html.png'
import CSS from '../Assets/css.png'
import JS from '../Assets/javascript.png'
import ReactIcon from '../Assets/react.png'
import Tailwind from '../Assets/tailwind.png'
import Python from '../Assets/python.png'
import Flask from '../Assets/flask.png'
import Github from '../Assets/github.jpeg'

const Skills = () => {
  return (
    <div name='skills' className='gradient-bg text-gray-600'>
        {/*Container*/}
        <div className='w-full h-screen max-w-[1000px] mx-auto p-4 flex flex-col justify-center '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS} alt='JS icon' />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactIcon} alt='React icon' />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind icon' />
                    <p className='my-4'>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt='Python icon' />
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Flask} alt='Flask icon' />
                    <p className='my-4'>Flask</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt='Github icon' />
                    <p className='my-4'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills