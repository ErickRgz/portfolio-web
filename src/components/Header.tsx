import { profile } from '../data/profile'
import { useTheme } from '../hooks/useTheme'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#journey', label: 'Journey' },
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const { theme, toggle } = useTheme()

  return (
    <header className="site-header">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="container header-inner">
        <a className="brand" href="#home">
          {profile.name}
        </a>
        <nav className="header-nav" aria-label="Main">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle theme={theme} onToggle={toggle} />
      </div>
    </header>
  )
}
