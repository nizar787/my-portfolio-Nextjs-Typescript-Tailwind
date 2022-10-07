import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,

          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-b2B8tGUafEC8dq-g_zkP5TCm2LPBonFow&usqp=CAU'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 
        xl:w-[300px] xl:h-[330px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{' '}
          <span className='underline  decoration-[#F7AB0A]/50'>little</span>{' '}
          background
        </h4>
        <p className='text-base'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis eum
          mollitia qui magnam neque corrupti alias quasi libero nesciunt atque
          voluptates molestias, sequi hic eligendi labore illo quidem doloribus
          praesentium! Commodi dolorum repudiandae quo non iste nihil placeat,
          repellendus ad modi, ipsa autem laboriosam quas enim iusto a.
        </p>
      </div>
    </motion.div>
  )
}

export default About
