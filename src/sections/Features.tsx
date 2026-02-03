import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faHeart, faUtensils, faListCheck } from '@fortawesome/free-solid-svg-icons'
import { ScrollReveal } from '../components/ScrollReveal'
import styles from './Features.module.css'

export function Features() {
  const { t } = useTranslation()

  const features = [
    {
      key: 'chat',
      icon: faComments,
    },
    {
      key: 'personalized',
      icon: faHeart,
    },
    {
      key: 'sideDish',
      icon: faUtensils,
    },
    {
      key: 'shoppingList',
      icon: faListCheck,
    },
  ]

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>{t('features.label')}</span>
            <h2 className={styles.title}>{t('features.title')}</h2>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <ScrollReveal key={feature.key} delay={index * 100}>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3 className={styles.cardTitle}>
                  {t(`features.items.${feature.key}.title`)}
                </h3>
                <p className={styles.cardDescription}>
                  {t(`features.items.${feature.key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
