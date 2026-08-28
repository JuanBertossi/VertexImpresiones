import { getWhatsAppLink } from '@/shared/lib/whatsapp'
import { WhatsAppIcon } from './icons/WhatsAppIcon'
import './WhatsAppFloat.css'

export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={getWhatsAppLink('Hola Vertex! Quería consultar por un trabajo de impresión 3D.')}
      target="_blank"
      rel="noopener"
      aria-label="Escribir por WhatsApp"
      title="Escribir por WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  )
}
