// src/components/projet/Projet.jsx
// Projet.jsx - Version responsive
import React from 'react'
import { workImgFour, workImgOne, workImgThree, workImgTwo, horusit, keyabidjan } from "../../assets"
import Titre from '../roundDesigns/home/Titre'
import ProjetCard from './ProjetCard'

const Projet = () => {
  return (
    <div className='px-2 md:px-0'>
      <Titre title="Projets" subTitle="Recent" />
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-2 md:px-6'>
        <div>
          <ProjetCard 
            title="horusit.com"
            category="Site"
            image={horusit}
            link="https://horusit.com"
          />
          <ProjetCard 
            title="keyabidjan.com"
            category="Site"
            image={keyabidjan}
            link="https://keyabidjan.com"
          />
          <ProjetCard 
            title="Site de gestion de produit (CRM)"
            category="Site"
            image={workImgOne}
          />
        </div>
        <div>
          <ProjetCard 
            title="Système de gestion de vente, et de client avec prediction des ventes"
            category="Site"
            image={workImgTwo}
          />
          <ProjetCard 
            title="Dashboard RH"
            category="Analyse de donnée"
            image={workImgFour}
          />
          <ProjetCard 
            title="Dashboard spotify"
            category="Analyse de donnée"
            image={workImgThree}
          />
        </div>
      </div>
    </div>
  )
}

export default Projet