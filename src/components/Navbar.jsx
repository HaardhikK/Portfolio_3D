import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo,menu,close} from '../assets'
import {haardhiklogo} from "../assets"

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-r from-[#EEE2DC] to-[#333333]`}
    >
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link
      to="/"
      className="flex items-center gap-2"
      onClick={()=>{
        setActive("")
        window.scrollTo(0,0)
      }}
      >
    <img src={haardhiklogo} alt='logo' className='w-10 h-10 object-contain'  />
    <p className="text-black text-[22px] font-bold cursor-pointer flex"> Haardhik &nbsp;<span className="sm:block hidden flex">| Fullstack Dev</span></p>
      </Link>
      <ul className="list-none hidden sm:flex flex-row gap-10">
         {navLinks.map((Link)=>(
          <li
          key={Link.id}
          className={`${
            active=== Link.title
            ?"text-white"
            :"text-secondary"
          } hover:text-white text-[20px] font-medium cursor-pointer`}
          onClick={()=>setActive(Link.title)} >
            <a href={`#${Link.id}`}> {Link.title} </a>
          </li>
         ))}
      </ul>





      <div className="sm:hidden flex xlex-1 justify-end items-center">
      <img
      src={toggle? close:menu}
      alt="menu"
      className="w-[28px] h-[28px] object-contain cursor-pointer"
      onClick={()=> setToggle(!toggle)}
      />
      

      <div className={`${!toggle ? 'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
      <ul className="list-none flex justify-end items-start flex-col gap-4">
         {navLinks.map((Link)=>(
          <li
          key={Link.id}
          className={`${
            active=== Link.title
            ?"text-white"
            :"text-secondary"
          } font-poppins font-medium cursor-pointer text-[20px]`}
          onClick={()=>{
            setToggle(!toggle)
            setActive(Link.title)}} >
            <a href={`#${Link.id}`}> {Link.title} </a>
          </li>
         ))}
      </ul>
      </div>

      </div>

    </div>
    </nav>
  )
}

export default Navbar