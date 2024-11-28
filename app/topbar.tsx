'use client'
import { useRef } from 'react'
import Marquee from 'react-fast-marquee'

const Topbar = () => {
  const ref = useRef<HTMLDivElement>(null)

  const handleTopbar = () => {
    if (ref.current) {
      ref.current.classList.toggle('hidden')
    }
  }

  return (
    <div
      className='text-center py-4 border-b border-black relative '
      ref={ref}
    >
      <div className='absolute right-0 flex items-center '>
        <button
          className='hover:text-primary'
          onClick={handleTopbar}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-5'
          >
            <path
              fillRule='evenodd'
              d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
      <div className='font-bold lg:max-w-2xl mx-auto px-12'>
        <Marquee
          speed={30}
          gradient={false}
          pauseOnHover={false}
        >
          ¡Envios gratis en tus compras a partir de $200.000! (No incluye los productos de Ups! Mistakes) - &nbsp;
        </Marquee>
      </div>
    </div>
  )
}

export default Topbar
