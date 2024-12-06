import Image from 'next/image'
import HomeCard from '@/components/homecard'
import Whatsapp from '@/components/whatsapp'
import Popover from '@/components/popover'
import Card from '@/components/card'
import Title2 from '@/components/ui/title2'

export default function Home() {
  const data = [
    {
      title: 'home',
      title_en: 'home',
      image: '/assets/home-card-1.jpg',
      href: '/'
    },
    {
      title: 'denim',
      title_en: 'denim',
      image: '/assets/home-card-2.jpg',
      href: '/'
    },
    {
      title: 'lifestyle',
      title_en: 'lifestyle',
      image: '/assets/home-card-3.jpg',
      href: '/'
    }
  ]

  const topItems = [
    {
      id: 1,
      title: 'BOYFRIEND HO!',
      title_en: 'BOYFRIEND HO!',
      image: 'https://handsoff.com.ar/imagenes/handsoff_o4pfZE4Kr2ip_thumb.jpg',
      price: '60000 ARS',
      href: '/'
    },
    {
      id: 2,
      title: 'BOYFRIEND HO! 2',
      title_en: 'BOYFRIEND HO! 2',
      image: 'https://handsoff.com.ar/imagenes/handsoff_o4pfZE4Kr2ip_thumb.jpg',
      price: '60000 ARS',
      href: '/'
    },
    {
      id: 3,
      title: 'BOYFRIEND HO! 3',
      title_en: 'BOYFRIEND HO! 3',
      image: 'https://handsoff.com.ar/imagenes/handsoff_o4pfZE4Kr2ip_thumb.jpg',
      price: '60000 ARS',
      href: '/'
    },
    {
      id: 4,
      title: 'BOYFRIEND HO! 3',
      title_en: 'BOYFRIEND HO! 3',
      image: 'https://handsoff.com.ar/imagenes/handsoff_o4pfZE4Kr2ip_thumb.jpg',
      price: '60000 ARS',
      href: '/'
    },
    {
      id: 5,
      title: 'BOYFRIEND HO!',
      title_en: 'BOYFRIEND HO!',
      image: 'https://handsoff.com.ar/imagenes/handsoff_o4pfZE4Kr2ip_thumb.jpg',
      price: '60000 ARS',
      href: '/'
    },
    {
      id: 6,
      title: 'BOYFRIEND HO! 2',
      title_en: 'BOYFRIEND HO! 2',
      image: 'https://handsoff.com.ar/imagenes/handsoff_o4pfZE4Kr2ip_thumb.jpg',
      price: '60000 ARS',
      href: '/'
    },
    {
      id: 7,
      title: 'BOYFRIEND HO! 3',
      title_en: 'BOYFRIEND HO! 3',
      image: 'https://handsoff.com.ar/imagenes/handsoff_o4pfZE4Kr2ip_thumb.jpg',
      price: '60000 ARS',
      href: '/'
    },
    {
      id: 8,
      title: 'BOYFRIEND HO! 3',
      title_en: 'BOYFRIEND HO! 3',
      image: 'https://handsoff.com.ar/imagenes/handsoff_o4pfZE4Kr2ip_thumb.jpg',
      price: '60000 ARS',
      href: '/'
    }
  ]

  return (
    <section className='flex flex-col gap-y-4 lg:gap-y-8'>
      <Image
        src='/assets/home.jpg'
        alt='HandsOff'
        width={1480}
        height={1280}
      />

      <div className='bg-gray-200 px-4 py-12 flex flex-col items-center gap-y-4'>
        <p className='font-secondary text-center max-w-3xl mx-auto leading-5 lg:leading-7 text-sm lg:text-base'>
          Desde 2010 diseñamos y desarrollamos colecciones anuales con una premisa fundamental: simple, despojo y
          funcional. Nuestros géneros son tratados en forma industrial, logrando mejorarlos, conservando y potenciando
          sus propiedades. Trabajamos con algodón puro 100% Argentino procesado a través de una serie de lavados,
          desgastando sus fibras y logrando una textura única Cada pieza refleja la pasión, la dedicación y el amor con
          el que todos los días trabajamos en nuestros productos.
        </p>
        <Image
          src='/assets/logo-handsoff.svg'
          alt='logo'
          width={160}
          height={100}
          className='w-24 lg:w-auto'
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.map(item => (
          <HomeCard
            data={item}
            key={item.title}
          />
        ))}
      </div>

      <Title2 title='elegidos' />

      <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8'>
        {topItems.map(item => (
          <Card
            data={item}
            key={item.id}
          />
        ))}
      </div>

      <Title2 title='as seen on...' />

      <Image
        src='/assets/prensa.jpg'
        alt='Prensa'
        width={1480}
        height={1280}
      />

      <Whatsapp />
      <Popover />
    </section>
  )
}
