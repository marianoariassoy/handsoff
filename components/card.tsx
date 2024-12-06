import Image from 'next/image'
import { Item } from '@/lib/types'
import Link from 'next/link'

const card = ({ data }: { data: Item }) => {
  return (
    <article className='flex flex-col gap-y-4'>
      <Link
        href={data.href}
        className='hover:opacity-70 transition-opacity'
      >
        <div className='aspect-square lg:aspect-[4/5] overflow-hidden'>
          <Image
            src={data.image}
            alt={data.title}
            width={400}
            height={400}
            className='h-full w-full object-cover'
          />
        </div>
      </Link>
      <div className='text-center font-bold text-sm leading-4'>
        <h2>{data.title}</h2>
        <p>{data.price}</p>
      </div>
    </article>
  )
}

export default card
