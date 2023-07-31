import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen gradient-bg text-gray-600'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p> Hi. I'm Cindy, nice to meet you. Please take a look around.</p>
            </div>
            <div>
                <p> I am truly passionate about creating outstanding software solutions that bring ideas to life. 
                As someone new to the world of software development, I am eager to learn and grow in this field. 
                Although I may not have extensive experience yet, I am excited to embark on this journey and make a positive impact through my work.
                </p>
            </div>
        </div>
        </div>
    </div>

  )
}

export default About