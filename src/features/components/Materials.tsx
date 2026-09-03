import { Reveal } from '@/shared/components/Reveal'
import './Materials.css'
import coloresImg from '@/shared/assets/Colores.jpeg'

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

export function Materials() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Materiales y colores</div>
          <h2>Con qué se imprime.</h2>
          <p>Elegimos el material según para qué es la pieza. Si no sabés cuál te sirve, lo vemos juntos.</p>
        </Reveal>

        <div className="materials-layout">
          <Reveal className="materials-grid">
            {MATERIALS.map((material) => (
              <div className="materials-item" key={material.name}>
                <h3>
                  {material.name} <code>{material.tag}</code>
                </h3>
                <p>{material.desc}</p>
              </div>
            ))}
          </Reveal>

          <div className="colores-img">
            <img src={coloresImg} alt="Colores de impresión" />
          </div>
        </div>
      </div>
    </section>
  )
}