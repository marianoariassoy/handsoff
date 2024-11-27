'use client'

import * as React from 'react'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

const components: {
  title: string
  href: string
  category?: {
    title: string
    title_en: string
    href: string
  }[]
}[] = [
  {
    title: 'Muebles',
    href: '/docs/primitives/alert-dialog',
    category: [
      {
        title: 'Sofas',
        title_en: 'Chairs',
        href: '/docs/primitives/alert-dialog'
      },
      {
        title: 'Respaldos',
        title_en: 'Wardrobes',
        href: '/docs/primitives/hover-card'
      },
      {
        title: 'Mesas y asientos',
        title_en: 'Tables and chairs',
        href: '/docs/primitives/progress'
      },
      {
        title: 'Iluminación',
        title_en: 'Lighting',
        href: '/docs/primitives/scroll-area'
      }
    ]
  },
  {
    title: 'Dormitorio',
    href: '/docs/primitives/hover-card',
    category: [
      {
        title: 'Almohadones',
        title_en: 'Sofas',
        href: '/docs/primitives/alert-dialog'
      },
      {
        title: 'Cubres',
        title_en: 'Wardrobes',
        href: '/docs/primitives/hover-card'
      },
      {
        title: 'Mantas',
        title_en: 'Chairs',
        href: '/docs/primitives/progress'
      },
      {
        title: 'Respaldos',
        title_en: 'Wardrobes',
        href: '/docs/primitives/scroll-area'
      },
      {
        title: 'Fundas de almohadones',
        title_en: 'Sofa bases',
        href: '/docs/primitives/scroll-area'
      },
      {
        title: 'Sabanas',
        title_en: 'Tables',
        href: '/docs/primitives/scroll-area'
      }
    ]
  },
  {
    title: 'Mesa',
    href: '/docs/primitives/progress'
  },
  {
    title: 'Baño',
    href: '/docs/primitives/scroll-area'
  },
  {
    title: 'Generos',
    href: '/docs/primitives/tabs'
  },
  {
    title: 'Accesorios',
    href: '/docs/primitives/tooltip'
  }
]

export function Navmenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <span className='font-bold'>CASA</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-3 lg:w-[700px]'>
              {components.map(component => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  categories={component.category}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href='/docs'
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = ({ title, categories }: { title: string; categories?: { title: string; href: string }[] }) => {
  return (
    <li>
      <div className='text-sm font-bold leading-none mb-2'>{title}</div>

      {categories &&
        categories.length > 0 &&
        categories.map(item => (
          <div key={item.title}>
            <NavigationMenuLink asChild>
              <a
                href={item.href}
                className='mb-1 line-clamp-2 text-sm leading-snug text-muted-foreground hover:underline'
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
