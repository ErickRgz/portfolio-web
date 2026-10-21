import { stack } from '../data/stack'
import { Section } from './Section'

export function Stack() {
  return (
    <Section id="stack" title="Stack" intro="Tools and languages I work with.">
      <dl className="stack-grid">
        {stack.map((group) => (
          <div className="stack-group" key={group.label}>
            <dt>{group.label}</dt>
            <dd>{group.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
