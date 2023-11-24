"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import profileImage from '../../public/images/profile.png';
import Link from 'next/link';



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId); 
}, []);

    const dayOfWeek = currentTime.toLocaleDateString('en-US', { weekday: 'short' });
    const month = currentTime.toLocaleDateString('en-US', { month: 'short' });
    const dayOfMonth = currentTime.toLocaleDateString('en-US', { day: 'numeric' });
    const time = currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <header className='p-4 mb-8'>
      <nav className='flex justify-between items-center px-4 md:px-12'>
        <div className='flex'>
          <h3 className='font-Khorla text-[#4C5FF7] text-2xl'>MedMate</h3>
        </div>
        <div className='sm:hidden flex'>
       
        {/* Mobile Menu Icon */}
        <div className='sm:hidden mr-2'>
          <button
            className=''
            onClick={toggleMobileMenu}
          >
            {/* <Bars3BottomLeftIcon /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
          </button>
        </div>
        </div>
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className='sm:hidden bg-[#f5f5f5] fixed top-0 left-0 w-[75%] h-full z-40  flex flex-col justify-between py-12 items-center'>
            <div className='w-full flex justify-around items-center'>
            <p className='font-Khorla text-[#4C5FF7] text-2xl'>MedMate</p>  
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={toggleMobileMenu}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
            <ul className='space-y-3'>
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/details'>Patient details</Link></li>
            </ul>
            <ul className=''>
            <li className='flex justify-center items-center gap-x-2 bg-[#F5F5F5] px-2 py-2 rounded-full'><Image src={profileImage} alt='profile image' className='flex'/><span className='text-black text-sm'>Daniel</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            </li>
            </ul>
          </div>
        )}
        {/* Desktop Menu */}
        <ul className='hidden md:flex justify-center items-center gap-x-8 text-[#949494]'>
        <li>{time} | {dayOfWeek}, {month} {dayOfMonth}</li>
        <li className='flex justify-center items-center gap-x-2 bg-[#F5F5F5] px-2 py-2 rounded-full'><Image src={profileImage} alt='profile image' className='flex'/><span className='text-black text-sm'>Daniel</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;