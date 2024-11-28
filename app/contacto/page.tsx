'use client'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  name_2969879036: z.string().min(2).max(64),
  name_4196305406: z.string().min(8).max(20).optional(),
  name_7971623464: z.string().max(20).email(),
  name_9495555827: z.string()
})

const errorMessages = {
  invalid_type: 'El tipo de dato no es válido.',
  required: 'Este campo es obligatorio.',
  too_small: 'El valor es demasiado pequeño.',
  too_big: 'El valor es demasiado grande.',
  invalid_string: 'La cadena no es válida.'
}

const translateError = issue => {
  const customMessage = errorMessages[issue.code]
  return customMessage || 'Error desconocido.'
}

z.setErrorMap(issue => {
  const translatedMessage = translateError(issue)
  return { message: translatedMessage }
})

export default function MyForm() {
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

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 max-w-3xl mx-auto py-10'
      >
        <FormField
          control={form.control}
          name='name_2969879036'
          defaultValue=''
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre.</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='name_4196305406'
          defaultValue=''
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono.</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

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

        <FormField
          control={form.control}
          name='name_9495555827'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje.</FormLabel>
              <FormControl>
                <Textarea
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Enviar</Button>
      </form>
    </Form>
  )
}
