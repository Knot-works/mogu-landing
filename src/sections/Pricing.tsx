import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '../components/ScrollReveal'
import styles from './Pricing.module.css'

export function Pricing() {
  const { t } = useTranslation()

  const plans = [
    { key: 'free', featured: false },
    { key: 'premium', featured: true },
    { key: 'annual', featured: false },
  ]

  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>{t('pricing.label')}</span>
            <h2 className={styles.title}>{t('pricing.title')}</h2>
          </div>
        </ScrollReveal>

        <div className={styles.plans}>
          {plans.map((plan, index) => {
            const features = t(`pricing.${plan.key}.features`, { returnObjects: true }) as string[]
            return (
              <ScrollReveal key={plan.key} delay={index * 100}>
                <div className={`${styles.plan} ${plan.featured ? styles.featured : ''}`}>
                  {plan.key === 'premium' && (
                    <span className={styles.badge}>{t('pricing.premium.popular')}</span>
                  )}
                  {plan.key === 'annual' && (
                    <span className={styles.badgeDiscount}>{t('pricing.annual.discount')}</span>
                  )}
                  <h3 className={styles.planName}>{t(`pricing.${plan.key}.name`)}</h3>
                  <div className={styles.priceWrapper}>
                    <span className={styles.price}>{t(`pricing.${plan.key}.price`)}</span>
                    <span className={styles.unit}>{t(`pricing.${plan.key}.unit`)}</span>
                  </div>
                  <ul className={styles.featureList}>
                    {features.map((feature, i) => (
                      <li key={i} className={styles.featureItem}>
                        <span className={styles.checkmark}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`${styles.planButton} ${plan.featured ? styles.primaryButton : ''}`}
                  >
                    {t(`pricing.${plan.key}.cta`)}
                  </a>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
