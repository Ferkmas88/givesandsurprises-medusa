import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Reembolsos | Gives & Surprises Store',
  description: 'Política de reembolsos y devoluciones de Gives & Surprises Store.',
}

export default function RefundPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-serif mb-2 text-cream">Política de Reembolsos y Devoluciones</h1>
      <p className="text-sm text-cream/60 mb-10">Última actualización: 13 de Abril, 2026</p>

      <section className="prose prose-invert max-w-none space-y-6 text-cream/90">
        <p>
          Queremos que ames tu compra. Si algo está mal con tu pedido, así lo manejamos.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">1. Ventana de Devolución</h2>
        <p>
          Tienes <strong>14 días</strong> desde la fecha de entrega para solicitar una devolución.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">2. Productos Elegibles</h2>
        <p>Los productos son elegibles para devolución si:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Están sin abrir y sin usar</strong> (por la naturaleza higiénica de las fragancias)</li>
          <li>Están en su empaque original con todos los sellos intactos</li>
          <li>Se devuelven dentro de los 14 días</li>
        </ul>

        <h2 className="text-2xl font-serif text-cream mt-10">3. Productos No Retornables</h2>
        <p>Por razones de salud y seguridad, <strong>no aceptamos devoluciones</strong> de:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Perfumes abiertos o usados</li>
          <li>Tamaños muestra o testers</li>
          <li>Productos dañados por el cliente</li>
          <li>Productos comprados con etiqueta de venta final o liquidación</li>
        </ul>

        <h2 className="text-2xl font-serif text-cream mt-10">4. Productos Defectuosos o Incorrectos</h2>
        <p>Si recibes un producto que está:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Dañado en tránsito</li>
          <li>Incorrecto (producto equivocado enviado)</li>
          <li>Defectuoso (con fuga, sello roto, vencido)</li>
        </ul>
        <p>
          Contáctanos a <strong>[correo]</strong> dentro de <strong>7 días</strong> de la entrega con fotos.
          Reemplazaremos el producto o emitiremos un reembolso completo sin costo para ti.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">5. Cómo Solicitar una Devolución</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Escribe a <strong>[correo]</strong> con tu número de pedido, razón de la devolución y fotos.</li>
          <li>Responderemos en <strong>2 días hábiles</strong> con instrucciones y una autorización.</li>
          <li>Envía el producto a la dirección proporcionada.</li>
          <li>
            <strong>El envío de devolución lo paga el cliente</strong> salvo que la devolución sea por error
            nuestro.
          </li>
        </ol>

        <h2 className="text-2xl font-serif text-cream mt-10">6. Procesamiento del Reembolso</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Los reembolsos se procesan al método de pago original en <strong>5–10 días hábiles</strong> después
            de recibir e inspeccionar el producto devuelto.
          </li>
          <li>
            Los costos de envío originales <strong>no son reembolsables</strong> salvo que la devolución sea
            por error nuestro.
          </li>
          <li>El tiempo del reembolso puede variar según tu banco o emisor de tarjeta.</li>
        </ul>

        <h2 className="text-2xl font-serif text-cream mt-10">7. Intercambios</h2>
        <p>Los intercambios se procesan como una devolución + nuevo pedido.</p>

        <h2 className="text-2xl font-serif text-cream mt-10">8. Cancelaciones</h2>
        <p>
          Los pedidos se pueden cancelar antes del envío. Una vez que un pedido se envió, no se puede cancelar
          — debe devolverse siguiendo los pasos anteriores.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">9. Contacto</h2>
        <address className="not-italic">
          Email: <strong>[correo]</strong><br />
          Teléfono: <strong>[teléfono]</strong>
        </address>
      </section>
    </div>
  )
}
