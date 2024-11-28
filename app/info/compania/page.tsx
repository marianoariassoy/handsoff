import Image from 'next/image'

const page = () => {
  return (
    <main>
      <Image
        src='/assets/company.jpg'
        alt='compania'
        width={1480}
        height={600}
      />
    </main>
  )
}

export default page
