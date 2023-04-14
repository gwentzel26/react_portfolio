import React from "react";
import HeroImage from "../assets/Hero.jpeg";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-blue-900 via-black to-blue-600">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-6">
            I have 2 years of experience building and designing software
            <br></br>3 years of experience creating digital marketing campaigns{" "}
             <br></br> Currently, I
            have been building web applications using technologies like React,
            TailwindCSS, Node, Express, and MongoDB
          </p>

          <div> 
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center
            rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <span className="px-2 group-hover:rotate-90">
                    <BsArrowRight size={20}/>
                </span>
            </button>
          </div>

          
        </div>
        <div>
            <img src={HeroImage} alt="personal profile" className="rounded-2xl mx-auto w-2/5 md:w-4/5 " />
          </div>
      </div>
    </div>
  );
};

export default Home;
