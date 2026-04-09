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
        className="flex-1 bg-dark border border-dark-border text-cream placeholder-cream-muted px-4 py-3 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm"
      />
      <button type="submit" className="btn-gold whitespace-nowrap">
        Suscribirse
      </button>
    </form>
  )
}
