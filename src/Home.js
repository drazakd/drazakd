// import React, { useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FaUser, FaEnvelope } from "react-icons/fa";
// import { IoIosPaper } from "react-icons/io";
// import { MdWork, MdOutlineClose } from "react-icons/md";
// import { SiGooglechat } from "react-icons/si";
// import { BsTelephonePlusFill } from "react-icons/bs";

// // Importation des composants personnalisés
// import Gauche from './components/roundDesigns/home/Gauche';
// import About from './components/about/About';
// import Resume from './components/resume/Resume';
// import Projet from './components/projet/Projet';
// import Blog from './components/blog/Blog';
// import Contact from './components/contact/Contact';
// import SideNav from "./components/roundDesigns/home/SideNav";

// // Importation de React Router DOM pour gérer la navigation entre les pages
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// const Home = () => {
//   const ref = useRef(); // Référence pour détecter les clics hors du sideNav
//   const [sidenav, setSidenav] = React.useState(false); // État pour gérer l'ouverture/fermeture du sideNav

//   // Hook useEffect pour fermer le sideNav si un clic est détecté à l'extérieur
//   useEffect(() => {
//     document.body.addEventListener("click", (e) => {
//       if (!e.target.contains(ref.current)) { // Si le clic est hors du sideNav
//         setSidenav(false); // Ferme le sideNav
//       }
//     });
//   }, []); // Le tableau vide [] assure que cet effet se déclenche seulement au montage du composant

//   return (
//     <Router>
//       <div className='w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between'>
        
//         {/* Section pour afficher le bouton de navigation (sideNav) */}
//         <div className='w-16 h-96 bg-transparent flex flex-col gap-4'>
          
//           {/* Bouton d'ouverture du sideNav */}
//           <div className='w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group'>
//             <div onClick={() => setSidenav(true)} className='flex flex-col gap-1.5 overflow-hidden'>
//               <span className='w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor'></span>
//               <span className='w-8 h-[2px] bg-textColor inline-block group-hover:bg-designColor duration-300'></span>
//               <span className='w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor'></span>
//             </div>
//           </div>

//           {/* Affichage du SideNav quand l'état 'sidenav' est vrai */}
//           {sidenav && (
//             <div className='w-full h-screen fixed top-0 left-0 bg-opacity-50 z-50'>
//               <div className='w-96 h-full relative'>
//                 <motion.div
//                   ref={ref} // Attachement de la référence ici
//                   initial={{ x: -500, opacity: 0 }} // Position initiale du sideNav
//                   animate={{ x: 0, opacity: 1 }} // Animation d'entrée
//                   transition={{ duration: 0.5 }} // Durée de l'animation
//                   className='w-full h-full bg-bodyColor overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]'
//                 >
//                   <SideNav /> {/* Affichage du contenu du SideNav */}
//                   <span
//                     onClick={() => setSidenav(false)} // Fonction pour fermer le sideNav
//                     className='absolute top-0 -right-16 w-12 bg-bodyColor text-2xl text-textColor hover:text-designColor duration-300 cursor-pointer flex items-center justify-center z-50'
//                   >
//                     <MdOutlineClose /> {/* Icône de fermeture */}
//                   </span>
//                 </motion.div>
//               </div>
//             </div>
//           )}

//           {/* Navigation verticale avec des icônes */}
//           <div className='w-full h-80 bg-bodyColor rounded-3xl py-6 flex flex-col items-center justify-between'>
//             {/* Lien vers la page "Apropos" */}
//             <Link to="/" className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'>
//               <FaUser />
//               <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Apropos</span>
//             </Link>

//             {/* Autres liens du menu */}
//             <Link to="/resume" className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'>
//               <IoIosPaper />
//               <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Compétences</span>
//             </Link>

//             <Link to="/projet" className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'>
//               <MdWork />
//               <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Projets</span>
//             </Link>

//             <Link to="/blog" className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'>
//               <SiGooglechat />
//               <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Blog</span>
//             </Link>

//             <Link to="/contact" className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'>
//               <FaEnvelope />
//               <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Contact</span>
//             </Link>

//             <Link to="/call" className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'>
//               <BsTelephonePlusFill />
//               <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Appel</span>
//             </Link>
//           </div>
//         </div>

//         {/* Section principale où s'affichent les autres composants */}
//         <div className='w-[94%] h-full bg-transparent flex items-center'>
//           <Gauche /> {/* Composant Gauche, probablement pour la navigation ou une autre section */}
//           <div className='w-8/12 h-[95%] bg-bodyColor'>
//             <div className='w-full h-[96%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]'>

//               {/* Routes pour afficher les différentes sections */}
//               <Routes>
//                 <Route path="/" element={<About />} /> {/* Page à propos */}
//                 <Route path="/resume" element={<Resume />} /> {/* Page des compétences */}
//                 <Route path="/projet" element={<Projet />} /> {/* Page des projets */}
//                 <Route path="/blog" element={<Blog />} /> {/* Page des blogs */}
//                 <Route path="/contact" element={<Contact />} /> {/* Page de contact */}
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default Home;



// methode 2 avec useState

// Importation des modules nécessaires depuis React et Framer Motion pour l'animation, ainsi que des icônes spécifiques
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

