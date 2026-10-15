import { Header } from './components/Header'
import { HeroIllustration } from './components/HeroIllustration'
import { ProjectCard } from './components/ProjectCard'
import { QuickLinks } from './components/QuickLinks'
import { profile, projects, skills, softSkills } from './data/content'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <Header />

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:gap-12 md:px-8 md:py-20">
        <div>
          <h1 className="animate-rise text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Hello. I&apos;m {profile.name}.
          </h1>
          <p className="animate-rise-delay-1 mt-5 max-w-md text-base leading-relaxed text-ink/85 md:text-lg">
            {profile.role} · {profile.school}. {profile.summary}
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="btn-press inline-flex border-2 border-ink bg-paper px-5 py-3 text-sm font-bold hard-shadow md:text-base"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="btn-press inline-flex border-2 border-ink bg-ink px-5 py-3 text-sm font-bold text-paper hard-shadow md:text-base"
            >
              Contactar
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <HeroIllustration />
        </div>
      </section>

      <QuickLinks />

      {/* Projects */}
      <section id="projects" className="dot-grid border-b-2 border-ink px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tight md:mb-10 md:text-4xl">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.filename} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b-2 border-ink bg-paper px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
          <div>
            <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl">About</h2>
            <p className="max-w-xl text-base leading-relaxed text-ink/85 md:text-lg">
              Soy <strong>{profile.fullName}</strong>, egresado de la carrera técnica superior en{' '}
              <strong>Ingeniería de Software con Inteligencia Artificial</strong> en SENATI.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/85 md:text-lg">
              Domino el ciclo completo: interfaces responsivas, APIs, bases de datos relacionales y no
              relacionales, e integración de modelos de IA. Me gusta aprender rápido, documentarme en
              fuentes oficiales y entregar código que el equipo pueda mantener.
            </p>
          </div>

          <aside className="border-2 border-ink bg-mist p-5 hard-shadow md:p-6">
            <h3 className="mb-4 text-lg font-bold">Soft skills</h3>
            <ul className="space-y-3">
              {softSkills.map((item) => (
                <li key={item} className="flex gap-3 text-sm md:text-base">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-ink" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="dot-grid border-b-2 border-ink px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Skills</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="border-2 border-ink bg-paper p-5 hard-shadow">
                <h3 className="mb-3 border-b-2 border-ink pb-2 text-lg font-bold">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="border-2 border-ink bg-mist px-2.5 py-1 text-xs font-semibold md:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-paper px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Find me</h2>
          <p className="mb-8 max-w-lg text-base text-ink/85 md:text-lg">
            ¿Buscas un Jr. Full Stack + IA con ganas de aportar desde el día uno? Hablemos.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={profile.email}
              className="btn-press inline-flex border-2 border-ink bg-paper px-5 py-3 font-bold hard-shadow"
            >
              Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn-press inline-flex border-2 border-ink bg-paper px-5 py-3 font-bold hard-shadow"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="btn-press inline-flex border-2 border-ink bg-ink px-5 py-3 font-bold text-paper hard-shadow"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-ink bg-mist px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm font-medium sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {profile.fullName}
          </span>
          <span className="text-ink/70">Built with React · Vite · Tailwind</span>
        </div>
      </footer>
    </div>
  )
}
