import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with React and TypeScript.</p>
      </div>
    </footer>
  )
}
