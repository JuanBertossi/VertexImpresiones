import { Reveal } from '@/shared/components/Reveal'
import './Materials.css'

const MATERIALS = [
  {
    name: 'PLA',
    tag: 'estándar',
    desc: 'Buen detalle y muchísimos colores. Ideal para souvenirs, llaveros, figuras y decoración.',
  },
  {
    name: 'PETG',
    tag: 'resistente',
    desc: 'Aguanta golpes, calor y humedad. Para repuestos, piezas que trabajan y cosas que van a la intemperie.',
  },
  {
    name: 'Diseño 3D',
    tag: 'a pedido',
    desc: '¿No tenés el archivo? Lo modelamos desde una foto, un plano o la misma pieza rota que tengas.',
  },
]

const COLORS = [
  { color: '#15171B', title: 'Negro' },
  { color: '#FFFFFF', title: 'Blanco' },
  { color: '#C9CDD2', title: 'Gris' },
  { color: '#D62828', title: 'Rojo' },
  { color: '#FF5A1F', title: 'Naranja' },
  { color: '#F7C548', title: 'Amarillo' },
  { color: '#2A9D5C', title: 'Verde' },
  { color: '#1D6FB8', title: 'Azul' },
  { color: '#7ED8E8', title: 'Celeste' },
  { color: '#8B5CF6', title: 'Violeta' },
  { color: '#E27DA8', title: 'Rosa' },
  { color: 'linear-gradient(135deg,#B8B8B8,#EDEDED,#9A9A9A)', title: 'Plateado' },
]

export function Materials() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Materiales y colores</div>
          <h2>Con qué se imprime.</h2>
          <p>Elegimos el material según para qué es la pieza. Si no sabés cuál te sirve, lo vemos juntos.</p>
        </Reveal>

        <Reveal className="mat-grid">
          {MATERIALS.map((material) => (
            <div className="mat-card" key={material.name}>
              <h3>
                {material.name} <code>{material.tag}</code>
              </h3>
              <p>{material.desc}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="swatch-row">
          <span className="swatch-note">Colores:</span>
          <div className="swatches">
            {COLORS.map((c) => (
              <span className="sw" style={{ background: c.color }} title={c.title} key={c.title} />
            ))}
            <span className="sw-more">+ el que necesites</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
