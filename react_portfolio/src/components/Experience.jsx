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
  return (
    <div name="experience" className='bg-gradient-to-b from-blue-800 to-black w-full h-screen'>
        <div className='max-w-screen'>
            <div>
                <p>Experience</p>
                <p>These are the technologies I've worked with</p>
            </div>

            <div>
                <div>
                    <img src={html} alt="html" />
                    <p>HTML</p>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Experience