import React from 'react'
import{FaGithubSquare,FaInstagram} from 'react-icons/fa'
function Footer() {
  return (
    <div className='max-w-[1200px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
      <div className="space-y-4">
          <h3 className="text-2xl text-gray-200 font-semibold">Farhan Khan</h3>
          <div className="flex flex-row gap-6 text-gray-400 text-4xl">
          <a href="https://github.com/farhan19121"><FaGithubSquare/></a>
          <a href="https://www.instagram.com/farhan_khann_47"> <FaInstagram/></a>
          </div>
      </div>

      <p className="text-gray-400">@2024 Farhan Khan</p>
    </div>
  )
}

export default Footer
