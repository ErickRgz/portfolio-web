import type { TimelineEntry } from '../types'

/**
 * Order: newest first (like a `git log`).
 * lane "main"   -> work and career
 * lane "branch" -> education
 */
export const timeline: TimelineEntry[] = [
  {
    date: 'Present',
    title: 'Data Intern',
    place: 'AlmapBBDO',
    description:
      'Extracting and organizing data to validate metrics, supporting analysis, maintaining dashboards, and helping with the area’s operational routines.',
    lane: 'main',
    tag: 'HEAD',
  },
  {
    date: '2025 – 2027',
    title: 'Systems Analysis and Development',
    place: 'FIAP, 3rd semester',
    description:
      'Programming logic, object-oriented programming in Java, REST APIs with Spring Boot, SQL databases, and web development.',
    lane: 'branch',
  },
  {
    date: 'Feb 2024 – Mar 2026',
    title: 'Administrative Assistant',
    place: '6º Cartório de Protesto, São Paulo',
    description:
      'Analyzed credit instruments and documentation, handled administrative routines and customer service, and organized and checked records.',
    lane: 'main',
  },
  {
    date: '2024',
    title: 'High school diploma',
    place: 'Escola Jardim Pedra Branca',
    description: 'Completed high school before starting at FIAP.',
    lane: 'branch',
  },
]
