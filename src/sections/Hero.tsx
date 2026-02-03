import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '../components/ScrollReveal'
import { FlipWords } from '../components/ui/FlipWords'
import { TextGenerateEffect } from '../components/ui/TextGenerateEffect'
import styles from './Hero.module.css'

export function Hero() {
  const { t, i18n } = useTranslation()

  const moodWords = i18n.language === 'ja'
    ? ['ガッツリ', 'さっぱり', '時短', 'ヘルシー']
    : ['hearty', 'light', 'quick', 'healthy']

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ScrollReveal delay={0}>
            <span className={styles.label}>{t('hero.label')}</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className={styles.title}>{t('hero.title')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className={styles.subtitle}>
              <TextGenerateEffect words={t('hero.subtitle')} duration={0.4} />
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className={styles.ctaGroup}>
              <a href="#" className={styles.ctaButton}>
                {t('hero.cta')}
              </a>
              <span className={styles.ctaSub}>{t('hero.ctaSub')}</span>
            </div>
          </ScrollReveal>
        </div>
        <div className={styles.visual}>
          <div className={styles.chatBubbles}>
            <div className={styles.bubbleAi}>
              <img src="/images/app_icon.png" alt="mogu" className={styles.moguIcon} />
              <span>{i18n.language === 'ja' ? '今日の気分は？' : "What's your mood?"}</span>
            </div>
            <div className={styles.bubbleOptions}>
              <FlipWords words={moodWords} duration={2000} className={styles.flipWord} />
            </div>
            <div className={styles.bubbleUser}>
              {i18n.language === 'ja' ? 'さっぱりで！' : 'Light, please!'}
            </div>
            <div className={styles.bubbleAi}>
              <img src="/images/app_icon.png" alt="mogu" className={styles.moguIcon} />
              <span>{i18n.language === 'ja' ? 'こんなのどう？' : 'How about this?'}</span>
            </div>
            <div className={styles.suggestion}>
              <span className={styles.dishIcon}>🥗</span>
              <span>{i18n.language === 'ja' ? '豚しゃぶサラダ' : 'Pork Shabu Salad'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
