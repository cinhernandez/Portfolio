import React, {useState} from 'react'
import {FaBars, FaLinkedin, FaTimes, FaGithub } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../Assets/Logo.png'
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fafafa] text-black-500'>
    <div>
        <img src={Logo} alt='logo' className='w-[150px] h-[100px]' />
    </div>
    <div>
        <ul className='hidden md:flex'>
            <li>
                <Link to='home' smooth={true} duration={500} >
                Home
                </Link>
            </li>
            <li>
                <Link to='about' smooth={true} duration={500} >
                About
                </Link>
            </li>
            <li>
                <Link to='skills' smooth={true} duration={500} >
                Skills
                </Link>
            </li>
            <li>
                <Link to='work' smooth={true} duration={500} >
                Work
                </Link>
            </li>
            <li>
                <Link to='contact' smooth={true} duration={500} >
                Contact
                </Link>
            </li>
        </ul>
    </div>

    {/*Hamburger*/}
    <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
    </div>

    {/*Mobile Menu*/}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#fafafa] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to='home' smooth={true} duration={500} >
            Home
        </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='about' smooth={true} duration={500} >
            About
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='skills' smooth={true} duration={500} >
            Skills
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='work' smooth={true} duration={500} >
            Work
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='contact' smooth={true} duration={500} >
            Contact
            </Link>
        </li>
    </ul>

    {/*Social Icons*/}
    <div className='hidden lg:flex fixed flex-ol top-[35%] left-0'>
    <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href="https://www.linkedin.com/in/cindy-software-engineer" target="_blank" rel="noopener noreferrer">
                LinkedIn <FaLinkedin size={30} />
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href="https://github.com/cinhernandez" target="_blank" rel="noopener noreferrer">
                Github <FaGithub size={30} />
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-rose-400'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href="mailto:codingwithcindy@gmail.com">
                Email <HiOutlineMail size={30} />
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href="https://docs.google.com/document/d/1kbOjVuq0qaBsoaJ71Tk1qjTkHx34thkm1IJUQOzqr6Y/edit?usp=sharing" target="_blank" rel="noopener noreferrer" >
                Resume <BsFillPersonLinesFill size={30} />
            </a>
        </li>
    </ul>
    </div>
    
    </div>
  )
}

export default Navbar