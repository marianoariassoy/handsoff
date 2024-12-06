'use client'
import { useState } from 'react'
import { clsx } from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import Topbar from './topbar'
import Navoptions from './navoptions'
import { Navmenu } from './navmenu'
import { Navmenumobile } from './navmenumobile'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className='sticky top-0 z-40 flex flex-col pb-8 topbar-animation bg-white px-3 lg:px-8 '>
      <Topbar />

      <div className='flex gap-x-4 items-center justify-between mt-4'>
        <div className={clsx('flex mt-3 flex-1 items-center gap-x-1 lg:hidden', isOpen ? 'text-muted-foreground' : '')}>
          <button
            className='font-bold'
            onClick={handleClick}
          >
            MENU
          </button>
          {isOpen ? <ChevronUp className='h-5 w-5' /> : <ChevronDown className='h-5 w-5' />}
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
          <Navoptions />
        </div>
      </div>

      {isOpen && <Navmenumobile />}
    </header>
  )
}

export default Header
