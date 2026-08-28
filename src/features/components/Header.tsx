import { getWhatsAppLink } from '@/shared/lib/whatsapp'
import './Header.css'

export function Header() {
  return (
    <header>
      <nav>
        <a href="#" className="logo" aria-label="Vertex, inicio">
          <span className="logo-dot" />
          VERTEX
        </a>
        <a
          className="nav-cta"
          href={getWhatsAppLink('Hola Vertex! Vi la página y quería pedir un presupuesto.')}
          target="_blank"
          rel="noopener"
        >
          Pedir presupuesto →
        </a>
      </nav>
    </header>
  )
}
