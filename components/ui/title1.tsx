const Title1 = ({ title }: { title: string }) => {
  return (
    <div className='flex flex-col gap-y-4 mb-8'>
      <h1 className='text-2xl font-secondary'>{title}</h1>
      <hr className='w-14 border-2 border-black' />
    </div>
  )
}

export default Title1
