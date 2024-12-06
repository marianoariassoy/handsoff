import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  title_en: string
  image: string
  href: string
}

export default function HomeCard({ data }: { data: Props }) {
  return (
    <article className='aspect-square lg:aspect-[4/5] overflow-hidden relative'>
      <div className='absolute z-30 top-12 left-8   font-secondary text-white text-2xl'>{data.title}</div>
      <Link href={data.href}>
        <Image
          src={data.image}
          alt={data.title}
          width={1000}
          height={800}
          className='object-cover w-full h-full  hover:scale-110 transition-transform'
        />
      </Link>
    </article>
  )
}
