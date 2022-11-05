import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocial } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>{pageInfo?.name} - portfolio</title>
      </Head>

      <Header socials={socials} />

      {/* hero */}
      <section id='hero' className='snap-center'>
        <Hero pageInfo={pageInfo} />
      </section>

      {/* about */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      {/*experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      {/* skills  */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>

      {/* projects */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>
      {/* contact me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer '
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-b2B8tGUafEC8dq-g_zkP5TCm2LPBonFow&usqp=CAU'
              alt=' imag icon'
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home

export const getServerSideProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocial()

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // next.js will attempt to re-generate the page
    // when a request comes in
    // at most once every 30s
    // revalidate:10,
  }
}
