import Topbar from './topbar'
import Cart from './cart'
import Image from 'next/image'
import { Navmenu } from './navmenu'
import { Navmenumobile } from './navmenumobile'

const header = () => {
  return (
    <header className='sticky top-0 flex flex-col gap-y-4 mb-8 topbar-animation bg-white'>
      <Topbar />
      <div className='flex gap-x-4 items-center'>
        <div className='lg:hidden'>
          <button className='font-bold'>MENU</button>
        </div>
        <div className='flex justify-center flex-1 lg:flex-none lg:justify-start'>
          <Image
            src='/assets/logo-handsoff.svg'
            alt='logo'
            width={160}
            height={100}
          />
        </div>
        <div className='flex-1 justify-center hidden lg:flex'>
          <Navmenu />
        </div>
        <div>
          <Cart />
        </div>
      </div>
      <div className='lg:hidden'>
        <Navmenumobile />
      </div>
    </header>
  )
}

export default header
