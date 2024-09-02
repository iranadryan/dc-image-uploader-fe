import { useThemeContext } from '../contexts/ThemeContext'
import { IconMoon } from './icons/IconMoon'
import { IconSun } from './icons/IconSun'
import { Logo } from './icons/Logo'

export function Header() {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <header className="flex h-18 w-full items-center justify-between border-b border-neutral-100 px-18 transition-all max-lg:px-8 max-sm:px-6 dark:border-neutral-800">
      <Logo />
      <button
        onClick={toggleTheme}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-100 bg-white transition-all dark:border-neutral-700 dark:bg-neutral-800"
      >
        {theme === 'light' ? <IconMoon /> : <IconSun />}
      </button>
    </header>
  )
}
