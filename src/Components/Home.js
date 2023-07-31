import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen gradient-bg'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-pink-400'>Hi, My name is</p>
      <h1 className='text-4xl sm:7xl font-bold text-black'>Cindy Hernandez</h1>
      <h2 className='text-4xl sm:7xl font-bold text-gray-400'>I'm a Full Stack Developer.</h2>
      <p className='text-gray-700 py-4 max-w-[700px]'>From Sales Executive to Full Stack Developer, my journey has been a thrilling transformation that 
      centers around crafting extraordinary digital experiences. I'm now passionately devoted to developing and designing responsive 
      full-stack web applications that captivate users and elevate businesses.</p>
      <div>
        <button className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-400 hover:border-pink-400'>
          <Link to='work' smooth={true} duration={500} >
          View Work
          </Link>
        <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-3 hover:' />
        </span>
        
        </button>
      </div>
    </div>
    </div>
  )
}

export default Home