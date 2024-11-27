import Topbar from './topbar'
import Image from 'next/image'
import { Navmenu } from './navmenu'

const header = () => {
  return (
    <header className='flex flex-col gap-y-2 mb-4'>
      <Topbar />
      <div className='flex gap-x-4 items-center'>
        <div>
          <Image
            src='/assets/logo-handsoff.svg'
            alt='logo'
            width={160}
            height={100}
          />
        </div>
        <div className='flex-1 flex justify-center'>
          <Navmenu />
        </div>
        <div>Opciones</div>
      </div>
    </header>
  )
}

export default header
