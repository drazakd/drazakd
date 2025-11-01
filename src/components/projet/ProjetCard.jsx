// src/components/projet/ProjetCard.jsx
import React from 'react'

const ProjetCard = ({image, title, category, link }) => {
  return (
    <a 
      href={link} // ajouter un lien cliquable
      target="_blank" // ouvrir dans un nouvel onglet
      rel="noopener noreferrer" // ajouter rel pour sécurité
      className="w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800 hover:scale-[1.02] transition-transform duration-300" // ajuster l'effet de survol
    >
      <div className='w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800'>
        <div className='w-full h-full mb-3 overflow-hidden relative cursor-pointer group'>
          <img src={image} alt="CarteImage" />
          <div className='w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-20 bg-gradient-to-t from-green-600 via-green-600 to-green-200 transition-opacity duration-300'></div>
        </div>    
        <h3 className='font-titleFont text-lg font-semibold text-[#ccc]'>
          {title}
        </h3>
        <p className='text-base text-gray-400 -mt-1'>{category}</p> 
      </div>
    </a>
  )
}

export default ProjetCard