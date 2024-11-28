import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Cart from './cart'

const Navoptions = () => {
  return (
    <nav className='flex items-center gap-x-4'>
      <Popover>
        <PopoverTrigger className='hover:text-primary hidden lg:block'>
          <span className='font-black'>BUSCAR</span>

          {/* <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg> */}
        </PopoverTrigger>
        <PopoverContent>
          <div className='flex w-full max-w-sm items-center gap-x-4'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1}
                stroke='currentColor'
                className='size-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>
            </div>
            <input
              type='text'
              className='h-9 w-full border-0 focus:outline-none'
              placeholder='Buscar...'
            />
          </div>
        </PopoverContent>
      </Popover>

      <Cart />
    </nav>
  )
}

export default Navoptions
