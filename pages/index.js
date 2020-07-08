import { Hero } from '../components/Hero'
import { Skills } from '../components/Skills'
import { SocialNetworks } from '../components/SocialNetworks'
import { Portfolio } from '../components/Portfolio'

const Index = () => (
  <div className='font-sans'>
    <div className='flex min-h-screen text-center pb-12'>
      <div className='flex-grow'>
        <Hero />
        <SocialNetworks />
        <Skills />
        <Portfolio />
      </div>
    </div>
  </div>
)

export default Index
