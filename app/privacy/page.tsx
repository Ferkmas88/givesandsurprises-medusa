import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Gives & Surprises Store',
  description: 'Política de privacidad de Gives & Surprises Store. Cómo protegemos tu información personal.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-serif mb-2 text-cream">Política de Privacidad</h1>
      <p className="text-sm text-cream/60 mb-10">Última actualización: 13 de Abril, 2026</p>

      <section className="prose prose-invert max-w-none space-y-6 text-cream/90">
        <p>
          Gives & Surprises Store ("nosotros"), operando <strong>giveandsurprisesstore.com</strong>, valora tu
          privacidad. Esta Política explica qué información personal recopilamos, cómo la usamos y tus derechos.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">1. Información que Recopilamos</h2>
        <p>Cuando navegas, creas una cuenta o haces un pedido, recopilamos:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Nombre completo, correo electrónico, teléfono</li>
          <li>Dirección de envío y facturación</li>
          <li>Historial de pedidos y preferencias de productos</li>
          <li>Información técnica: IP, tipo de navegador, dispositivo, páginas visitadas</li>
        </ul>
        <p>
          <strong>Información de pago:</strong> NO almacenamos números de tarjeta ni CVV en nuestros servidores.
          Los pagos se procesan a través de Stripe, un procesador certificado PCI-DSS Level 1. Solo recibimos
          un token de confirmación.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">2. Cómo Usamos tu Información</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Procesar y cumplir tus pedidos</li>
          <li>Enviar confirmaciones, notificaciones de envío y actualizaciones de entrega</li>
          <li>Brindar atención al cliente y responder consultas</li>
          <li>Manejar devoluciones, reembolsos e intercambios</li>
          <li>Prevenir fraude y cumplir con leyes fiscales y comerciales</li>
          <li>Enviar correos promocionales solo si optas por ello</li>
        </ul>

        <h2 className="text-2xl font-serif text-cream mt-10">3. Compartir Información</h2>
        <p>
          <strong>NO</strong> vendemos ni rentamos tu información personal. Solo compartimos datos con:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Stripe</strong> para procesar pagos</li>
          <li><strong>Transportistas</strong> (USPS, UPS, FedEx) para entregar tu pedido</li>
          <li><strong>Proveedores de email</strong> para enviar notificaciones</li>
          <li><strong>Autoridades legales</strong> cuando la ley lo requiera</li>
          <li><strong>Proveedores de servicio</strong> (hosting: Vercel)</li>
        </ul>

        <h2 className="text-2xl font-serif text-cream mt-10">4. Cookies</h2>
        <p>
          Usamos <strong>cookies esenciales</strong> para el carrito de compras, sesión y checkout. Son
          requeridas para que el sitio funcione. <strong>No usamos</strong> Google Analytics, Meta Pixel ni
          cookies publicitarias. Si los agregamos en el futuro, actualizaremos esta política y agregaremos
          un banner de consentimiento.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">5. Retención de Datos</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Registros de pedidos: <strong>7 años</strong> (cumplimiento fiscal)</li>
          <li>Información de cuenta: hasta que solicites eliminación o tras 3 años de inactividad</li>
          <li>Datos de envío: 2 años</li>
          <li>Mensajes de atención al cliente: 2 años</li>
        </ul>

        <h2 className="text-2xl font-serif text-cream mt-10">6. Tus Derechos (CCPA — Residentes de California)</h2>
        <p>Si eres residente de California, tienes derecho a:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Saber</strong> qué información personal recopilamos</li>
          <li><strong>Acceder</strong> a una copia de tu información personal</li>
          <li><strong>Eliminar</strong> tu información personal (sujeto a retención legal)</li>
          <li><strong>Optar por no vender</strong> tu información personal (no vendemos datos)</li>
          <li><strong>No discriminación</strong> por ejercer estos derechos</li>
        </ul>
        <p>Para ejercer cualquiera de estos derechos, escríbenos a: <strong>[correo]</strong></p>

        <h2 className="text-2xl font-serif text-cream mt-10">7. Privacidad de Menores</h2>
        <p>
          Nuestra tienda no está dirigida a menores de 13 años. No recopilamos información de menores de
          forma consciente.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">8. Seguridad</h2>
        <p>
          Usamos cifrado HTTPS en todo el sitio. Los pagos los procesa Stripe (PCI-DSS Level 1). No
          almacenamos datos de tarjetas en nuestros servidores.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">9. Cambios a esta Política</h2>
        <p>
          Podemos actualizar esta política. La fecha de "Última actualización" refleja la versión vigente.
          Si los cambios son materiales, notificaremos a clientes activos por email.
        </p>

        <h2 className="text-2xl font-serif text-cream mt-10">10. Contacto</h2>
        <address className="not-italic">
          <strong>Gives & Surprises Store</strong><br />
          Email: <strong>[correo]</strong><br />
          Teléfono: <strong>[teléfono]</strong><br />
          Dirección: <strong>[dirección]</strong>
        </address>
      </section>
    </div>
  )
}
