import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          i have got just what you need.{' '}
          <span className='decoration-[#F7AB0A]/50 underline'>let us talk</span>
        </h4>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+123456789</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>nizarharb@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>123 developer lane</p>
          </div>
        </div>
        <form className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input className='contactInput' type='text' />
            <input className='contactInput' type='text' />
          </div>
          <input className='contactInput' type='text' />
          <textarea className='contactInput' />
          <button>submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
