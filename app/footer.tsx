'use client'
import { usePathname } from 'next/navigation'
import { menu_footer, socials } from '@/lib/menu'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const Footer = () => {
  const pathname = usePathname()

  return (
    <footer className='mt-12 px-3 lg:px-8'>
      <div className='border-t py-10 border-black flex flex-col lg:flex-row justify-between gap-8 '>
        <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 '>
          {menu_footer.map(item => (
            <div key={item.title}>
              <div className='font-bold uppercase'>{item.title}</div>
              <ul className='flex flex-col'>
                {item.category.map(item => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className={`hover:underline ${pathname === item.href ? 'text-primary' : ''}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-y-8 w-full max-w-[400px]'>
          <div className='flex flex-col gap-y-2'>
            <div className='font-bold uppercase'>Sigamos en contacto</div>
            <Input
              type='email'
              placeholder='Email'
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <div className='font-bold uppercase'>Buscanos en</div>
            <div className='flex gap-x-2'>
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className='hover:underline h-9 w-9 text-xs flex justify-center items-center bg-black rounded-full text-white hover:bg-primary'
                  target='_blank'
                  rel='noreferrer'
                  title={item.title}
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
