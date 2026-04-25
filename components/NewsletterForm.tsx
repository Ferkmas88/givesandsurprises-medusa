'use client'

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={e => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="tu@email.com"
        className="flex-1 bg-white border border-coral-soft text-olive placeholder-olive-muted px-4 py-3 rounded-full focus:outline-none focus:border-coral transition-colors text-sm"
      />
      <button type="submit" className="btn-gold whitespace-nowrap">
        Suscribirse
      </button>
    </form>
  )
}
