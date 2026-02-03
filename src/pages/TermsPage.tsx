import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from '../styles/legal.module.css'

interface Section {
  title: string
  content: string
  list?: string[]
  note?: string
}

export function TermsPage() {
  const { t } = useTranslation()
  const sections = t('terms.sections', { returnObjects: true }) as Section[]

  return (
    <div className={styles.legalPage}>
      <h1>{t('terms.title')}</h1>
      <p className={styles.lastUpdated}>{t('terms.lastUpdated')}</p>

      <p>{t('terms.intro')}</p>

      {sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
          {section.list && (
            <ul>
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {section.note && (
            <blockquote>
              <p>{section.note}</p>
            </blockquote>
          )}
        </div>
      ))}

      <h2>{t('nav.privacy')}</h2>
      <p>
        <Link to="/privacy">{t('footer.privacy')}</Link>
      </p>
    </div>
  )
}
