import { Item } from './Item'
import { portofolios } from './data'

export const Portfolio = () => {
  return (
    <section className='mt-5'>
      <div className='container mx-auto'>
        <h1 className='text-2xl font-serif tracking-widest underline'>Portfolios</h1>
        <div className='p-2'>
          {portofolios.map((item) => (
            <Item {...item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
