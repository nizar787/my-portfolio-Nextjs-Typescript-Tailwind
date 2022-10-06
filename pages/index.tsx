import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>nizar portfolio</title>
      </Head>

      <Header />

      {/* hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      {/* about */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/*experience */}
      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      {/* skills  */}
      <section id="skills" className="snap-start">
        <Skills/>
      </section>


      {/* projects */}
      <section id="projects" className='snap-start'>
        <Projects/>

        </section>

    </div>
  )
}

export default Home
