import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitcher.module.css'

const languages = [
  { code: 'ja', label: 'JP' },
  { code: 'en', label: 'EN' },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode)
  }

  return (
    <div className={styles.switcher}>
      {languages.map((lang, index) => (
        <span key={lang.code}>
          <button
            className={`${styles.button} ${i18n.language === lang.code ? styles.active : ''}`}
            onClick={() => handleLanguageChange(lang.code)}
            aria-label={`Switch to ${lang.label}`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className={styles.separator}>/</span>
          )}
        </span>
      ))}
    </div>
  )
}
