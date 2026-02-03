import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '../components/ScrollReveal'
import styles from './HowItWorks.module.css'

export function HowItWorks() {
  const { t } = useTranslation()

  const steps = [
    { key: 'mood', emoji: '😊' },
    { key: 'category', emoji: '🍖' },
    { key: 'decide', emoji: '✨' },
  ]

  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>{t('howItWorks.label')}</span>
            <h2 className={styles.title}>{t('howItWorks.title')}</h2>
          </div>
        </ScrollReveal>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <ScrollReveal key={step.key} delay={index * 150}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepEmoji}>{step.emoji}</div>
                <h3 className={styles.stepTitle}>
                  {t(`howItWorks.steps.${step.key}.title`)}
                </h3>
                <p className={styles.stepDescription}>
                  {t(`howItWorks.steps.${step.key}.description`)}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.connector} />
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
