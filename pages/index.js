const Index = () => (
  <>
    <html lang='en'>
      <body className='bg-gray-900 text-gray-200 font-sans'>
        <div className='flex items-center h-screen text-center'>
          <div className='flex-grow'>
            <div className='vertical-align'>
              <h2 className='text-6xl font-serif leading-none'>zackad</h2>
              <h2 className='text-xl sm:text-2xl font-mono leading-loose'>Full stack web developer</h2>
              <div className='flex justify-center flex-wrap text-4xl text-gray-600 px-5'>
                <a className='mx-2 hover:text-gray-100' href='mailto:zackad.dev@gmail.com'>
                  <i className='fas fa-envelope fa-fw'></i>
                </a>
                <a className='mx-2 hover:text-gray-100' href='https://twitter.com/zackaddev'>
                  <i className='fab fa-twitter fa-fw'></i>
                </a>
                <a className='mx-2 hover:text-gray-100' href='https://github.com/zackad'>
                  <i className='fab fa-github fa-fw'></i>
                </a>
                <a className='mx-2 hover:text-gray-100' href='https://gitlab.com/zackad'>
                  <i className='fab fa-gitlab fa-fw'></i>
                </a>
                <a className='mx-2 hover:text-gray-100' href='http://stackoverflow.com/users/6265296/zackad'>
                  <i className='fab fa-stack-overflow fa-fw'></i>
                </a>
                <a className='mx-2 hover:text-gray-100' href='https://blog.zackad.com'>
                  <i className='fas fa-link fa-fw'></i>
                </a>
                <a className='mx-2 hover:text-gray-100' href='https://www.youtube.com/channel/UCao_VdbgaSy2CnB0VdySOEQ'>
                  <i className='fab fa-youtube fa-fw'></i>
                </a>
              </div>
              <h2 className='text-2xl font-serif tracking-widest mt-5'>Skills</h2>
              <div className='flex flex-wrap justify-center text-lg underline leading-relaxed'>
                <span className='mx-2'>PHP</span>
                <span className='mx-2'>Javascript</span>
                <span className='mx-2'>CSS</span>
                <span className='mx-2'>DevOps</span>
                <span className='mx-2'>Web Mapping (GIS)</span>
              </div>
              <h2 className='text-2xl font-serif tracking-widest mt-5'>Support Me</h2>
              <span className='block'>
                <a className='text-gray-500 hover:text-gray-100' href='https://m.do.co/c/25dc4f4beb9c'>
                  <i className='fab fa-digital-ocean'></i> Digital Ocean referral code
                </a>
              </span>
              <span className='block'>
                <a
                  className='text-gray-500 hover:text-gray-100'
                  href='https://www.amazon.com/hz/wishlist/ls/GCGGLBAHWOY1'
                >
                  <i className='fab fa-amazon'></i> Amazon wishlist
                </a>
              </span>
              <span className='block'>
                <a className='text-gray-500 hover:text-gray-100' href='https://paypal.me/zackad'>
                  <i className='fab fa-paypal'></i> Paypal
                </a>
              </span>
            </div>
          </div>
        </div>
      </body>
    </html>
  </>
)

export default Index
