// src/components/about/AboutMe.jsx
import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex pb-6'>
        <div className='w-1/2 text-zinc-400 p-6 borderRight flex flex-col py-6'>
            <div className='py-6'>
                <h2 className='font-semibold mb-1 text-lg '>Salut! Je suis Abdul Razak</h2>
                <p className='text-base leading-6'>
                    Je suis un développeur web passionné, Professionnel motivé avec une solide formation en systèmes 
                    électroniques et informatiques, ainsi que des compétences 
                    avancées en data science et gestion de projet. je suis aussi bon en wordpress!

                </p>
            </div>
        </div>
        <div className='w-1/2 p-9'>
            <ul>
                <li className='aboutRightLi'>
                    <span className='aboutRightLiSpan'>Localisation : </span>
                    Côte d'Ivoire
                </li>
                <li className='aboutRightLi'>
                    <span className='aboutRightLiSpan'>Disponibilité : </span>
                    OUI
                </li>
                <li className='aboutRightLi'>
                    <span className='aboutRightLiSpan'>Adresse : </span>
                    Abidjan, Côte d'Ivoire
                </li>
                <li className='aboutRightLi'>
                    <span className='aboutRightLiSpan'>Téléphone : </span>
                    +225 0707007560
                </li>
            </ul>
        </div>
    </div>
  )
}

export default AboutMe