import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineColumnHeight,AiOutlineMenu} from 'react-icons/ai'

function Navbar() {

  const [nav , setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='max-w-[1200px] h-24 mx-auto flex justify-between items-center text-lg px-4 md:px-0 '>
      <h1 className="text-gray-200 text-3xl font-bold">Farhan Khan</h1>

      <ul className="hidden text-gray-100 md:flex">
        <li className="p-5"><a href="/about" >About</a></li>
        <li className="p-5"><a href="/about" >Experience</a></li>
        <li className="p-5 rounded-xl bg-primary-color"><a href="/about" >Contact</a></li>
      </ul>

      <div onClick={handleNav} className='block md:hidden z-40'>
        {nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
      </div>

      <div className={nav? "z-40 text-gray-300 fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#171717]"
        :'fixed left-[-100%]' }>
          <h1 className="text-3xl font-bold">Farhan</h1>
        <ul className="p-8 text-2xl">
          <li className="p-5"><a href="/about" >About</a></li>
          <li className="p-5"><a href="/about" >Experience</a></li>
          <li className="p-5 px-4 py-2 rounded-xl bg-green-300"><a href="/about" >Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
