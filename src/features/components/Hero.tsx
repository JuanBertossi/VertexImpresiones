import heroImg from '@/shared/assets/hero.jpg'
import { getWhatsAppLink } from '@/shared/lib/whatsapp'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Impresión 3D · Córdoba, Argentina</div>
          <h1>
            De la idea a la
            <br />
            pieza en tus <em>manos</em>.
          </h1>
          <p className="hero-sub">
            Repuestos, souvenirs, jarras y objetos de diseño: mandás la idea por WhatsApp y en
            pocos días la tenés.
          </p>

          <div className="hero-badges">
            <span className="badge badge-quote">Presupuesto sin cargo</span>
            <span className="badge badge-response">Respuesta en el día</span>
            <span className="badge badge-shipping">Envíos a todo el país</span>
            <span className="badge">Respondo de 9 a 21</span>
          </div>

          <div className="hero-actions">
            <a
              className="btn-primary"
              href={getWhatsAppLink('Hola Vertex! Vi la página y quería consultar por una pieza.')}
              target="_blank"
              rel="noopener"
            >
              Escribir por WhatsApp →
            </a>
            <a className="btn-secondary" href="#trabajos">
              Ver trabajos
            </a>
          </div>
          <p className="hero-note">No necesitás tener un archivo 3D. Con una foto o un dibujo alcanza.</p>
        </div>

        <div className="hero-visual">
          <span className="coord-tag coord-tl">X:120 Y:80 Z:45</span>
          <span className="coord-tag coord-br">VERTEX.STL</span>
          <img src={heroImg} alt="Llaveros personalizados impresos en 3D por Vertex" />
        </div>
      </div>
    </section>
  )
}
