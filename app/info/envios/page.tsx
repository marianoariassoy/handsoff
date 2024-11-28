import Title1 from '@/components/ui/title1'
import { metadata } from '@/app/layout'

const page = () => {
  metadata.title = 'Hands Off! Envios'

  return (
    <main className='max-w-3xl mx-auto'>
      <Title1 title='envios' />

      <div className='max-w-4xl flex flex-col gap-y-4'>
        <p>
          ENVÍOS A TODO EL PAÍS El servicio de envíos está a cargo de Andreani a través de nuestro sitio web con un
          costo fijo [ varia si supera los 5 kilos ]. Los envíos se preparan y despachan martes y viernes, con las
          compras efectuadas hasta las 14hs de esos días. [no se contemplan feriados] Si tu compra supera los $200.000.-
          el mismo corre a cargo nuestro! Es GRATIS. [NO APLICA A PRODUCTOS DE LA CATEGORIA MUEBLES] Nos pondremos en
          contacto para enviar el número de tracking. El TIEMPO de ENTREGA puede ser 4 a 6 días. Los tiempos de entrega
          están sujetos a Andreani. [Por razones de publico conocimiento el correo puede llegar a demorar mas tiempo del
          estimado] ¡DATA IMPORTANTE! *Si la dirección ingresada es incorrecta nosotros no podemos modificar las
          etiquetas del correo. Aclarar si es una casa o un edificio [Si es edificio piso y departamento, barrio
          privado] Cualquier aclaración que creas necesaria para encontrar tu dirección. *LOS PRODUCTOS DE UPS! MISTAKES
          NO TIENEN ENVIO GRATIS* consultas & customer care: hi@handsoff.com.ar
        </p>
      </div>
    </main>
  )
}

export default page
