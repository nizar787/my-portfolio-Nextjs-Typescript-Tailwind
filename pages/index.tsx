import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'

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

      {/*experience */}

      {/* skills  */}

      {/* projects */}
    </div>
  )
}

export default Home
