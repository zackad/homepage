import React from 'react'

function SocialIcon({ icon, url }) {
  return (
    <a className='mx-2 hover:text-gray-100' href={url} target='_blank'>
      <i className={`${icon} fa-fw`}></i>
    </a>
  )
}

export const SocialNetworks = () => (
  <section className='mt-5'>
    <h1 className='text-2xl font-serif tracking-widest underline'>Contact</h1>
    <div className='flex justify-center flex-wrap text-4xl text-gray-600 px-5'>
      <SocialIcon icon='fas fa-envelope' url='mailto:zackad.dev@gmail.com' />
      <SocialIcon icon='fab fa-github' url='https://github.com/zackad' />
      <SocialIcon icon='fas fa-link' url='https://blog.zackad.dev' />
      <SocialIcon icon='fab fa-youtube' url='https://www.youtube.com/channel/UCao_VdbgaSy2CnB0VdySOEQ' />
    </div>
  </section>
)
