import { useTranslation } from 'react-i18next'
import styles from '../styles/legal.module.css'

interface Subsection {
  title: string
  list: string[]
}

interface TableData {
  headers: string[]
  rows: string[][]
}

interface Section {
  title: string
  content: string
  list?: string[]
  subsections?: Subsection[]
  table?: TableData
}

export function PrivacyPage() {
  const { t } = useTranslation()
  const sections = t('privacy.sections', { returnObjects: true }) as Section[]

  return (
    <div className={styles.legalPage}>
      <h1>{t('privacy.title')}</h1>
      <p className={styles.lastUpdated}>{t('privacy.lastUpdated')}</p>

      <p>{t('privacy.intro')}</p>

      {sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>

          {section.subsections && section.subsections.map((sub, i) => (
            <div key={i}>
              <h3>{sub.title}</h3>
              <ul>
                {sub.list.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {section.list && (
            <ul>
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {section.table && (
            <table>
              <thead>
                <tr>
                  {section.table.headers.map((header, i) => (
                    <th key={i}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  )
}
