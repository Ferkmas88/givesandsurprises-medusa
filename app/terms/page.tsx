import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos de Servicio | Gives & Surprises Store',
  description: 'Términos y condiciones de uso de Gives & Surprises Store.',
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-serif mb-2 text-cream">Términos de Servicio</h1>
      <p className="text-sm text-cream/60 mb-10">Última actualización: 13 de Abril, 2026</p>

      <section className="prose prose-invert max-w-none space-y-6 text-cream/90">
        <p>
          Bienvenido a Gives & Surprises Store. Al acceder o usar <strong>giveandsurprisesstore.com</strong>{' '}
          ("el Sitio"), aceptas estos Términos de Servicio. Si no estás de acuerdo, no uses el Sitio.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">1. Elegibilidad</h2>
        <p>Debes tener al menos 18 años, o la edad de mayoría en tu estado, para hacer una compra.</p>

        <h2 className="text-2xl font-serif text-cream mt-10">2. Productos y Precios</h2>
        <p>
          Vendemos perfumes árabes y orientales auténticos, incluyendo marcas como Laffata, Afnan, Al Haramain,
          Bharara, Jo Milano y Rasasi. Las descripciones, imágenes y precios se proporcionan de buena fe pero
          pueden contener errores. Nos reservamos el derecho de corregir errores y cancelar pedidos hechos a
          precios incorrectos (con reembolso completo).
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">3. Pedidos</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Hacer un pedido constituye una oferta de compra.</li>
          <li>Nos reservamos el derecho de aceptar, rechazar o cancelar cualquier pedido.</li>
          <li>Recibirás un correo de confirmación de pedido.</li>
          <li>Los pedidos no son finales hasta que el pago se procese exitosamente.</li>
        </ul>

        <h2 className="text-2xl font-serif text-cream mt-10">4. Pago</h2>
        <p>
          Aceptamos pagos a través de Stripe: tarjetas de crédito y débito principales. El pago se debe al
          momento del checkout. Los precios están en <strong>dólares estadounidenses (USD)</strong>.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">5. Impuestos</h2>
        <p>
          El impuesto sobre ventas aplicable se calcula y agrega en el checkout según tu dirección de envío.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">6. Envío y Devoluciones</h2>
        <p>
          Ver nuestra <a href="/shipping" className="text-gold hover:underline">Política de Envío</a> y{' '}
          <a href="/refund" className="text-gold hover:underline">Política de Reembolsos</a> para detalles
          completos.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">7. Uso del Producto</h2>
        <p>
          Los perfumes y fragancias son solo para uso externo. Haz una prueba de parche en la piel antes del
          uso completo. Suspende el uso si hay irritación. No somos responsables por reacciones alérgicas o
          sensibilidad.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">8. Propiedad Intelectual</h2>
        <p>
          Todo el contenido del Sitio — logos, fotos de productos, descripciones y gráficos — es propiedad de
          Gives & Surprises Store o sus licenciantes. No puedes copiar, reproducir ni usar el contenido sin
          permiso por escrito.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">9. Cuentas de Usuario</h2>
        <p>
          Si creas una cuenta, eres responsable de mantener tu contraseña segura y de toda actividad bajo tu
          cuenta. Notifícanos de inmediato cualquier acceso no autorizado.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">10. Usos Prohibidos</h2>
        <p>No puedes usar el Sitio para:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Violar cualquier ley</li>
          <li>Cometer fraude o falsificar tu identidad</li>
          <li>Intentar hackear, interrumpir o hacer ingeniería inversa del Sitio</li>
          <li>Extraer o recolectar datos automáticamente</li>
          <li>Revender productos sin autorización por escrito</li>
        </ul>

        <h2 className="text-2xl font-serif text-cream mt-10">11. Exención de Garantías</h2>
        <p>
          El Sitio y sus productos se proporcionan <strong>"TAL COMO ESTÁN"</strong> sin garantía de ningún
          tipo, expresa o implícita, excepto donde la ley lo prohíba.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">12. Limitación de Responsabilidad</h2>
        <p>
          En la medida máxima permitida por ley, nuestra responsabilidad total por cualquier reclamo se limita
          al monto que pagaste en los <strong>12 meses</strong> previos al reclamo. No somos responsables por
          daños indirectos, incidentales, especiales o consecuentes.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">13. Ley Aplicable</h2>
        <p>
          Estos Términos se rigen por las leyes del <strong>Estado de [estado]</strong>, Estados Unidos. Las
          disputas se resolverán en las cortes de [condado], [estado].
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">14. Cambios a los Términos</h2>
        <p>
          Podemos actualizar estos Términos. El uso continuado tras los cambios constituye aceptación.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">15. Contacto</h2>
        <address className="not-italic">
          Email: <strong>[correo]</strong><br />
          Teléfono: <strong>[teléfono]</strong>
        </address>
      </section>
    </div>
  )
}
