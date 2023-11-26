import React from 'react'
import doctorImage from '../../public/images/doctors.png'
import Image from 'next/image'
import Link from 'next/link'

const SignUpPage = () => {
  return (
    <section className='flex flex-col sm:flex-row md:h-screen'>
        <div className='flex-1 bg-[#4C5FF7] text-white flex flex-col items-center justify-center gap-y-10 text-center px-3 md:px-8 pt-12 md:pb-8'>
            <h3 className='font-Khorla text-2xl'>MedMate</h3>
            <h4 className='text-[20px]'>Stay informed and empowered to enhance patient care</h4>
            <p className='text-sm md:w-2/3'>Seamless access to patient data, making it a breeze for healthcare providers to access comprehensive adherence reports.</p>
            <Image src={doctorImage} alt='doctor Image' className='' width={600} height={450} />
        </div>
        <div className='flex-1 overflow-auto px-4 sm:px-8 py-6 sm:py-12'>
            <form action="" className='px-2 md:px-8 pt-6'>
                <h2 className='text-2xl'>Login</h2>
                <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none indent-4 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                    <div className="sm:col-span-6">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none indent-4 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                </div>
                <button className='bg-[#4C5FF7] w-full text-white py-2 rounded-full mt-4'>
                    Continue
                </button>
            </form>
            <p className='text-center mt-4'>Don&#39;t have an account? <span className='text-[#4C5FF7]'><Link href='/signup'>Sign up</Link></span></p>
        </div>
    </section>
  )
}

export default SignUpPage