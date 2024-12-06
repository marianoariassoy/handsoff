import { Whatsapp } from './ui/icons'

const whatsapp = () => {
  return (
    <div className='fixed z-20 bottom-8 right-8'>
      <a
        href='https://api.whatsapp.com/send?phone=+54989988888'
        target='_blank'
        rel='noreferrer'
        className='bg-black text-white rounded-full p-2 flex items-center justify-center h-14 w-14 hover:shadow-lg hover:bg-black/80 transition-all'
      >
        <Whatsapp />
      </a>
    </div>
  )
}

export default whatsapp
