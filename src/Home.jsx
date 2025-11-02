// Home.jsx - Version corrigée
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork, MdOutlineClose } from "react-icons/md";
import { SiGooglechat } from "react-icons/si";
import { BsTelephonePlusFill } from "react-icons/bs";

// Importation des composants personnalisés
import Gauche from './components/roundDesigns/home/Gauche';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Projet from './components/projet/Projet';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import SideNav from "./components/roundDesigns/home/SideNav";

const Home = () => {
  const ref = useRef();
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projet, setProjet] = useState(false);
  const [blog, setBlog] = useState(false);
  const [contact, setContact] = useState(false);
  const [sidenav, setSidenav] = useState(false);

  // Fonction pour désactiver les autres sections
  const setOthersFalse = () => {
    setAbout(false);
    setResume(false);
    setProjet(false);
    setBlog(false);
    setContact(false);
  };

  // Fonction pour changer de section
  const handleSectionChange = (section) => {
    setOthersFalse();
    switch(section) {
      case 'about':
        setAbout(true);
        break;
      case 'resume':
        setResume(true);
        break;
      case 'projet':
        setProjet(true);
        break;
      case 'blog':
        setBlog(true);
        break;
      case 'contact':
        setContact(true);
        break;
      default:
        setAbout(true);
    }
    setSidenav(false); // Fermer le sidenav sur mobile après sélection
  };

  {/* Gestion du clic en dehors du sidenav pour le fermer */}
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidenav && ref.current && !ref.current.contains(e.target)) {
        setSidenav(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [sidenav]);

  return (
    // Conteneur principal
    <div className='w-full lg:w-[85%] h-full lg:h-[85%] bg-transparent text-white z-50 flex flex-col lg:flex-row items-start justify-between'>
        {/* Navigation latérale - Cachée sur mobile, visible sur desktop */}
        <div className='hidden lg:flex w-16 h-96 bg-transparent flex-col gap-4'>
          {/* Bouton menu hamburger */}
          <div className='w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group'>
            <div 
              onClick={(e) => {
                e.stopPropagation();
                setSidenav(true);
              }} 
              className='flex flex-col gap-1.5 overflow-hidden'
            >
              <span className='w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor'></span>
              <span className='w-8 h-[2px] bg-textColor inline-block group-hover:bg-designColor duration-300'></span>
              <span className='w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor'></span>
            </div>
          </div>

          {/* Navigation par icônes - Version desktop */}
          <div className='w-full h-80 bg-bodyColor rounded-3xl py-6 flex flex-col items-center justify-between'>
            <span 
              onClick={() => handleSectionChange('about')}
              className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'
            >
              <FaUser />
              <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Apropos</span>
            </span>

            <span 
              onClick={() => handleSectionChange('resume')}
              className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'
            >
              <IoIosPaper />
              <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Compétences</span>
            </span>

            <span 
              onClick={() => handleSectionChange('projet')}
              className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'
            >
              <MdWork />
              <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Projets</span>
            </span>

            <span 
              onClick={() => handleSectionChange('blog')}
              className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'
            >
              <SiGooglechat />
              <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Blog</span>
            </span>

            <span 
              onClick={() => handleSectionChange('contact')}
              className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'
            >
              <FaEnvelope />
              <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Contact</span>
            </span>

            <span className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'>
              <BsTelephonePlusFill />
              <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Appel</span>
            </span>
          </div>
        </div>

        {/* SideNav Desktop - Placée en dehors de la navigation latérale */}
        {sidenav && (
          <div className='hidden lg:block w-full h-screen fixed top-0 left-0 z-[9999]'>
            <div className='w-96 h-full relative'>
              <motion.div 
                ref={ref}
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='w-full h-full bg-bodyColor overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]'
              >
                <SideNav />
                {/* Bouton de fermeture */}
                <span 
                  onClick={() => setSidenav(false)} 
                  className='absolute top-4 right-4 w-10 h-10 bg-bodyColor text-xl text-textColor hover:text-designColor duration-300 cursor-pointer flex items-center justify-center rounded-full border border-zinc-700'
                >
                  <MdOutlineClose />
                </span>
              </motion.div>
            </div>
          </div>
        )}

        {/* Navigation mobile - Seulement visible sur mobile */}
        <div className='lg:hidden w-full h-16 bg-bodyColor rounded-2xl mb-4 flex items-center justify-between px-4'>
          {/* Menu hamburger mobile */}
          <div 
            onClick={(e) => {
              e.stopPropagation();
              setSidenav(true);
            }} 
            className='flex flex-col gap-1 cursor-pointer'
          >
            <span className='w-6 h-[2px] bg-textColor'></span>
            <span className='w-6 h-[2px] bg-textColor'></span>
            <span className='w-6 h-[2px] bg-textColor'></span>
          </div>

          {/* Titre de la section active */}
          <div className='text-textColor text-sm'>
            {about && "À Propos"}
            {resume && "Compétences"}
            {projet && "Projets"}
            {blog && "Blog"}
            {contact && "Contact"}
          </div>
        </div>

        {/* SideNav Mobile */}
        {sidenav && (
          <div className='lg:hidden fixed inset-0 z-[9999]'>
            {/* Overlay sombre */}
            <div 
              className='absolute inset-0 bg-black bg-opacity-70'
              onClick={() => setSidenav(false)}
            />
            
            {/* Panneau de navigation */}
            <motion.div
              ref={ref}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='absolute left-0 top-0 h-full w-80 bg-bodyColor overflow-y-auto'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='p-6'>
                <h2 className='text-xl font-bold text-designColor mb-6'>Navigation</h2>
                <ul className='space-y-4'>
                  <li 
                    onClick={() => handleSectionChange('about')} 
                    className='text-textColor hover:text-designColor cursor-pointer py-2 border-b border-zinc-700 flex items-center gap-3'
                  >
                    <FaUser className='text-lg' /> 
                    <span>À Propos</span>
                  </li>
                  <li 
                    onClick={() => handleSectionChange('resume')} 
                    className='text-textColor hover:text-designColor cursor-pointer py-2 border-b border-zinc-700 flex items-center gap-3'
                  >
                    <IoIosPaper className='text-lg' /> 
                    <span>Compétences</span>
                  </li>
                  <li 
                    onClick={() => handleSectionChange('projet')} 
                    className='text-textColor hover:text-designColor cursor-pointer py-2 border-b border-zinc-700 flex items-center gap-3'
                  >
                    <MdWork className='text-lg' /> 
                    <span>Projets</span>
                  </li>
                  <li 
                    onClick={() => handleSectionChange('blog')} 
                    className='text-textColor hover:text-designColor cursor-pointer py-2 border-b border-zinc-700 flex items-center gap-3'
                  >
                    <SiGooglechat className='text-lg' /> 
                    <span>Blog</span>
                  </li>
                  <li 
                    onClick={() => handleSectionChange('contact')} 
                    className='text-textColor hover:text-designColor cursor-pointer py-2 border-b border-zinc-700 flex items-center gap-3'
                  >
                    <FaEnvelope className='text-lg' /> 
                    <span>Contact</span>
                  </li>
                </ul>
              </div>

              <span 
                onClick={() => setSidenav(false)} 
                className='absolute top-4 right-4 w-10 h-10 bg-bodyColor text-xl text-textColor hover:text-designColor duration-300 cursor-pointer flex items-center justify-center rounded-full'
              >
                <MdOutlineClose />
              </span>
            </motion.div>
          </div>
        )}
        
        {/* Contenu principal */}
        <div className='w-full lg:w-[94%] h-full bg-transparent flex flex-col lg:flex-row items-center gap-4 lg:gap-0'>
            <Gauche />
            <div className='w-full lg:w-8/12 h-full lg:h-[95%] bg-bodyColor rounded-2xl lg:rounded-none mt-4 lg:mt-0'>
              <div className='w-full h-full lg:h-[96%] overflow-y-auto scrollbar-thin scrollbar-thumb-[#646464] p-4 lg:p-0'>
                {about && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
                    <About />
                  </motion.div>
                )}
                {resume && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
                    <Resume />
                  </motion.div>
                )}
                {projet && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
                    <Projet />
                  </motion.div>
                )}
                {blog && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
                    <Blog />
                  </motion.div>
                )}
                {contact && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
                    <Contact />
                  </motion.div>
                )}
              </div>
            </div>
        </div>
    </div>
  );
};

export default Home;