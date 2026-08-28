import { getWhatsAppLink } from '@/shared/lib/whatsapp'
import './CtaBand.css'

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap cta-inner">
        <div>
          <h2>¿Tenés algo en mente?</h2>
          <p>Mandame una foto o contame la idea. El presupuesto es sin cargo y te respondo el mismo día.</p>
        </div>
        <a
          className="btn-primary"
          href={getWhatsAppLink(
            'Hola Vertex! Te escribo desde la página, quiero consultar por un trabajo.',
          )}
          target="_blank"
          rel="noopener"
        >
          Pedir presupuesto →
        </a>
      </div>
    </section>
  )
}
