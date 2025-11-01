// src/components/about/About.jsx
import React from 'react'
import Titre from '../roundDesigns/home/Titre'
import AboutMe from './AboutMe'
import MesServices from './MesServices'
import Loisirs from './Loisirs'

const About = () => {
  return (
    <section id='about' className='w-full'>
        <Titre title="A Propos De" subTitle="Moi"/>
        <AboutMe />
        <Titre title="Mes" subTitle="Services" />
        <MesServices />
        <Titre title={"Faits"} subTitle="Amusants"/>
        <Loisirs />
    </section>
  )
}

export default About