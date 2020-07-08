import { Item } from './portofolio/Item'
import bbpp from '../images/kemnaker.svg'
import jericho from '../images/jericho.png'
import progressive from '../images/progressive.png'
import simtrans from '../images/simtrans.png'

export const Portfolio = () => {
  const portfolios = [
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
