import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from './header'
import Footer from './footer'

const roboto = Roboto({
  subsets: ['latin'], //
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Hands Off!',
  description:
    'Desde 2010 diseñamos y desarrollamos colecciones anuales con una premisa fundamental: simpleza, despojo y funcionalidad. Nuestros géneros son tratados en forma industrial, logrando mejorarlos, conservando y potenciando sus propiedades.Trabajamos con algodón puro 100% argnetino procesado a través de una serie de lavados, desgastando sus fibras y logrando una textura única.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body
        className='p-8'
        style={{ fontFamily: roboto.style.fontFamily }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
