const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="Inicio">
          <span className="flex h-9 w-9 items-center justify-center border-2 border-ink bg-paper hard-shadow">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <rect x="3" y="4" width="18" height="12" fill="none" stroke="#000" strokeWidth="2" />
              <circle cx="12" cy="10" r="2.5" fill="#000" />
              <rect x="9" y="16" width="6" height="2" fill="#000" />
              <rect x="7" y="18" width="10" height="2" fill="#000" />
            </svg>
          </span>
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
