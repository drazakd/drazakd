// src/components/resume/Education.jsx
import React from 'react'
import TitreResume from './TitreResume'
import { MdWork } from 'react-icons/md'
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from './ResumeCard'

const Education = () => {
  return (
    <div className='w-full grid grid-cols-9 px-6'>
        <div className='col-span-4'>
            <TitreResume title="Expérience" icon={<MdWork />} />
            <ResumeCard 
                badge=""
                title="Responsable informatique et Maintenance"
                subTitle="GROUPE ADAMA SANOGO"
                des="charger de la maintenance des appareils du groupe, de la gestion du systeme informatique et reseau, assistant du comptable, proposition des solutions..."
            />
            <ResumeCard 
                badge="2024"
                title="Responsable informatique"
                subTitle="HORUS IT & KEYABIDJAN"
                des="charger de la creation du site de HORUS IT et KEYABIDJAN, du checkup de l'hebergeur et de la programmation des systemes electroniques"
            />
            <ResumeCard 
                badge="2023 - 2024"
                title="Developper Data IA"
                subTitle="MTN ACADEMY"
                des="Developpement Web et mobile, analyse et traitement des données, creation de models d'intelligence artificielle... "
            />
            <ResumeCard 
                badge="2023"
                title="Gestionnaire de stock"
                subTitle="BonCoin"
                des="Gestion du stock, gestion du personnel et paiement du personnel..."
            />
            <ResumeCard 
                badge="2022  -2023"
                title="Maintenancier Informatique et Réseau"
                subTitle="Ministère d'Etat, Ministère de la Defense"
                des="Maintenance des ordinateurs, maintenance des imprimantes, cablage reseau,..."
            />
        </div>
        <div className='w-full h-full flex justify-center items-center'>
            <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
        </div>
        <div className='col-span-4'>
            <TitreResume title="Formation" icon={<GiGraduateCap />} />
            <ResumeCard 
                badge="2024"
                title="Certificat en Data Science et Machine Learning | MasterClass Python"
                subTitle="Udemy"
                des="Machine learning, Data Science, SQL, Data Analysis"
            />
            <ResumeCard 
                badge="2023 - 2024"
                title="Developper Data IA"
                subTitle="MTN ACADEMY"
                des="Developpement Web et mobile, analyse et traitement des données, creation de models d'intelligence artificielle..."
            />
            <ResumeCard 
                badge="2023"
                title="Certificat Gestion de Projet"
                subTitle="Agence AFD"
                des="Les competences du 21 siecle pour penser un projet de developpement, Suivi et Evaluation d'un projet de developpement, Instruction de projet de développement - Instruction de projet de développement - l'étude de faisabilité et l'évaluation environnementale et sociale,..."
            />
            <ResumeCard 
                badge="2021"
                title="Brevet de Technicien Superieur en Systeme Electronique et Informatique"
                subTitle="CELIA Barry Batesty Treichville"
                des="Les competences du 21 siecle pour penser un projet de developpement, Suivi et Evaluation d'un projet de developpement,3. Instruction de projet de développement - Instruction de projet de développement - l'étude de faisabilité et l'évaluation environnementale et sociale,..."
            />
        </div>
    </div>
  )
}

export default Education