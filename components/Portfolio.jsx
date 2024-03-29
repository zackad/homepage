import React from 'react'
import bbpp from '../images/kemnaker.svg'
import jericho from '../images/jericho.png'
import progressive from '../images/progressive.png'
import sarprasSma from '../images/sarpras-sma.png'
import simtrans from '../images/simtrans.png'

const Tag = ({ tag }) => <span className='inline-block pr-2 text-sm text-gray-500'>#{tag}</span>

const Item = ({ title, image, description, live, demo, tags, time }) => {
  return (
    <div className='flex flex-col md:flex-row mt-5'>
      <div className='w-full md:w-1/2 lg:w-1/3 p-2'>
        <img src={image} alt={`${title}-thumbnail`} className='max-h-48 md:max-w-1/2 md:max-h-48 mx-auto' />
      </div>
      <div className='w-full md:w-1/2 lg:w-2/3 md:text-left'>
        <h1 className='text-xl font-medium'>{title}</h1>
        <p>{description}</p>
        <div className='mt-2 text-left'>
          {live && (
            <p>
              Live:{' '}
              <a href={live} targe='_blank'>
                {live}
              </a>
            </p>
          )}
          {demo && (
            <p>
              Demo:{' '}
              <a href={demo} target='_blank'>
                {demo}
              </a>
            </p>
          )}
        </div>
        <div className='mt-2 text-left'>{tags && tags.map((tag, index) => <Tag key={index} tag={tag} />)}</div>
        {time}
      </div>
    </div>
  )
}

export const Portfolio = () => {
  const portfolios = [
    {
      title: 'SiMaspras',
      description: 'Sistem Manajemen Sarana Prasarana Direktorat SMA',
      live: 'https://sarpras-sma.kemdikbud.go.id',
      image: sarprasSma,
      tags: ['fullstack', 'symfony'],
      time: 'Jul 2020 - Present',
    },
    {
      title: 'BBPP Homepage',
      description:
        'Balai Besar Pengembang Produktivitas (BBPP) is an Indonesian goverment agency related to improvement of productivity for home, small and medium scale industry.',
      demo: 'https://bbpp.zackad.dev',
      live: 'https://bbpproduktivitas.org',
      image: bbpp,
      tags: ['frontend', 'react'],
      time: 'Apr 2019 - Jun 2019',
    },
    {
      title: 'Jericho',
      description: 'Homepage for transportation agent.',
      demo: 'https://jericho.zackad.dev',
      image: jericho,
      tags: ['frontend', 'react'],
      time: 'Jul 2019 - Sep 2019',
    },
    {
      title: 'Progressive',
      description: 'Internal tool for tracking job progress in a small team.',
      demo: 'https://progressive.zackad.dev',
      image: progressive,
      tags: ['fullstack', 'pwa', 'symfony'],
      time: 'Apr 2018 - May 2018',
    },
    {
      title: 'Simtrans',
      description: 'Internal tool to help visualize transportation service planning in a sport event.',
      demo: 'https://simtrans.zackad.dev',
      image: simtrans,
      tags: ['fullstack', 'codeigniter', 'bootstrap', 'google-maps-api', 'jquery'],
      time: 'Jul 2015 - Mar 2016',
    },
  ]

  return (
    <section className='mt-5'>
      <div className='container mx-auto'>
        <h1 className='text-2xl font-serif tracking-widest underline'>Portfolios</h1>
        <div className='p-2'>
          {portfolios.map((item) => (
            <Item {...item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
