import type { CSSProperties } from 'react'
import { profile } from '../data/profile'

/** Delay of the one-time entrance sequence (see .hero-line in components.css). */
const step = (index: number) => ({ '--i': index }) as CSSProperties

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <h1 id="hero-title" className="hero-title">
          <span className="hero-hello hero-line" style={step(0)}>
            {profile.greeting}
          </span>
          <span className="hero-name hero-line" style={step(1)}>
            {profile.name}
          </span>
        </h1>
        <p className="hero-role hero-line" style={step(2)}>
          {profile.role}
        </p>
        <p className="hero-course hero-line" style={step(3)}>
          {profile.course}
        </p>

        <div className="hero-actions hero-line" style={step(4)}>
          <a className="btn btn-primary" href="#contact">
            Contact me
          </a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        <p className="hero-status hero-line" style={step(5)}>
          <span className="status-dot" aria-hidden="true" />
          {profile.status}
        </p>
      </div>
    </section>
  )
}
