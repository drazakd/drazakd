// src/components/resume/Competence.jsx
// Competence.jsx - Version responsive
import React from 'react'
import { SiArtstation } from 'react-icons/si'
import TitreResume from './TitreResume'
import { FaFlag } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { LuBrainCircuit } from "react-icons/lu";
import { GiCheckMark } from "react-icons/gi";

const Competence = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-9 px-4 md:px-6 gap-6 md:gap-0'>

        {/* Design */}
        <div className='md:col-span-4'>
            <TitreResume title="Design" icon={<SiArtstation />} />
            {/* Les compétences restent identiques mais seront responsive via le grid */}
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>Developper Web</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[95%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>
            </div>

            {/* developpement mobile */}
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>Developper mobile</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[79%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>
            </div>

            {/* web design */}
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>Web design</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[80%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>
            </div>
        </div>
        
        <div className='hidden md:flex w-full h-full justify-center items-center'>
            <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
        </div>
        
        {/* Langues */}
        <div className='md:col-span-4'>
            {/* ... langues */}
            <TitreResume title="Langues" icon={<FaFlag />} />
            {/* Français */}
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>Français</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[100%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>
            </div>

            {/* Anglais */}
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>Anglais</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[48%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>
            </div>
        </div>
        
        {/* Codage langage */}
        <div className='md:col-span-4 py-5'>
            <TitreResume title="Codage" icon={<BiCodeAlt />} />
            {/* Python */}
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>Python</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[85%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>
            </div>
            {/* Django */}
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>Django</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[88%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>
            </div>
            {/* Flask */}
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>Flask</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[88%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>
            </div>
            {/* Wordpress */}
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>Wordpress</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[95%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>
            </div>
            {/* ReactJS */}
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>Reactjs</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[85%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>
            </div>
            {/* NodeJS */}
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>Nodejs</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[80%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>
            </div>
        </div>

        {/* Séparateur vertical */}
        <div className='hidden md:flex w-full h-full justify-center items-center'>
            <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
        </div>

        {/* Compétences supplémentaires */}
        <div className='md:col-span-4 py-5'>
            <TitreResume title="Compétences" icon={<LuBrainCircuit />} />
            {/* Machine Learning */}
            <div className='py-9'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base flex gap-4 text-textColor -mb-1.5'>
                        <span className='text-designColor text-2xl'><GiCheckMark /></span>
                        Machine Learning
                    </p>   
                </div>
            </div>
            {/* Deep Learning */}
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base flex gap-4 text-textColor -mb-1.5'>
                        <span className='text-designColor text-2xl'><GiCheckMark /></span>
                        Deep Learning
                    </p>

                </div>
            </div>
            {/* PowerBI */}
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base flex gap-4 text-textColor -mb-1.5'>
                        <span className='text-designColor text-2xl'><GiCheckMark /></span>
                        PowerBI
                    </p>
                </div>
            </div>
            {/* PackOFFICE */}
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base flex gap-4 text-textColor -mb-1.5'>
                        <span className='text-designColor text-2xl'><GiCheckMark /></span>
                        Pack Microsoft Office
                    </p>
                </div>
            </div>
            {/* Computer Vision */}
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base flex gap-4 text-textColor -mb-1.5'>
                        <span className='text-designColor text-2xl'><GiCheckMark /></span>
                        Computer Vision
                    </p>
                </div>
            </div>
            {/* SQL */}
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base flex gap-4 text-textColor -mb-1.5'>
                        <span className='text-designColor text-2xl'><GiCheckMark /></span>
                        SQL
                    </p>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Competence