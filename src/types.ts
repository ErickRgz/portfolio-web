export type TimelineLane = 'main' | 'branch'

export interface TimelineEntry {
  date: string
  title: string
  place: string
  description: string
  /** 'main' = work and career · 'branch' = education and studies */
  lane: TimelineLane
  /** Optional badge, e.g. "HEAD" for the current moment */
  tag?: string
}

export interface Project {
  year: string
  title: string
  description: string
  tags: string[]
  repo?: string
  demo?: string
}

export interface StackGroup {
  label: string
  items: string[]
}

export interface Profile {
  name: string
  greeting: string
  role: string
  course: string
  location: string
  status: string
  email: string
  github: string
  linkedin: string
  about: string[]
}
