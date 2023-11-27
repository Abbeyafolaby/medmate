"use client"
import {useState } from 'react'
import { useRouter } from 'next/navigation'; 
import doctorImage from '../../public/images/doctors.png'
import Image from 'next/image'
import Link from 'next/link'

const SignUpPage = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        doctorId: '',
        phoneNumber: '',
      });

      const [registrationStatus, setRegistrationStatus] = useState({
        success: false,
        error: false,
      });
    
    
      const handleInputChange = (e: any) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e: any) => {
        e.preventDefault();
      
        try {
          const response = await fetch('https://medmatebackend2-production.up.railway.app/api/v1/auth/registerUserDoctor', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: formData.email,
              password: formData.password,
              // Add needed other fields as
            }),
          });
      
          if (response.ok) {
            // Handle successful registration
            setRegistrationStatus({ success: true, error: false });
            router.push('/'); // Redirect to the home page
          } else {
            // Handle registration error
            setRegistrationStatus({ success: false, error: true });
      
            // Log the details of the failed response
            console.error('Registration failed. Server response:', await response.json());
          }
        } catch (error) {
          console.error('Error during registration:', error);
          setRegistrationStatus({ success: false, error: true });
        }
      };      

  return (
    <section className='flex flex-col sm:flex-row md:h-screen'>
        <div className='flex-1 bg-[#4C5FF7] text-white flex flex-col items-center justify-center gap-y-10 text-center px-3 md:px-8 pt-12 md:pb-8'>
            <h3 className='font-Khorla text-2xl'>MedMate</h3>
            <h4 className='text-[20px]'>Stay informed and empowered to enhance patient care</h4>
            <p className='text-sm md:w-2/3'>Seamless access to patient data, making it a breeze for healthcare providers to access comprehensive adherence reports.</p>
            <Image src={doctorImage} alt='doctor Image' className='' width={600} height={450} />
        </div>
        <div className='flex-1 overflow-auto px-4 sm:px-8 py-6 sm:py-12'>
            <form onSubmit={handleSubmit} className='px-2 md:px-8 pt-6'>
                <h2 className='text-2xl'>Create account</h2>
                <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none indent-4 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none indent-4 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none indent-4 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                    <div className="sm:col-span-6">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm Password
                    </label>
                    <div className="mt-2">
                        <input
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                        type="password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none indent-4 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                    <div className="sm:col-span-6">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Doctor ID
                    </label>
                    <div className="mt-2">
                        <input
                        id="doctorId"
                        name="doctorId"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none indent-4 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                    <div className="sm:col-span-6">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone Number (Optional)
                    </label>
                    <div className="mt-2">
                        <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none indent-4 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                </div>
                <button className='bg-[#4C5FF7] w-full text-white py-2 rounded-full mt-4'>
                    Create account
                </button>
            </form>
            {registrationStatus.success && (
                <div className='bg-green-100 text-green-800 p-3 mb-4 rounded'>
                    Registration successful! Redirecting to the home page...
                </div>
                )}
                {registrationStatus.error && (
                <div className='bg-red-100 text-red-800 text-center py-3 mt-4 rounded '>
                    Registration failed. Please check your details and try again.
                </div>
            )}
            <p className='text-center mt-4'>Already have an account? <span className='text-[#4C5FF7]'><Link href='/login'>Log In</Link></span></p>
        </div>
    </section>
  )
}

export default SignUpPage