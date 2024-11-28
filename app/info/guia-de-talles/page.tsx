import Image from 'next/image'

const page = () => {
  return (
    <main>
      <div className='flex justify-center'>
        <Image
          src='/assets/guia-de-talles.jpg'
          alt='guia de talles'
          width={1280}
          height={600}
        />
      </div>
    </main>
  )
}

export default page
