import React from 'react'

import { AiFillLinkedin,AiFillGithub,AiFillInstagram } from 'react-icons/ai'
import {TypeAnimation} from "react-type-animation"
import {DiJavascript1,DiReact,DiNodejsSmall,DiHtml5,DiCss3,DiSass,DiBootstrap} from 'react-icons/di'

function Hero() {
  return (
    <div className='max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0'>
     <div className="grid grid-cols-2 md:col-span-5 p-8 glass">
          <img className="w-[800px]" src="../assets/ppic.png" alt="" />
          <div className="my-auto ml-8 flex-col text-gray-200">
               <p className=" text-xl md:text-4xl font-bold">Hi I am Farhan khan <br />
               <TypeAnimation 
                    sequence={["frontend Dev",1000,"backend Dev",1000, "webdesigner",1000]}
                    wrapper='span'
                    speed="50"
                    repeat={Infinity}
                    />
               </p>
               <p className='text-sm md:text-3xl font-semibold text-gray-400'> +5 years of experiance</p>
               <a href="../assets/farhan_res.docx" download><button className='mt-4 px-4 text-lg font-bold text-white bg-primary-color rounded-xl'> Download CV</button></a>
          </div>
     </div>

     <div className="grid md:col-span-3 gap-6">
          <div className="text-5xl p-12 glass">
               <p className="text-gray-200 font-bold mb-4 text-center">My Tech Stack</p>
               <div className="grid grid-cols-4 gap-4">
                    <DiHtml5 size={50 } className='text-orange-600'/>
                    <DiCss3 size={50 } className='text-blue-600'/>
                    <DiSass size={50 } className='text-pink-600'/>
                    <DiBootstrap size={50 }  className='text-purple-600'/>
                    <DiJavascript1 size={50 } className='text-yellow-500'/>
                    <DiReact size={50 } className='text-blue-500'/>
                    <DiNodejsSmall size={50 } className='text-green-500'/>
               </div>
               
          </div>

          <div className="flex text-6xl text-gray-600 gap-4 justify-center items-center glass">
                    <a href="https://github.com/farhan19121"><AiFillGithub/></a>
                    <a href="https://www.linkedin.com/in/farhan-khan-4bba99273"><AiFillLinkedin/></a>
                    <a href="https://www.instagram.com/farhan_khann_47"><AiFillInstagram/></a>
               </div>
     </div>
      
    </div>
  )
}

export default Hero
