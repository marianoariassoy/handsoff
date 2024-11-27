import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const cart = () => {
  return (
    <nav className='flex items-center gap-x-4 font-bold'>
      <div className='hidden lg:block'>
        <Popover>
          <PopoverTrigger className='hover:text-primary'>BUSCAR</PopoverTrigger>
          <PopoverContent>
            <div className='flex w-full max-w-sm items-center gap-x-4'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
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
      </div>

      <button className='hover:text-primary flex gap-x-1 items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
          />
        </svg>
        (2)
      </button>
    </nav>
  )
}

export default cart
