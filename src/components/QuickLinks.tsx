const items = [
  { href: '#projects', label: 'Proyectos' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#contact', label: 'Contacto' },
]

export function QuickLinks() {
  return (
    <section className="dot-grid border-y-2 border-ink px-5 py-12 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-5 text-2xl font-bold tracking-tight md:text-3xl">Enlaces rápidos</h2>

        <div className="grid grid-cols-1 divide-y-2 divide-ink overflow-hidden border-2 border-ink bg-paper hard-shadow sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {items.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`group flex items-start justify-between gap-3 px-5 py-5 text-lg font-semibold transition-colors hover:bg-ink hover:text-paper ${
                i % 2 === 1 ? 'sm:border-l-2 sm:border-ink' : ''
              } ${i > 0 ? 'lg:border-l-2 lg:border-ink' : ''} ${
                i >= 2 ? 'sm:border-t-2 sm:border-ink lg:border-t-0' : ''
              }`}
            >
              <span>{item.label}</span>
              <span
                className="text-xl transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
