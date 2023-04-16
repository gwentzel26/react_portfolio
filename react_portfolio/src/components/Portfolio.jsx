import React from "react";
import ovrLogo from "../assets/ovrLogo.png";
import Marvel from "../assets/Marvel.png";
import Weather from "../assets/Weather.png";
import noteTaker from "../assets/note-taking.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ovrLogo,
      title: 'Our Village Roots',
    },
    {
      id: 2,
      src: Marvel,
      title: 'Marvel For Beginners',
    },
    {
      id: 3,
      src: Weather,
      title: 'Weather Dashboard',
    },
    {
      id: 4,
      src: noteTaker,
      title: 'Note Taker',
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-blue-800 w-full text-white md:h-screen">
      <div className="max-w-screen p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-col pb-8 items-center">
          <h3 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </h3>
          <p className="py-8">Check out some of my work...</p>
        </div>
        
        <div className=" w-5/6 lg:w-2/3 grid sm:grid-cols-2 gap-10 px-22 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="h-full shadow-md shadow-gray-600 rounded-lg bg-gradient-to-r from-black to-gray-800">
              <div className="h-3/4">
                <img
                    src={src}
                    alt="Our Village Roots"
                    className="rounded-md duration-300 hover:scale-105"
                />
             </div>
              <div className="flex items-center justify-center mb-4">
                <button className="text-xl w-1/2 px-2  m-4 duration-200 hover:scale-110 ">
                  Demo
                </button>
                <button className="text-xl w-1/2 px-1 bg-black m-4 duration-200 hover:scale-110 border-4 border-gray-500">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
