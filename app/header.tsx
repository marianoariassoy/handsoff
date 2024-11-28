'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Topbar from './topbar'
import Cart from './cart'
import { Navmenu } from './navmenu'
import { Navmenumobile } from './navmenumobile'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className='sticky top-0 flex flex-col gap-y-4 mb-8 topbar-animation bg-white'>
      <Topbar />

      <div className='flex gap-x-4 items-center justify-between'>
        <div className={`lg:hidden flex-1 mt-3 flex gap-x-1 items-center ${isOpen ? 'text-muted-foreground' : ''}`}>
          <button
            className='font-bold'
            onClick={handleClick}
          >
            MENU
          </button>
          {isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m4.5 15.75 7.5-7.5 7.5 7.5'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m19.5 8.25-7.5 7.5-7.5-7.5'
              />
            </svg>
          )}
        </div>
        <div className='flex justify-center lg:flex-1 lg:justify-start'>
          <Link
            href='/'
            className='hover:-rotate-2 transition-transform'
          >
            <Image
              src='/assets/logo-handsoff.svg'
              alt='logo'
              width={160}
              height={100}
            />
          </Link>
        </div>
        <div className='justify-center hidden lg:flex mt-3'>
          <Navmenu />
        </div>
        <div className='flex-1 flex justify-end mt-3'>
          <Cart />
        </div>
      </div>

      {isOpen && <Navmenumobile />}
    </header>
  )
}

export default Header
