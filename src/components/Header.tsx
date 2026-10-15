const links = [
  { href: '#projects', label: 'Proyectos' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#contact', label: 'Contacto' },
]

export function Header() {
  return (
    <header className="border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="Inicio">
          <img
            src="/bee-logo.png"
            alt=""
            className="h-10 w-10 border-2 border-ink bg-[#ffcc0f] object-contain hard-shadow"
          />
          <span className="hidden text-sm font-bold tracking-tight sm:inline">anderson.dev</span>
        </a>

        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-sm font-semibold md:gap-x-7 md:text-base">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
