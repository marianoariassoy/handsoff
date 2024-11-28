import Title1 from '@/components/ui/title1'

const page = () => {
  return (
    <main className='max-w-3xl mx-auto'>
      <Title1 title='politica de cambios' />

      <div className='max-w-4xl flex flex-col gap-y-4'>
        <p>
          En Hands Off! desarrollamos textiles & equipamiento de alta gama de ediciones limitadas y exclusivas. Eso hace
          que cada pieza sea única. Recordá que nuestros géneros son tratados en forma industrial, y cada partida es
          diferente y única, lo que puede tener variaciones mínimas de color, ya que son teñidos.
        </p>
        <p>
          Podes comprar online y si no te gusta no te queda el talle podes cambiarlo dentro del mes de compra [ menos
          cosas de cuero de cerámica y accesorios ]
        </p>
        <p>Sin haberlo usado / lavado / colocado perfume ! Y conservando etiquetas / sobre todo la de tela !</p>
        <p>
          Si quisieras también podes ir al local de Thames a realizar el cambio … podes mandarlo por correo … lo
          recibimos y te enviamos el cambio que quieras [ costo de envíos a cargo del comprador ]
        </p>
        <p>Recordamos que los productos discontinuos o de Ups! Mistakes no tienen cambio ni devolución.</p>
        <p>
          La devolución es dentro de los 5 días [ el producto en perfecto estado ]. Si el envío fue gratis porque superó
          los $180.000 y al devolver un producto baja esa cifra [ se te cobran / o descuentan de la devolución el costo
          del envío ] !
        </p>
        <p>Te devolvemos la plata al Mismo medio de pago que utilizaste ! Por lo generar se hace por Mercado Pago</p>
        <p>
          consultas & customer care:{' '}
          <a
            href='mailto:hi@handsoff.com.ar'
            className='underline'
          >
            hi@handsoff.com.ar
          </a>
        </p>
      </div>
    </main>
  )
}

export default page
