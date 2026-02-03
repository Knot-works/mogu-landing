import { Hero } from '../sections/Hero'
import { Features } from '../sections/Features'
import { HowItWorks } from '../sections/HowItWorks'
import { Pricing } from '../sections/Pricing'
import { CTA } from '../sections/CTA'

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
    </>
  )
}
