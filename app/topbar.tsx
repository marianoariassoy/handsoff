'use client'
import { useRef } from 'react'

const Topbar = () => {
  const ref = useRef<HTMLDivElement>(null)

  const handleTopbar = () => {
    if (ref.current) {
      ref.current.classList.toggle('hidden')
    }
  }

  return (
    <div
      className='text-center text-sm pb-4 border-b border-black relative'
      ref={ref}
    >
      <div className='absolute top-0 right-0 flex items-center'>
        <button
          className='hover:text-primary'
          onClick={handleTopbar}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-6'
          >
            <path
              fillRule='evenodd'
              d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>

      <span className='font-bold'>Envios gratis a partir de $200000.- (No incluye los productos de Ups! Mistakes)</span>
    </div>
  )
}

export default Topbar
