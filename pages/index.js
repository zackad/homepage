import { Hero } from '../components/Hero'
import { Skills } from '../components/Skills'
import { SocialNetworks } from '../components/SocialNetworks'

const Index = () => (
  <div className='bg-gray-900 text-gray-200 font-sans'>
    <div className='flex min-h-screen text-center'>
      <div className='flex-grow'>
        <Hero />
        <SocialNetworks />
        <Skills />
      </div>
    </div>
  </div>
)

export default Index
