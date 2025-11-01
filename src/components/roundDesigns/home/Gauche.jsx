// src/components/roundDesigns/home/Gauche.jsx
// Gauche.jsx - Version responsive
import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill } from "react-icons/bs";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiSend } from "react-icons/fi"
import { profile } from '../../../assets'
import CV from "../../../assets/CV_DRAME_ABDOUL_RAZAK_DAOUDA_DDIA.pdf"

const Gauche = () => {
    const [text]=useTypewriter({
        words:["Developpeur Data IA", "Data Scientiste", "Data Analyste"],
        loop: true,
        typeSpeed:30,
        deleteSpeed: 20,
        delay: 2000,
    });
    
  return (
    <div className='w-full lg:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10'>
        <div className='w-full h-48 md:h-64 lg:h-3/5'>
            <img 
                className='w-full h-full object-cover rounded-2xl'
                src={profile} 
                alt='profileimage'
                loading='priority' 
            />
        </div>
        <div className='w-full h-auto lg:h-2/5'>
            <div className='flex flex-col items-center gap-2 py-4 md:py-6 lg:py-10 px-4'>
                <h1 className='text-textColor text-xl md:text-2xl lg:text-4xl font-semibold text-center'>Abdul Razak DRAME</h1>
                <p className='text-sm md:text-base lg:text-base text-designColor tracking-wide text-center'>
                    {text} <Cursor cursorBlinking="false" cursorStyle="" />
                </p>
                <div className='flex justify-center gap-4 mt-2'>
                    <span className='hover:text-designColor duration-300 cursor-pointer text-lg md:text-xl'>
                        <FaGithub />
                    </span>
                    <span className='hover:text-designColor duration-300 cursor-pointer text-lg md:text-xl'>
                        <FaLinkedin />
                    </span>
                    <span className='hover:text-designColor duration-300 cursor-pointer text-lg md:text-xl'>
                        <FaWhatsapp />
                    </span>
                    <span className='hover:text-designColor duration-300 cursor-pointer text-lg md:text-xl'>
                        <FiMail />
                    </span>
                </div>
            </div>
            {/* Boutons */}
            <div className='flex flex-col md:flex-row h-auto md:h-14'>
                <a className='w-full md:w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300 flex justify-center items-center py-3 md:py-0' 
                href={CV} 
                target='_blank' 
                rel='noreferrer'
                >
                    <button className='w-full h-full flex justify-center items-center gap-2 py-2 md:py-0'>
                        Telecharger CV <BsCloudLightningFill /> 
                    </button>
                </a>
                <button className='w-full md:w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300 py-3 md:py-0'>
                    Me contacter <FiSend />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Gauche