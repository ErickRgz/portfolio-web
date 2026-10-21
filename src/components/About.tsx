import { profile } from '../data/profile'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" title="About me">
      <div className="prose">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
