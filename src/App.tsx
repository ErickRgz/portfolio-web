import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'
import { Timeline } from './components/Timeline'

export default function App() {
  return (
    <>
      <Header />
      <main id="content">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
