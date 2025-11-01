// src/components/about/Loisirs.jsx
import React from 'react'
import { BsTrophyFill } from 'react-icons/bs';
import { SiAntdesign } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import { IoLogoYoutube } from 'react-icons/io';
import LoisirCard from './LoisirCard'

const Loisirs = () => {
  return (
    <div className='px-0 grid grid-cols-4 pb-10'>
        <LoisirCard icon={<BsTrophyFill />} des="+10 Certificats"/>
        <LoisirCard icon={<SiAntdesign />} des="+20 Projets Terminés"/>
        <LoisirCard icon={<BiCodeAlt />} des="+100 Heures de Coding"/>
        <LoisirCard icon={<IoLogoYoutube />} des="+500 Abonnés"/>
    </div>
  )
}

export default Loisirs