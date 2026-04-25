import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Envío | Gives & Surprises Store',
  description: 'Tiempos de envío, costos y áreas de entrega de Gives & Surprises Store.',
}

export default function ShippingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-serif mb-2 text-cream">Política de Envío</h1>
      <p className="text-sm text-cream/60 mb-10">Última actualización: 13 de Abril, 2026</p>

      <section className="prose prose-invert max-w-none space-y-6 text-cream/90">
        <h2 className="text-2xl font-serif text-cream mt-10">1. Dónde Enviamos</h2>
        <p>
          Enviamos dentro de los <strong>Estados Unidos continentales</strong> (50 estados). El envío
          internacional no está disponible por ahora.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">2. Tiempo de Procesamiento</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Los pedidos se procesan en <strong>1–3 días hábiles</strong> después del pago.</li>
          <li>Pedidos después de las 2:00 PM hora del este se procesan al siguiente día hábil.</li>
          <li>No se procesan pedidos en fines de semana ni feriados federales de EE.UU.</li>
        </ul>

        <h2 className="text-2xl font-serif text-cream mt-10">3. Métodos y Tiempos de Envío</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-cream/20">
            <thead>
              <tr className="bg-cream/5">
                <th className="border border-cream/20 p-3 text-left">Método</th>
                <th className="border border-cream/20 p-3 text-left">Tiempo</th>
                <th className="border border-cream/20 p-3 text-left">Costo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-cream/20 p-3">Estándar (USPS / UPS Ground)</td>
                <td className="border border-cream/20 p-3">3–7 días hábiles</td>
                <td className="border border-cream/20 p-3"><strong>[$X.XX]</strong></td>
              </tr>
              <tr>
                <td className="border border-cream/20 p-3">Expedito (2 días)</td>
                <td className="border border-cream/20 p-3">2 días hábiles</td>
                <td className="border border-cream/20 p-3"><strong>[$X.XX]</strong></td>
              </tr>
              <tr>
                <td className="border border-cream/20 p-3">Envío gratis</td>
                <td className="border border-cream/20 p-3">Pedidos &gt; <strong>[$XX]</strong></td>
                <td className="border border-cream/20 p-3">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Los tiempos de entrega son <strong>estimados</strong> del transportista y no están garantizados.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">4. Seguimiento</h2>
        <p>
          Una vez que tu pedido se envía, recibirás un número de rastreo por email. Puedes rastrear tu paquete
          en el sitio del transportista.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">5. Costos de Envío</h2>
        <p>
          Los costos de envío se calculan en el checkout según el peso, destino y método seleccionado.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">6. Paquetes Perdidos, Dañados o Robados</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Perdido en tránsito:</strong> Contáctanos si tu paquete no ha llegado dentro de 10 días
            hábiles de la fecha estimada. Presentaremos un reclamo con el transportista.
          </li>
          <li>
            <strong>Dañado en tránsito:</strong> Contáctanos dentro de 7 días de la entrega con fotos del
            paquete y producto dañados.
          </li>
          <li>
            <strong>Robado después de la entrega:</strong> Una vez que el transportista marca un paquete como
            "Entregado", no somos responsables por paquetes robados. Recomendamos enviar a una dirección
            segura o usar la opción con firma requerida.
          </li>
        </ul>

        <h2 className="text-2xl font-serif text-cream mt-10">7. Dirección Incorrecta</h2>
        <p>
          Si proporcionas una dirección de envío incorrecta y el paquete nos es devuelto, eres responsable
          del costo del reenvío.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">8. Contacto</h2>
        <address className="not-italic">
          Email: <strong>[correo]</strong><br />
          Teléfono: <strong>[teléfono]</strong>
        </address>
      </section>
    </div>
  )
}
