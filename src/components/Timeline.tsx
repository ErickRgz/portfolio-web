import { timeline } from '../data/timeline'
import { Section } from './Section'

/**
 * Journey drawn as a Git history:
 * the main line is work; the green branch is education.
 */
export function Timeline() {
  return (
    <Section
      id="journey"
      title="Journey"
      intro="Newest first, like a git log of my career. Green is education, the main line is work."
    >
      <ol className="timeline">
        {timeline.map((entry, index) => {
          const previous = timeline[index - 1]
          const next = timeline[index + 1]
          const isBranch = entry.lane === 'branch'
          const isBranchTop = isBranch && previous?.lane !== 'branch'
          const isBranchBottom = isBranch && next?.lane !== 'branch'

          const classes = [
            'tl-item',
            isBranch ? 'tl-branch' : 'tl-main',
            isBranchTop ? 'is-top' : '',
            isBranchBottom ? 'is-bottom' : '',
          ]
            .filter(Boolean)
            .join(' ')

          return (
            <li key={`${entry.date}-${entry.title}`} className={classes}>
              <div className="tl-graph" aria-hidden="true">
                {(isBranchTop || isBranchBottom) && <span className="tl-connector" />}
                <span className="tl-node" />
              </div>
              <div className="tl-body">
                <p className="tl-meta">
                  <time>{entry.date}</time>
                  {entry.tag && <span className="tl-tag">{entry.tag}</span>}
                </p>
                <h3 className="tl-title">{entry.title}</h3>
                <p className="tl-place">{entry.place}</p>
                <p className="tl-desc">{entry.description}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
