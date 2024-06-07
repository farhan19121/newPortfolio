import React from 'react'
import {DiJavascript1,DiReact,DiNodejsSmall,DiHtml5,DiCss3,DiSass,DiBootstrap} from 'react-icons/di'

function About() {
  return (
    <div className='max-w-[1200px] mx-auto mt-24 p-6 grid md:grid-cols-2 gap-8  place-items-center text-left' id="about">
     <div className="p-6 ">
          <h2 className="text-gray-200 text-3xl font-bold md-4">Skills</h2>
          <p className="text-gray-300 mb-4">
          Computer languages: C++ | HTML |python| CSS | Javascript | React |Expressjs| Git
Software Packages | Adobe Illustrator | Adobe Photoshop
Known English (SRW) , Hindi (SRW)
   </p>
          <div className="md:flex flex flex-wrap gap-4 text-4xl justify-center">
                    <DiHtml5 size={40 } className='text-orange-600'/>
                    <DiCss3 size={40 } className='text-blue-600'/>
                    <DiSass size={40 } className='text-pink-600'/>
                    <DiBootstrap size={40 }  className='text-purple-600'/>
                    <DiJavascript1 size={40 } className='text-yellow-500'/>
                    <DiReact size={40 } className='text-blue-500'/>
                    <DiNodejsSmall size={40 } className='text-green-500'/>
          </div>
     </div>

          <div className=" relative group ">
               <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-700 to-orange-900 rounded-lg
                              blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
               <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                    <img src="../assets/project1.png" alt="" className="rounded-lg md:max-w-[360px]" />
               </div>
          </div>
          

          <div className=" relative group ">
               <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-700 to-orange-900 rounded-lg
                              blur opacity-25 group-hover:opacity-100 transition duration-300  "></div>
               <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                    <img src="../assets/project7.png" alt="" className="rounded-lg md:max-w-[450px]" />
               </div>
          </div>
          <div className="p-6">
               <h2 className="text-gray-200 text-3xl font-bold mb-4">Frontend Experience</h2>
               <p className="text-gray-300 mb-4"> Experianced in creating modern,responsive web application using the latest frontend technologies</p>
          </div>
          
      
    </div>
  )
}

export default About
