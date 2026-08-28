import { Header } from '@/features/components/Header'
import { Hero } from '@/features/components/Hero'
import { Trust } from '@/features/components/Trust'
import { Gallery } from '@/features/components/Gallery'
import { Process } from '@/features/components/Process'
import { Materials } from '@/features/components/Materials'
import { Reviews } from '@/features/components/Reviews'
import { Faq } from '@/features/components/Faq'
import { Contact } from '@/features/components/Contact'
import { Footer } from '@/features/components/Footer'
import { WhatsAppFloat } from '@/shared/components/WhatsAppFloat'

export function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <Trust />
      <Gallery />
      <Process />
      <Materials />
      <Reviews />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
