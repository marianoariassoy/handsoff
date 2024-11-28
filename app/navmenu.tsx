'use client'

import * as React from 'react'
import Link from 'next/link'
import { menu } from '@/lib/menu'
import { usePathname } from 'next/navigation'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

export function Navmenu() {
  const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menu.map(item => (
          <NavigationMenuItem key={item.title}>
            {item.category.length > 0 ? (
              <>
                <NavigationMenuTrigger>
                  <span className='font-bold uppercase'>{item.title}</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid gap-2 p-6 md:w-[500px] grid-cols-2 md:grid-cols-3 lg:w-[800px]'>
                    {item.category.map(item => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        categories={item.category}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link
                href={item.href}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span
                    className={`font-bold uppercase ${
                      item.alert ? 'text-primary  transition-colors text-shadow' : ''
                    } ${pathname === item.href ? 'text-primary' : ''}`}
                  >
                    {item.title}
                  </span>
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = ({ title, categories }: { title: string; categories?: { title: string; href: string }[] }) => {
  return (
    <li>
      <div className='font-bold leading-none mb-2'>{title}</div>

      {categories &&
        categories.length > 0 &&
        categories.map(item => (
          <div key={item.title}>
            <NavigationMenuLink asChild>
              <a
                href={item.href}
                className='mb-1 line-clamp-2 leading-snug text-muted-foreground hover:underline'
              >
                {item.title}
              </a>
            </NavigationMenuLink>
          </div>
        ))}
    </li>
  )
}
ListItem.displayName = 'ListItem'
