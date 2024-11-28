import { useState } from 'react'
import Link from 'next/link'
import { Menu } from '@/lib/types'

const Navmenumobileitem = ({ item }: { item: Menu }) => {
  const [submenu, setSubmenu] = useState(false)

  const handleSubmenu = () => {
    setSubmenu(!submenu)
  }
  return (
    <div>
      <button
        className='flex items-center gap-x-1'
        onClick={handleSubmenu}
      >
        <span className='uppercase font-bold'>{item.title}</span>
        {submenu ? (
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
      </button>
      {submenu && (
        <ul className='flex flex-col gap-y-2 py-2'>
          {item.category.map(item => (
            <li key={item.title}>
              <Link href=''>
                <span className='text-muted-foreground'>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Navmenumobileitem
