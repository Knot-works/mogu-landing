import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '../components/ScrollReveal'
import { Sparkles } from '../components/ui/Sparkles'
import styles from './CTA.module.css'

export function CTA() {
  const { t } = useTranslation()

  return (
    <section className={styles.cta}>
      <Sparkles
        particleColor="rgba(255, 255, 255, 0.6)"
        particleCount={40}
        minSize={1}
        maxSize={2}
        speed={0.3}
      />
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.content}>
            <div className={styles.iconWrapper}>
              <img src="/images/app_icon.png" alt="mogu" className={styles.moguIcon} />
            </div>
            <h2 className={styles.title}>{t('cta.title')}</h2>
            <p className={styles.description}>{t('cta.description')}</p>
            <a href="#" className={styles.button}>
              {t('cta.button')}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
