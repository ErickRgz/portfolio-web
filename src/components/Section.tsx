import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  intro?: string
  children: ReactNode
}

/** Layout padrão das seções: título à esquerda, conteúdo à direita. */
export function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container section-grid">
        <header className="section-head">
          <h2 id={`${id}-title`} className="section-title">
            {title}
          </h2>
          {intro && <p className="section-intro">{intro}</p>}
        </header>
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}
