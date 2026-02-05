import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import styles from './Header.module.css'

export function Header() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { sectionId: 'features', labelKey: 'nav.features' },
    { sectionId: 'how-it-works', labelKey: 'nav.howItWorks' },
    { sectionId: 'pricing', labelKey: 'nav.pricing' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isMobileMenuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <img src="/images/mogu_logo2.png" alt="mogu" className={styles.logoImage} />
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => handleNavClick(item.sectionId)}
              className={styles.navLink}
            >
              {t(item.labelKey)}
            </button>
          ))}
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher />
          <button
            className={`${styles.menuButton} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          {navItems.map((item, index) => (
            <button
              key={item.sectionId}
              onClick={() => handleNavClick(item.sectionId)}
              className={styles.mobileNavLink}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {t(item.labelKey)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
