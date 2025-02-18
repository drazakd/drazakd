import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill } from "react-icons/bs";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
// import { SiYoutubemusic } from "react-icons/si";
import { FiMail, FiSend } from "react-icons/fi"
import { profile } from '../../../assets'
import CV from "../../../assets/CV_DRAME_ABDOUL_RAZAK_DAOUDA_DS.pdf"

const Gauche = () => {
    const [text]=useTypewriter({
        words:["Developpeur Data IA", "Data Scientiste", "Data Analyste"],
        loop: true,
        typeSpeed:30,
        deleteSpeed: 20,
        delay: 2000,
    });
  return (
    <div className='w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10'>
        <div className='w-full h-3/5'>
            <img 
                className='w-full h-full object-cover rounded-2xl'
                src={profile} 
                alt='profileimage'
                loading='priority' 
            />
        </div>
        <div className='w-full h-2/5'>
            {/*  grand conteneur */}
            <div className='flex flex-col items-center gap-2 py-10'>
                <h1 className='text-textColor text-4xl font-semibold'>Abdul Razak DRAME</h1>
                <p className='text-base text-designColor tracking-wide'>
                    {text} <Cursor cursorBlinking="false" cursorStyle="" />
                </p>
                <div className='flex justify-center gap-2 mt-2'>
                    <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
                        <FaGithub />
                    </span>
                    <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
                        <FaLinkedin />
                    </span>
                    <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
                        <FaWhatsapp />
                    </span>
                    <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
                        <FiMail />
                    </span>
                </div>
            </div>
            {/* boutons */}
            <div className='flex h-14'>
                <a className='w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300' 
                href={CV} 
                target='_blank' 
                rel='noreferrer'
                >
                    <button className='w-full h-full flex justify-center borderRight items-center gap-2'>
                        Telecharger CV <BsCloudLightningFill /> 
                    </button>
                </a>
                <button className='w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300'>
                    Me contacter <FiSend />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Gauche