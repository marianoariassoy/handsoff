'use client'
import Link from 'next/link'
import { menu } from '@/lib/menu'
import Navmenumobileitem from './navmenumobileitem'

export function Navmenumobile() {
  return (
    <nav className='border-t border-black pt-8 pb-20 grid grid-cols-2 gap-4 mt-6'>
      <div className='flex flex-col gap-y-6'>
        {menu.slice(0, 4).map(item => (
          <div key={item.title}>
            {item.category.length > 0 ? (
              <Navmenumobileitem item={item} />
            ) : (
              <Link href={item.href}>
                <span className={`uppercase font-bold ${item.alert ? 'text-primary text-shadow' : ''}`}>
                  {item.title}
                </span>
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-y-4'>
        {menu.slice(4, 8).map(item => (
          <div key={item.title}>
            {item.category.length > 0 ? (
              <Navmenumobileitem item={item} />
            ) : (
              <Link href={item.href}>
                <span className={`uppercase font-bold ${item.alert ? 'text-primary text-shadow' : ''}`}>
                  {item.title}
                </span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}
