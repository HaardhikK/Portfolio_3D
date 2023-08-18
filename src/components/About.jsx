import React from 'react'
import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard =({index,title,icon})=>{
  return (
    <Tilt
    className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right","spring",0.5*index,0.75)} 
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div 
      options={{ max:45, scale:1, speed:450}}
      className="bg-[#111111] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />    
        <h3 className="text-[#ede1be] text-[20px] font-bold text-center">{title}</h3>
      </div>
      </motion.div>
       </Tilt>
  )
}

const About = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
      <p className="sm:text-[22px] text-[14px] text-[#706C61] uppercase tracking-wider">Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>

     </motion.div>
     <motion.p variants={fadeIn("","",0.1,1)}
     className="mt-4 text-[#706C61] text-[20px] max-w-4xl leading-[30px]"
     >
        I'm a skilled fullstack and Ui/Ux developer with experience in MERN stack and
        Figma, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients and teammates to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together and bring new ideas to life!
     </motion.p>


     <div className="mt-20 flex flex-wrap gap-10 ">
       {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service} />
       ))}
     </div>
    </>
  )
}

export default SectionWrapper(About,"about")