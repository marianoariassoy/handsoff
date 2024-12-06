'use client'
import { X } from 'lucide-react'
import { getCookie, setCookie } from 'typescript-cookie'
import { useState, useEffect, useRef } from 'react'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  name_7971623464: z.string().max(20).email()
})

export default function Popover() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const popover = getCookie('popover')

    if (!popover) {
      setIsVisible(true)
      setCookie('popover', 'true', { expires: 1 })
    }
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values)
      toast(
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(values, null, 2)}</code>
        </pre>
      )
    } catch (error) {
      console.error('Form submission error', error)
      toast.error('Failed to submit the form. Please try again.')
    }
  }

  const handleTopbar = () => {
    if (ref.current) {
      ref.current.classList.toggle('hidden')
    }
  }
  const ref = useRef<HTMLDivElement>(null)

  if (isVisible)
    return (
      <div
        className='fixed left-0 top-0 w-full h-full bg-black/30 flex items-center justify-center p-4'
        ref={ref}
      >
        <div className='bg-white px-6 py-12 lg:py-10 lg:px-24 flex flex-col gap-y-4 max-w-[800px] relative shadow-lg fade-in '>
          <div className='absolute right-6 top-6 flex items-center'>
            <button
              className='hover:text-muted-foreground'
              onClick={handleTopbar}
            >
              <X className='h-8 w-8' />
            </button>
          </div>
          <div className='flex flex-col gap-y-4 items-center justify-center text-center'>
            <h1 className='text-2xl lg:text-3xl font-secondary'>hey you!</h1>
            <hr className='w-14 border-2 border-black' />
          </div>
          <p className='text-sm lg:text-base text-muted-foreground text-center lg:text-left'>
            Unite a nuestra comunidad para recibir las últimas noticias de Hands Off! incluyendo beneficios exclusivos,
            novedades, preventas y lanzamientos.
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-4'
            >
              <FormField
                control={form.control}
                name='name_7971623464'
                defaultValue=''
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email.</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex justify-center'>
                <Button type='submit'>Enviar</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    )
}
