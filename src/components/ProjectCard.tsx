type ProjectCardProps = {
  filename: string
  title: string
  description: string
  tags: string[]
  href?: string
}

export function ProjectCard({ filename, title, description, tags, href = '#contact' }: ProjectCardProps) {
  return (
    <article className="flex flex-col border-2 border-ink bg-paper hard-shadow-lg transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-center justify-between border-b-2 border-ink bg-steel px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full border border-ink bg-paper" />
          <span className="h-3 w-3 rounded-full border border-ink bg-paper" />
        </div>
        <span className="font-mono text-[10px] tracking-wide text-ink/80 md:text-xs">{filename}</span>
      </div>

      <div className="relative aspect-[16/10] border-b-2 border-ink bg-mist">
        <ProjectThumb title={title} />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 md:p-5">
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        <p className="text-sm leading-relaxed text-ink/80">{description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span key={tag} className="border border-ink px-2 py-0.5 text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={href}
          className="btn-press mt-2 inline-flex w-fit border-2 border-ink px-4 py-2 text-sm font-semibold hard-shadow"
        >
          Ver proyecto
        </a>
      </div>
    </article>
  )
}

function ProjectThumb({ title }: { title: string }) {
  const isAi = title.toLowerCase().includes('ia') || title.toLowerCase().includes('ai')

  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
      <rect width="320" height="200" fill="#f5f5f5" />
      {isAi ? (
        <>
          <rect x="40" y="35" width="240" height="110" fill="#fff" stroke="#000" strokeWidth="3" />
          <circle cx="160" cy="85" r="28" fill="#000" />
          <circle cx="160" cy="85" r="12" fill="#fff" />
          <path d="M70 55 H100 M220 55 H250 M70 140 H110 M210 140 H250" stroke="#000" strokeWidth="2" />
          <rect x="120" y="155" width="80" height="12" fill="#000" />
        </>
      ) : (
        <>
          <rect x="30" y="30" width="100" height="70" fill="#fff" stroke="#000" strokeWidth="2.5" />
          <rect x="145" y="30" width="145" height="30" fill="#000" />
          <rect x="145" y="70" width="70" height="30" fill="#fff" stroke="#000" strokeWidth="2.5" />
          <rect x="225" y="70" width="65" height="30" fill="#d4d4d4" stroke="#000" strokeWidth="2.5" />
          <rect x="30" y="115" width="260" height="50" fill="#fff" stroke="#000" strokeWidth="2.5" />
          <line x1="50" y1="135" x2="200" y2="135" stroke="#000" strokeWidth="2" />
          <line x1="50" y1="148" x2="160" y2="148" stroke="#000" strokeWidth="2" />
        </>
      )}
    </svg>
  )
}
