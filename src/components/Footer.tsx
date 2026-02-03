import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'

export function Footer() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { sectionId: 'features', labelKey: 'nav.features' },
    { sectionId: 'how-it-works', labelKey: 'nav.howItWorks' },
    { sectionId: 'pricing', labelKey: 'nav.pricing' },
  ]

  const legalItems = [
    { to: '/support', labelKey: 'footer.support' },
    { to: '/terms', labelKey: 'footer.terms' },
    { to: '/privacy', labelKey: 'footer.privacy' },
  ]

  const handleNavClick = (sectionId: string) => {
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
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
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
        </div>
        <div className={styles.middle}>
          <nav className={styles.legalNav}>
            {legalItems.map((item) => (
              <Link key={item.to} to={item.to} className={styles.legalLink}>
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
