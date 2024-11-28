'use client'

import Link from 'next/link'
import { menu } from '@/components/menu'
import Navmenumobileitem from './navmenumobileitem'

export function Navmenumobile() {
  return (
    <nav className='border-t border-black mt-4 pt-8 pb-24 grid grid-cols-2 gap-4'>
      <div className='flex flex-col gap-y-4'>
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
