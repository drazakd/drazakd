import React from 'react'
import Titre from '../roundDesigns/home/Titre'
import Education from './Education'
import Competence from './Competence'

const Resume = () => {
  return (
    <section id='resume'>
        <Titre  title='Mon' subTitle='Parcours'/>
        <Education />
        <Titre title="Mes" subTitle="Compétences" />
        <Competence />

    </section>
  )
}

export default Resume