'use client'
import { useRef } from 'react'
import Marquee from 'react-fast-marquee'
import { X } from 'lucide-react'

const Topbar = () => {
  const ref = useRef<HTMLDivElement>(null)

  const handleTopbar = () => {
    if (ref.current) {
      ref.current.classList.toggle('hidden')
    }
  }

  return (
    <div
      className='text-center h-12 border-b border-black relative flex items-center justify-center'
      ref={ref}
    >
      <div className='absolute right-0 flex items-center'>
        <button
          className='hover:text-muted-foreground'
          onClick={handleTopbar}
        >
          <X className='h-5 w-5' />
        </button>
      </div>
      <div className='font-bold lg:max-w-2xl mx-auto px-12 text-sm'>
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
