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
            subTitle="Création de sites web, applications web, models d'IA, Collecte, Analyse et Traitement des données,... "
        />
        <ServicesCard 
            icons={<SiAntdesign />} 
            title='Data Scientiste'
            subTitle="Création de sites web, applications web, models d'IA, Collecte, Analyse et Traitement des données,... "
        />
        <ServicesCard 
            icons={<AiTwotoneAppstore />} 
            title='Data Analyste'
            subTitle="Création de sites web, applications web, models d'IA, Collecte, Analyse et Traitement des données,... "
        />
        <ServicesCard 
            icons={<FaAppStoreIos />} 
            title='Développeur Web et Mobile'
            subTitle="Création de sites web, applications web, models d'IA, Collecte, Analyse et Traitement des données,... "
        />
        <ServicesCard 
            icons={<FaAppStoreIos />} 
            title='Technicien Support'
            subTitle="Création de sites web, applications web, models d'IA, Collecte, Analyse et Traitement des données,... "
        />

    </div>
  )
}

export default MesServices