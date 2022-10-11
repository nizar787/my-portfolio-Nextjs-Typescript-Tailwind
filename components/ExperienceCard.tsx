import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[400px] md:w-[600px]  xl:w-[600px] h-[350px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#9e9b9b]/10'>
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
        src=' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-b2B8tGUafEC8dq-g_zkP5TCm2LPBonFow&usqp=CAU'
        alt='experience'
      />
      <div className='px-0 md:px-5'>
        <h4 className='text-xl font-light'>CEO OF NIZAR ENTREPRISE</h4>
        <p className='font-bold text-xl mt-1'>ENTREPRISE</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.iconscout.com/icon/free/png-64/javascript-1-225993.png'
            alt='tech used'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.iconscout.com/icon/free/png-64/java-script-1521495-1288237.png'
            alt='tech used'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.iconscout.com/icon/free/png-64/logo-1889528-1597588.png'
            alt='tech used'
          />
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          started work... -Ended...
        </p>
        <ul className='list-disc space-y-1 ml-5 text-sm'>
          <li>Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points</li>
        </ul>
      </div>
    </article>
  )
}
