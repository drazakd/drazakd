// src/components/about/MesServices.jsx
import React from 'react'
import { FaAppStoreIos } from 'react-icons/fa';
import { AiTwotoneAppstore } from 'react-icons/ai';
import { SiAntdesign } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import ServicesCard from './ServicesCard'

const MesServices = () => {
  return (
    <div className='grid grid-cols-2'>
        <ServicesCard 
            icons={<BiCodeAlt />} 
            title='Développeur Data IA'
            subTitle="Création de sites web, applications web, models d'IA, Collecte, Analyse et Traitement des données, Integration de models dans application web,... "
        />
        <ServicesCard 
            icons={<SiAntdesign />} 
            title='Data Scientiste'
            subTitle="Création de models IA, Collecte, Analyse et Traitement des données, integration de models IA... "
        />
        <ServicesCard 
            icons={<SiAntdesign />} 
            title='Data Analyste'
            subTitle="Collecte des donnees, Analyse et Traitement des données, Aide a la prise de decision,... "
        />
        <ServicesCard 
            icons={<FaAppStoreIos />} 
            title='Développeur Web et Mobile'
            subTitle="Création de sites web et mobile, applications web et mobile, maintenance des sites, hebergement,... "
        />
        <ServicesCard 
            icons={<FaAppStoreIos />} 
            title='Technicien Support'
            subTitle="Maintenance des ordinateurs, imprimantes, cablage reseau, gestion du systeme informatique et reseau,... "
        />

    </div>
  )
}

export default MesServices