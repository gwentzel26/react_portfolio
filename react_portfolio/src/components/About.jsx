import React from "react";


const About = () => {
  return (
    <div className="About w-full h-[140vh] md:h-screen bg-gradient-to-b from-blue-600 to-black text-white" >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-start md:justify-center w-full h-full">
      
        <div className="pt-20 lg:pt-0 pb-4 md:pb-8">
    
          <h3 className="text-4xl font-bold inline border-b-4 border-gray-500 snap-center">About</h3>
        </div>

        <p className="text-xl mt-14">
          
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos illum
          saepe sequi molestiae voluptatibus, neque possimus quo recusandae
          beatae deleniti at dolore architecto atque ullam vero dignissimos
          porro officia commodi?
        </p>

        <br></br>

        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolore unde quam perferendis laborum atque possimus sit, labore hic. Error deserunt adipisci accusamus enim quibusdam ratione earum aliquid explicabo vitae.</p>
      </div>
    </div>
  );
};

export default About;
