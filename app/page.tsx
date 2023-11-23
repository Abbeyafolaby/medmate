import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroImage from '../public/images/HealthProfessionalTeam.png'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className=''>
        <div className='flex flex-col lg:flex-row justify-center items-center px-4 md:px-16 gap-x-16'>
          <div className='flex-1 space-y-8 text-center lg:text-left'>
          <h1 className='text-2xl sm:text-4xl font-medium tracking-wide'>Streamlined <span className='text-[#4C5FF7]'>adherence reports</span> for healthcare providers</h1>
            <p className='text-sm'>Effortlessly monitor patient adherence and access insightful reports through our user-friendly website. Empower your practice with real-time data for enhanced patient care and better healthcare outcomes.</p>
            <div className='flex items-center'>
              <input type='text' placeholder='Search For a Patient' className='w-[75%] md:w-[60%] overflow-hidden bg-[#F3F3F3] outline-none text-sm md:text-base text-[#B8B8B8] indent-2 px-2 py-2 md:px-6 md:py-4 rounded-full rounded-r-none'/>
              <button className='flex bg-[#4C5FF7] relative right-6 text-sm md:text-base text-white px-3 py-1.5 md:px-6 md:py-4 gap-x-2 rounded-full overflow-hidden z-10'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              Search
              </button>
            </div>
          </div>
          <div className='flex-1 mt-8 sm:mt-0'>
            <Image src={HeroImage} alt='Hero image' />
          </div>
        </div>
      </main>
      <Footer />  
    </>
  )
}
