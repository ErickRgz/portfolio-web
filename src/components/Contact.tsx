import { useState } from 'react'
import { profile } from '../data/profile'
import { Section } from './Section'

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // No clipboard permission: the mailto link still works.
    }
  }

  return (
    <Section
      id="contact"
      title="Contact"
      intro="I'm looking for a software development internship. Let's talk."
    >
      <div className="contact">
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact-actions">
          <button type="button" className="btn btn-ghost" onClick={copyEmail}>
            {copied ? 'Email copied' : 'Copy email'}
          </button>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <p className="visually-hidden" role="status" aria-live="polite">
          {copied ? 'Email copied to the clipboard' : ''}
        </p>
      </div>
    </Section>
  )
}
