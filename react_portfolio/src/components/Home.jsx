import React from "react";
import HeroImage from "../assets/Hero.jpeg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import Typewriter from "./typewriter.tsx";



const Home = () => {
  return (
   
    <div
      name="Home"
      className="h-[140vh] md:h-screen w-full bg-gradient-to-b from-blue-900 via-black to-blue-600 sm:pt-80 md:pt-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center space-between h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            <Typewriter />
          </h2>
          
          <p className="text-gray-400 py-6">
            I have 3 years of experience building and designing software applications
            <br></br> and 5 years of experience creating digital marketing
            campaigns. <br></br> Currently, I have been building web
            applications using technologies like React, TailwindCSS, Node,
            Express, and MongoDB
          </p>

          <div>
            {" "}
            <Link to="Portfolio" smooth duration={500}>
              <button
                className="group text-white w-fit px-6 py-3 my-2 flex items-center
            rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="px-2 group-hover:rotate-90">
                  <BsArrowRight size={20} />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="personal profile"
            className="rounded-2xl mx-auto w-3/4 md:w-2/5 pb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
