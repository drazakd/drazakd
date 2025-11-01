// src/components/roundDesigns/home/SideNav.jsx
import React from 'react'
import SidenavTitre from './SidenavTitre'

const SideNav = () => {
  return (
    <div className='px-7 py-4'>
      <SidenavTitre title="M" subTitle="enu" />
      <ul>
        <li className='sidenavLi border-b-[1px] border-b-zinc-500'>Page Blog</li>
        <li className='sidenavLi border-b-[1px] border-b-zinc-500'>Page Portfolio</li>
        <SidenavTitre title="P" subTitle="rojet" />
      </ul>
      <ul>
        <li className='sidenavLi border-b-[1px] border-b-zinc-500'>Developpement Web</li>
        <li className='sidenavLi border-b-[1px] border-b-zinc-500'>Analyse de donnée</li>
        <li className='sidenavLi border-b-[1px] border-b-zinc-500'>Chatbot</li>
        <li className='sidenavLi border-b-[1px] border-b-zinc-500'>Systeme de recommandation de film</li>
        <li className='sidenavLi border-b-[1px] border-b-zinc-500'>Site Portfolio</li>
        <li className='sidenavLi border-b-[1px] border-b-zinc-500'>Site HORUS IT</li>       
      </ul>
    </div>
  )
}

export default SideNav