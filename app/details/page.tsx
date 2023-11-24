"use client"
import { useState } from 'react'
import Image from 'next/image'
import profileImage from '../../public/images/profile.png'

const DetailsPage = () => {

    // Assume accessGranted is a state that determines whether access is granted or not
  const [accessGranted, setAccessGranted] = useState(false);

  const handleRequestAccess = () => {
    // Add logic to handle the access request, e.g., show a modal or send a request
    // For now, let's toggle access when the button is clicked
    setAccessGranted(!accessGranted);
    };

  return (
    <article className='relative bg-[#F4F8FF] w-[75%] md:w-[300px] lg:w-[354px] h-[350px] md:h-[423px] rounded-2xl my-9 mx-8 md:mx-12 border border-[#93A9FD] overflow-hidden'>
    <div className={`${!accessGranted ? 'relative' : ''}`}> 
    {!accessGranted && (
          <div className="absolute inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
        )}
        {!accessGranted && (
          <button
            onClick={handleRequestAccess}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4C5FF7] text-white text-xs md:text-base py-2 px-2 md:px-4 rounded-full z-10"
          >
            Request Access
          </button>
        )}
        <div className='p-4 md:p-6'>
            <div className='flex justify-between items-center'>
                <Image src={profileImage} alt='profile image' className='w-12' />
                <div className='bg-[#E2E2E2] rounded-full p-1.5 space-x-4 pb-2.5 pr-2.5 text-black'>
                    <span className='text-[12px] bg-white p-2 rounded-full shadow-md'>Information</span>
                    <span className='text-[12px]'>Report</span>
                </div>
            </div>
            <div className='my-4 md:my-8 text-[#B8B8B8]'>
                <p className='text-sm mb-3'>Currently on medication</p>
                <hr className='w-full' />
                <div className='mt-4 space-y-1.5 text-xs md:text-sm lg:text-base'>
                    <p className='flex justify-between'>
                        <span>Name:</span>
                        <span className='text-black'>Micheal Lane</span>
                    </p>
                    <p className='flex justify-between'>
                        <span>Condition:</span>
                        <span className='text-black'>Mild Headache</span>
                    </p>
                    <p className='flex justify-between'>
                        <span>Medication:</span>
                        <span className='text-black'>Paracetamol</span>
                    </p>
                    <p className='flex justify-between'>
                        <span>Medication type:</span>
                        <span className='text-black'>Pills</span>
                    </p>
                    <p className='flex justify-between'>
                        <span>Medication duration:</span>
                        <span className='text-black'>1 month</span>
                    </p>
                    <p className='flex justify-between'>
                        <span>Numbers of days active:</span>
                        <span className='text-black'>10 days</span>
                    </p>
                    <p className='flex justify-between'>
                        <span>Phone Number:</span>
                        <span className='text-black'>(+234) 1234567890</span>
                    </p>
                </div>
            </div>
        </div>
        </div>   
    </article>
  )
}

export default DetailsPage