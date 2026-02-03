import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from '../styles/legal.module.css'

export function SupportPage() {
  const { t } = useTranslation()

  return (
    <div className={styles.legalPage}>
      <h1>{t('support.title')}</h1>
      <p className={styles.lastUpdated}>{t('support.lastUpdated')}</p>

      <div className={styles.contactBox}>
        <h3>{t('support.contactTitle')}</h3>
        <p>{t('support.contactDescription')}</p>
        <a href="mailto:support@knotwith.com" className={styles.emailLink}>support@knotwith.com</a>
        <p>{t('support.responseTime')}</p>
      </div>

      <h2>{t('support.faqTitle')}</h2>

      <div className={styles.faqItem}>
        <h4>{t('support.faq1.question')}</h4>
        <p>{t('support.faq1.answer')}</p>
      </div>

      <div className={styles.faqItem}>
        <h4>{t('support.faq2.question')}</h4>
        <p>{t('support.faq2.answer')}</p>
      </div>

      <div className={styles.faqItem}>
        <h4>{t('support.faq3.question')}</h4>
        <p>{t('support.faq3.answer')}</p>
      </div>

      <div className={styles.faqItem}>
        <h4>{t('support.faq4.question')}</h4>
        <p>{t('support.faq4.answer')}</p>
      </div>

      <h2>{t('nav.terms')} / {t('nav.privacy')}</h2>
      <ul>
        <li><Link to="/terms">{t('footer.terms')}</Link></li>
        <li><Link to="/privacy">{t('footer.privacy')}</Link></li>
      </ul>
    </div>
  )
}
