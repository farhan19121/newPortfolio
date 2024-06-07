import React, { useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'

const projects = [
     {
          img:"../assets/project1.png",
          title:"project #1",
          discription: "ui for development using react",
          links:{
               site:"#",
               github:"#"
          }

     },
     {
          img:"../assets/project2.png",
          title:"project #2",
          discription: "ui for development using react",
          links:{
               site:"#",
               github:"#"
          }

     },
     {
          img:"../assets/project3.png",
          title:"project #3",
          discription: "ui for development using react",
          links:{
               site:"#",
               github:"#"
          }

     },
     {
          img:"../assets/project4.png",
          title:"project #4",
          discription: "ui for development using react",
          links:{
               site:"#",
               github:"#"
          }

     },
     {
          img:"../assets/project5.png",
          title:"project #5",
          discription: "ui for development using react",
          links:{
               site:"#",
               github:"#"
          }

     },
     {
          img:"../assets/project6.png",
          title:"project #6",
          discription: "ui for development using react",
          links:{
               site:"#",
               github:"#"
          }

     }
]

function Portfolio() {

     const [currentProject ,setCurrentProject] = useState(0)
  return (
    <div className='h-[90vh] my-6 max-w-[1200px] mx-auto grid grid-cols-8 gap-6' id="portfolio">
      <div className='relative z-10 col-span-3 grid place-items-center grid-cols-1'>
          <p className='text-gray-200 font-bold text-4xl -skew-y-6 '>Select Project</p>
          <img src="../assets/arrow.png" className="absolute w-[50px] top-10 right-12" alt="" />

          <ul className="ml-6 flex flex-col md:flex-col gap-6 flex-wrep justify-center md:gap-1 space-y-2 md:space-y-4 text-2xl">
               {projects.map((project,index)=>(
                    <li key={index} onClick={()=>setCurrentProject(index)}
                    className={`cursor-pointer text-gray-300 ${currentProject===index? 'active-project':''}`}>{project.title}</li>
               ))}
          </ul>
      </div>

      <div className="z-10 glass w-full col-span-5">
          <div className='w-full h-80'>
               <img className="w-full h-full object-cover rounded-lg mb-4" src={projects[currentProject].img} alt="" />
          </div>
          <div className="p-6">
               <p className="text-gray-200 my-4">{projects[currentProject].discription}</p>
               <div className="flex space-x-4 ">
                    <a className="px-4 py-2 bg-slate-600 text-gray-200 hover:bg-slate-700 rounded-lg transition duration-300" href={projects[currentProject].links.site}>view site</a>
                    <a className="px-4 py-2 bg-slate-600 text-gray-200 hover:bg-slate-700 rounded-lg transition duration-300" href={projects[currentProject].links.github}><AiFillGithub size={30}/></a>

               </div>
          </div>
      </div>
    </div>
  )
}

export default Portfolio