// Déclaration du composant Home
const Home = () => {
  const ref = useRef(); // Référence pour détecter les clics hors du sideNav
  // États pour gérer la visibilité de chaque section du site
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projet, setProjet] = useState(false);
  const [blog, setBlog] = useState(false);
  const [contact, setContact] = useState(false);
  const [sidenav, setSidenav] = useState(false);

  // Utilisation de useEffect pour fermer le sideNav si un clic est détecté à l'extérieur
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) { // Si le clic est hors sideNav
        setSidenav(false); // Fermeture du sideNav
      }
    });
  }, []); // Le tableau vide [] assure que cet effet se déclenche seulement au montage du composant

  return (
    // Conteneur principal du composant avec des styles spécifiques pour largeur, hauteur et position
    <div className='w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between'>
        <div className='w-16 h-96 bg-transparent flex flex-col gap-4'>
          {/* Bouton d'ouverture du sideNav */}
          <div className='w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group'>
            <div onClick={() => setSidenav(true)} className='flex flex-col gap-1.5 overflow-hidden'>
              {/* Effet d'animation pour l'icône d'ouverture */}
              <span className='w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor'></span>
              <span className='w-8 h-[2px] bg-textColor inline-block group-hover:bg-designColor duration-300'></span>
              <span className='w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor'></span>
            </div>
          </div>

          {/* Section des icônes pour la navigation */}
          {
            sidenav && ( // Affichage du sideNav si sidenav est true
            <div className='w-full h-screen fixed top-0 left-0 bg-opacity-50 z-50'>
              <div className='w-96 h-full relative'>
                <motion.div 
                  ref={ref}
                  initial={{ x: -500, opacity: 0 }} // Animation de départ hors écran à gauche
                  animate={{ x: 0, opacity: 1 }} // Animation d'arrivée sur l'écran
                  transition={{ duration: 0.5 }}
                  className='w-full h-full bg-bodyColor overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]'>
                  <SideNav />
                  {/* Bouton de fermeture du sideNav */}
                  <span onClick={() => setSidenav(false)} className='absolute top-0 -right-16 w-12 bg-bodyColor text-2xl text-textColor hover:text-designColor duration-300 cursor-pointer flex items-center justify-center z-50'>
                    <MdOutlineClose />
                  </span>
                </motion.div>
              </div>
            </div>
          )}

          {/* Section des icônes pour naviguer entre les différentes pages */}
          <div className='w-full h-80 bg-bodyColor rounded-3xl py-6 flex flex-col items-center justify-between'>
            <span 
              onClick={() =>
                setAbout(true) & setResume(false) & setProjet(false) & setBlog(false) & setContact(false)
              } 
              className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'
              ><FaUser />
              <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Apropos</span>
            </span>

            {/* Autres icônes de navigation avec effet similaire */}
            <span 
              onClick={() =>
                setAbout(false) & setResume(true) & setProjet(false) & setBlog(false) & setContact(false)
              }
              className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'
            ><IoIosPaper />
              <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Compétences</span>
            </span>
            <span 
              onClick={() =>
                setAbout(false) & setResume(false) & setProjet(true) & setBlog(false) & setContact(false)
              }
              className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'><MdWork />
              <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Projets</span>
            </span>

            <span 
              onClick={() =>
                setAbout(false) & setResume(false) & setProjet(false) & setBlog(true) & setContact(false)
              }
              className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'><SiGooglechat />
              <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Blog</span>
            </span>
            <span 
              onClick={() =>
                setAbout(false) & setResume(false) & setProjet(false) & setBlog(false) & setContact(true)
              }
              className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'><FaEnvelope />
              <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Contact</span>
            </span>
            <span className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'><BsTelephonePlusFill />
              <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Appel</span>
            </span>
          </div>
        </div>
        
        {/* Conteneur principal pour afficher les pages */}
        <div className='w-[94%] h-full bg-transparent flex items-center'>
            <Gauche />
            <div className='w-8/12 h-[95%] bg-bodyColor'>
              <div className='w-full h-[96%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]'>

                {/* Condition pour afficher la section About */}
                {about && (
                  <motion.div 
                    initial={{opacity:0}} 
                    animate={{opacity:1}} 
                    transition={{duration:0.5}}
                  >
                    <About />
                  </motion.div>
                )}
                
                {/* Condition pour afficher la section Resume */}
                {resume && (
                  <motion.div 
                    initial={{opacity:0}} 
                    animate={{opacity:1}} 
                    transition={{duration:0.5}}
                  >
                    <Resume />
                  </motion.div>
                )}

                {/* Condition pour afficher la section Projet */}
                {projet && (
                  <motion.div 
                    initial={{opacity:0}} 
                    animate={{opacity:1}} 
                    transition={{duration:0.5}}
                  >
                    <Projet />
                  </motion.div>
                )}

                {/* Condition pour afficher la section Blog */}
                {blog && (
                  <motion.div 
                    initial={{opacity:0}} 
                    animate={{opacity:1}} 
                    transition={{duration:0.5}}
                  >
                    <Blog />
                  </motion.div>
                )}

                {/* Condition pour afficher la section Contact */}
                {contact && (
                  <motion.div 
                    initial={{opacity:0}} 
                    animate={{opacity:1}} 
                    transition={{duration:0.5}}
                  >
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
