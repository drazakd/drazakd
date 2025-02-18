import React from 'react'
import { workImgFour, workImgOne, workImgThree, workImgTwo } from "../../assets"
import Titre from '../roundDesigns/home/Titre'
import ProjetCard from './ProjetCard'

const Projet = () => {
  return (
    <div>
      <Titre title="Projets" subTitle="Recent" />
      <div className='w-full grid grid-cols-2 gap-10'>
        <div className='px-6'>
          <ProjetCard 
            title="Site de gestion de produit (CRM)"
            category="Site"
            image={workImgOne}
          />
          <ProjetCard 
            title="Dashboard spotify"
            category="Analyse de donnée"
            image={workImgThree}
          />
        </div>
        <div className='px-6'>
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
        </div>
      </div>
    </div>
  )
}

export default Projet