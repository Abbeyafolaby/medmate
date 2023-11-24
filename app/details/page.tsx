import React from 'react'
import Image from 'next/image'
import profileImage from '../../public/images/profile.png'

const page = () => {
  return (
    <article className='bg-[#F4F8FF] w-[354px] h-[423px] rounded-2xl my-9 mx-12 border border-[#93A9FD]'>
        <div className='p-6'>
            <div className='flex justify-between items-center'>
                <Image src={profileImage} alt='profile image' className='w-12' />
                <div className='bg-[#E2E2E2] rounded-full p-1.5 space-x-4 pb-2.5 pr-2.5 text-black'>
                    <span className='text-[12px] bg-white p-2 rounded-full shadow-md'>Information</span>
                    <span className='text-[12px]'>Report</span>
                </div>
            </div>
            <div className='my-8 text-[#B8B8B8]'>
                <p className='text-sm mb-3'>Currently on medication</p>
                <hr className='w-full' />
                <div className='mt-4 space-y-1.5'>
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
    </article>
  )
}

export default page