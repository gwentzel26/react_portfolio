import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {

  const [nav, setNav ] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  // Social Links Array
  const SLinks = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/gavinwentzel/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/gwentzel26",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:gavinwentzel@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "SoftwareResume4-05.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ]

  return (
    // Desktop Navbar
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
      <Link to={"Home"} smooth duration={500}> <h1 className="text-5xl font-signature ml-2"> Gavin </h1>
        </Link>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
             <li 
             key={id}
             className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-110 duration-200 ">
             <Link to={link} smooth duration={500}>{link}</Link>
           </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden snap-center">
        
        {nav ? <FaTimes size={35} /> : <FaBars size={35} /> }
      </div>

          {/* Mobil Navbar Logic */}
    {nav && (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-400">
      {links.map(({ id, link }) => (
          <li 
             key={id}
             className="px-4 cursor-pointer py-6 text-4xl">
            <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
           </li>
           
           
        ))}
        {SLinks.map(({id, child, href, style, download}) => ( <li key={id} className={
        "flex items-center w-32 h-8 px-4 bg-gradient-to-r from-[#302b63] to-blue-500 my-1" 
        + " " + style}>
        <a
          href={href}
          className="flex justify-between items-center w-full text-white hover:scale-105"
          download={download}
          target='_blank'
          rel="noreferrer"
        >
          {child}
        </a>
      </li> ))}


      </ul>
      )
     }
    </div>
  );
};

export default Navbar;
