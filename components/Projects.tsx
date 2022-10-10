import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h4 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-l'>
        Projects
      </h4>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-5 h-screen'>
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCb38x4VIvRIQUFYZ85w2VtqR_Ze9dvWUu11PERRVHbC5AtqsJX101gJG2kH2ocmx4tg&usqp=CAU'
              alt='project img'
            />

            <div className='space-y-10 px-0 md:px-5 max-w-xl'>
              <h4 className='text-2xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case study {i + 1} of {projects.length}:
                </span>
                UPS clone
              </h4>
              <p className='text-sm text-center md:text-left'>
                Netflix app that has a long in and log out authentication with
                google it has a beatuful home screen with all the movies looking
                just like netflix there is also a subscription page where you
                can see your active monthly subscription. we also use stripe
                payments for the monthly netflix payment
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects
// git hard reset test (and head detached)
