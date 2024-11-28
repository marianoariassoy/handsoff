import Title1 from '@/components/ui/title1'
import Head from 'next/head'

const page = () => {
  return (
    <>
      <Head>
        <title>11 de Julio | Compras</title>
      </Head>
      <main className='max-w-3xl mx-auto'>
        <Title1 title='compras' />

        <div className='max-w-4xl flex flex-col gap-y-4'>
          <h2 className='font-bold'>Para hacer un pedido en nuestro shop online, siga estos pasos:</h2>
          <p>
            1. Cree una cuenta o identifíquese en <strong>Mi cuenta</strong> en la parte superior derecha de la página
            de inicio.
            <br />
            2. Seleccione sus artículos a medida que navega por el sitio y añádalos al carrito. Si ya es clienta de
            nuestro shop online, haga clic en &quot;Mi cuenta&quot; e identifíquese con su dirección de correo
            electrónico y contraseña. contraseña.
            <br />
            Si todavía no es clienta, haga clic en &quot;Mi cuenta&quot; y, a continuación, en &quot;Crear una
            cuenta&quot;.
            <br />
            También puede hacer su pedido sin necesidad de crear ninguna cuenta para efectuar una compra rápida.
            <br />
            Sin embargo, en ese caso no podrá hacer un seguimiento de su pedido ni contactar al Servicio al Cliente para
            solicitar una devolución. Si crea su cuenta, podrá beneficiarse de todas estas ventajas y acceder al
            historial de sus facturas.
            <br />
            3. Valide el carrito
            <br />
            4. Indique su dirección de entrega
            <br />
            5. Confirme y pague el pedido.
          </p>
          <p>
            Una vez validado el pedido, recibirá un correo electrónico de confirmación del pedido.
            <br />
            Para conocer en todo momento la evolución del pedido, acceda a su cuenta en la sección{' '}
            <strong>Mis pedidos</strong>. En esta sección, encontrará información detallada de los pedidos y podrá
            imprimir las facturas.
          </p>
          <h2 className='font-bold'>Añadir un artículo al carrito</h2>
          <p>
            Para añadir un artículo al carrito, acceda a la ficha del producto que desea, seleccione el talle y haga
            clic en <strong>COMPRAR</strong>.
            <br />
            <strong>Validar el carrito</strong>
            <br />
            Para ver y adquirir los productos del carrito, vaya a <strong>Mi carrito</strong> en la parte superior
            derecha de la página de inicio. Representada por un dibujo de una bolsa.
            <br />
            <strong>Eliminar artículos del carrito</strong>
            <br />
            Para eliminar artículos del carrito, haga clic en la casilla de supresión en forma de cruz a la derecha de
            la línea de los productos correspondientes.
            <br />
            <strong>Plazo de validez del carrito</strong>
            <br />
            El plazo de validez del carrito es de 24 hs. Este período se puede renovar con cada adición de producto y
            cada etapa del proceso de pedido. Transcurrido este plazo, los productos ya no estarán visibles en el
            carrito. Aún así esto no asegura el stock de los productos.
            <br />
            <br />
            *LOS PRODUCTOS DE UPS! NO TIENEN CAMBIO NI DEVOLUCIÓN, TAMPOCO ENVÍO GRATIS*
          </p>
        </div>
      </main>
    </>
  )
}

export default page
