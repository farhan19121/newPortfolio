import React from 'react'
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai'

function Contact() {
  return (
    <div className='px-6 max-w-[1200px] mt-24 mx-auto grid md:grid-cols-2 place-items-center' id='contact'>
      <div className='text-gray-300 my-3 p-2'>
          <h3 className='text-4xl font-semibold md-5'>Lets <span>connect</span> </h3>
          <p className="text-justify leading-7">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis odio, ratione magni architecto perspiciatis, voluptates provident soluta officia velit quis mollitia eveniet maxime sapiente at laboriosam ipsa commodi asperiores.
          </p>

          <div className="flex mt-10 item-center gap-7">
               <div className='bg-[#171717]/40 p-5 rounded-lg'>
                    <h3 className='text2-xl md:text-4xl font-semibold text-gray-200'>10 <span>+</span></h3>
                    <p className='text-xs md:text-base text-gray-200'><span>Projects</span></p>
               </div>
      
               <div className='bg-[#171717]/40 p-5 rounded-lg'>
                    <h3 className='text2-xl md:text-4xl font-semibold text-gray-200'>2 <span>+</span></h3>
                    <p className='text-xs md:text-base text-gray-200'><span>years experiance</span></p>
               </div>
          
               <div className='bg-[#171717]/40 p-5 rounded-lg'>
                    <h3 className='text2-xl md:text-4xl font-semibold text-gray-200'>8 <span>+</span></h3>
                    <p className='text-xs md:text-base text-gray-200'><span>clienst</span></p>
               </div>
          </div>

      </div>

      <form action="https://formspree.io/f/mzbnqaar" method='POST' className="max-w-6px p-5 md:p-12" id="form">
          <input
               type="name"
               id="name"
               placeholder='Your name...'
               name='name'
               className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
          />
          <input
               type="email"
               id="email"
               placeholder='Your email...'
               name='email'
               className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
          />
          <textarea
               type="textarea"
               id="textarea"
               placeholder='Your massage...'
               cols="30"
               rows="4"
               className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
          />

          <button type='submit' className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'>
               Send massage
          </button>
      </form>
      

    </div>
  )
}

export default Contact
