import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
    const Links = [
        {
            id: 1,
            child: (
                <>
               LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/gavinwentzel/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
               Github <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/gwentzel26',
           
        },
        {
            id: 3,
            child: (
                <>
               Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:gavinwentzel@gmail.com',
       
        },
        {
            id: 4,
            child: (
                <>
               Resume <BsFillPersonLinesFill  size={30}/>
                </>  
            ),
            href: 'SoftwareResume4-05.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between items-center w-40 h-12 px-4 bg-gray-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
                <a href='' className='flex justify-between items-center w-full text-white'>
                    LinkedIn <FaLinkedin size={30} /> 
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks