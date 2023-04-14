import React from 'react';
import ovrLogo from '../assets/ovrLogo.png'
import Marvel from '../assets/Marvel.png'
import Weather from '../assets/Weather.png'
import noteTaker from '../assets/noteTaker.png'


const Portfolio = () => {
  const portfolios = [
    {
        id: 1,
        src: ovrLogo
    },
    {
        id: 2,
        src: Marvel
    },
    {
        id: 3,
        src: Weather
    },
    {
        id: 4,
        src: noteTaker
    }
  ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-blue-800 w-full text-white md:h-screen">
        <div className='max-w-screen p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h3 className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</h3>
                <p className='py-8'>
                    Check out some of my work...
                </p>
            </div>
{
    portfolios.map(({id, src}) => (
        <div key={id} className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="Our Village Roots" className='rounded-md duration-300 hover:scale-110' />
                    <div className='flex items-center justify-center'>
                        <button className='text-xl w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</button>
                        <button className='text-xl w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Code</button>
                    </div>
                </div>
            </div>
    )
    )
}

            
        </div>
    </div>
  )
}

export default Portfolio