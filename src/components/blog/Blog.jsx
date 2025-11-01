// src/components/blog/Blog.jsx
import React from 'react'
import Titre from '../roundDesigns/home/Titre'
import BlogCard from './BlogCard'
import { workImgFour, workImgOne, workImgThree, workImgTwo } from '../../assets'

const Blog = () => {
  return (
    <div>
      <Titre title="Derniers" subTitle="Posts" />
      <div className="grid grid-cols-2 gap-10">
        <div className='px-6'>
          <BlogCard 
            image={workImgOne}
            title="05 Novembre 2024"
            subTitle="Creation d'un CRM pour la gestion des produits"
            category="Gestion"
          />
          <BlogCard 
            image={workImgTwo}
            title="05 Novembre 2024"
            subTitle="Creation d'un CRM pour la gestion des ventes"
            category="Gestion"
          />
        </div>
        <div className='px-6'>
          <BlogCard 
            image={workImgThree}
            title="05 Novembre 2024"
            subTitle="Analyse des musiques Spotify"
            category="Analyse"
          />
          <BlogCard 
            image={workImgFour}
            title="05 Novembre 2024"
            subTitle="Analyse de donnée RH"
            category="Analyse"
          />
        </div>
      </div>
    </div>
  )
}

export default Blog