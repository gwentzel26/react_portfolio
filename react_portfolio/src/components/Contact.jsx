import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='w-full h-screen bg-gradient-to-b from-black to-blue-800 p-4 text-white'>
        <div className='flex flex-col max-w-screen-lg p-4 mx-auto h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 mt-4'>Contact</p>
                <p className='py-6'>Submit the form below to contact me</p>
            </div>
        <div className='flex justify-center items-center'>
            <form action='https://getform.io/f/443f6a53-cae3-4fcb-9e0b-0c09fc358d71' method='POST' className='flex flex-col w-full md:w-1/2 py-6'>
                <input type="text" name='name' placeholder='Enter your name'
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                />
                <input type="text" name='email' placeholder='Enter your email'
                className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'
                />
                <textarea name='message' placeholder="Type your message" rows={10} className='p-2 my-4  bg-transparent border-2 rounded-md text-white focus:outline-none' ></textarea>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Submit</button>
               
            </form>
        </div>
        </div>

    </div>
  )
}

export default Contact