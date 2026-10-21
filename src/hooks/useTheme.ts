import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'
const THEME_COLOR: Record<Theme, string> = { dark: '#0c1424', light: '#eef2f6' }

/** O tema escuro é o padrão; a escolha do visitante fica salva no navegador. */
function readInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // Armazenamento indisponível: segue com o padrão.
  }
  return 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLOR[theme])
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Sem armazenamento: o tema vale só nesta visita.
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggle }
}
