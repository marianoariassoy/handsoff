import type { Metadata } from 'next'
import { inter } from '@/components/ui/fonts'
import '@/components/ui/fonts/fonts.css'
import './globals.css'
import Header from './header'
import Footer from './footer'

export const metadata: Metadata = {
  title: 'Hands Off!',
  description:
    'Desde 2010 diseñamos y desarrollamos colecciones anuales con una premisa fundamental: simpleza, despojo y funcionalidad. Nuestros géneros son tratados en forma industrial, logrando mejorarlos, conservando y potenciando sus propiedades.Trabajamos con algodón puro 100% argnetino procesado a través de una serie de lavados, desgastando sus fibras y logrando una textura única.',
  viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='es'
      className='min-h-screen'
    >
      <body className={`${inter.className} antialiased flex flex-col min-h-screen text-base max-w-8xl mx-auto`}>
        <Header />
        <main className='flex-1 px-3 lg:px-8'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
