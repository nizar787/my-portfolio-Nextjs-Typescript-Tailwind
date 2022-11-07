import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'

type Props = {
  projects: Project[]
}

function Projects({ projects }: Props) {
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

      <div className=' scale-90 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects.map((project, i) => (
          <div
            key={project._id}
            className=' scale-90 w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-5 h-screen'
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt='project img'
            />

            <div className='space-y-10 px-0 md:px-5 max-w-xl'>
              <h4 className='text-2xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case study {i + 1} of {projects.length}:
                </span>{' '}
                {project?.title}
              </h4>

              <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies.map((technology) => (
                  <img
                    className='h-8 w-8'
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt='img tech'
                  />
                ))}

                <SocialIcon
                  key={project._id}
                  url={project.linkToBuild}
                  fgColor='gray'
                  bgColor='transparent'
                />
              </div>

              <p className='text-sm text-center md:text-left'>
                {project?.summary}
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
