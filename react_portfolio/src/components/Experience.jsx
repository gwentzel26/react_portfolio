import React from 'react'
import html from "../assets/Tech-Icons/html.png";
import express from "../assets/Tech-Icons/express.png";
import reactIcon from "../assets/Tech-Icons/react.jpg";
import tailwind from "../assets/Tech-Icons/tailwind.jpg";
import materialUI from "../assets/Tech-Icons/material-ui-introduction.webp";
import stripe from "../assets/Tech-Icons/stripePayment.png";
import mongo from "../assets/Tech-Icons/mongodb.png";
import javascript from "../assets/Tech-Icons/javascript.png";
import graphql from "../assets/Tech-Icons/graphql.png";


const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        }
 
    ]

  return (
    <div name="experience" className='bg-gradient-to-b from-blue-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                <div>
                    <img src={html} alt="html" className='w-20 mx-auto' />
                    <p className='mt-4'>HTML</p>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Experience