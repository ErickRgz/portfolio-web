import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Open code you can read, run, and review.">
      {projects.length === 0 ? (
        <div className="empty-state">
          <p>My first projects are on their way. Meanwhile, you can follow my code on GitHub.</p>
          <a className="btn btn-primary" href={profile.github} target="_blank" rel="noreferrer">
            View my GitHub
          </a>
        </div>
      ) : (
        <ul className="project-list">
          {projects.map((project) => (
            <li className="project" key={project.title}>
              <p className="project-year">{project.year}</p>
              <div className="project-main">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <ul className="tag-list" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <p className="project-links">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      View code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Open demo
                    </a>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
