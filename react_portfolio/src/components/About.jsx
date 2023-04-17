import React from "react";


const About = () => {
  return (
    <div className="About w-full h-[220vh] md:h-screen bg-gradient-to-b from-blue-600 to-black text-white" >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-start md:justify-center w-full h-full">
      
        <div className="pt-20 lg:pt-0 pb-4 md:pb-8">
    
          <h3 className="text-4xl md:text-6xl font-bold inline border-b-4 border-gray-500 snap-center">About</h3>
        </div>

        <p className="text-xl mt-14">
          
         I studied Digital Marketing, Business Information Management, and Mathematics at the University of Denver and graduated in 2019. 
          I worked with three different companies to conduct digital marketing campaigns through SEO, social media advertising, and Google Analytics. 
           I learned to create and filter databases with SQL and microsoft Access, web design and best practices in HTML/CSS, data analysis and visualization 
           in Python and R, as well as well as studie algorythms, multivariable calcus, differential equations, and non-parametric statistics. 
         
        </p>

        <br></br>

        <p className="text-xl">I completed the University of Denver's Full Stack Web Development in the spring of 2022 where I studied the entire life cycle of software applications 
        from backend databases and servers, in MongoDB and Express, to front end frameworks and design, in React and materialUI/bootstrap, after polishing the fundamentals in CSS and
        vanilla javascript.  I learned how to fetch and display data from third party API's and created several projects with this knowledge.  
        </p>
        <br></br>
        <p className="text-xl">Since graduation I have kept developing and learning new technologies through my work experience at Our Village Roots and personal projects.</p>
      </div>
    </div>
  );
};

export default About;
