import { Tag } from './Tag'

export const Item = ({ title, image, description, live, demo, tags, time }) => {
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
