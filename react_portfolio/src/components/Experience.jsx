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
        },
        {
            id: 2,
            src: express,
            title: 'Express',
            style: 'shadow-green-300'
        },
        {
            id: 3,
            src: reactIcon,
            title: 'React',
            style: 'shadow-blue-300'
        },
        {
            id: 4,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-cyan-500'
        },
        {
            id: 5,
            src: materialUI,
            title: 'MaterialUI',
            style: 'shadow-blue-800'
        },
        {
            id: 6,
            src: stripe,
            title: 'Stripe Payment',
            style: 'shadow-purple-500'
        },
        {
            id: 7,
            src: mongo,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            id: 8,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 9,
            src: graphql,
            title: 'graphQl',
            style: 'shadow-pink-500'
        }
    ]

  return (
    <div name="Experience" className='bg-gradient-to-b from-blue-800 to-black w-full h-[160vh] md:h-screen pt-24 md:pt-[0rem]'>
        <div className='max-w-screen-lg mx-auto p-4  flex flex-col justify-start md:justify-center w-full h-full text-white '>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="html" className='w-20 mx-auto' />
                             <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
             
            </div>
        </div>
        </div>
  )
}

export default Experience