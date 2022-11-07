import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='  flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[400px] md:w-[600px]  xl:w-[600px] h-[350px] snap-center bg-[#292929] p-4 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#9e9b9b]/10'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[80px] xl:h-[80px]
        object-cover object-center'
        src={urlFor(experience?.companyImage).url()}
        alt='exp image'
      />
      <div className='px-12 md:px-4'>
        <h4 className='text-xl font-light'>CEO OF NIZAR ENTREPRISE</h4>
        <p className=' scale-90  font-bold text-xl mt-1'>ENTREPRISE</p>
        <div className='  flex space-x-2 my-2'>
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className=' scale-90 h-10 w-10 rounded-full'
              src={urlFor(technology.image).url()}
              alt='tech used'
            />
          ))}
        </div>
        <p className='scale-90 uppercase py-3 text-gray-300'>
          {new Date(experience.dateStarted).toDateString()} -{' '}
          {experience.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className=' scale-90 list-disc space-y-1 ml-1 text-sm'>
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
