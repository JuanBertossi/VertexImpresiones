import { Reveal } from '@/shared/components/Reveal'
import './Faq.css'

const QUESTIONS = [
  {
    q: '¿Necesito tener un archivo 3D?',
    a: 'No. Con una foto, un dibujo hecho a mano o la pieza rota alcanza. Si hay que modelar el archivo desde cero lo hago yo y te lo aviso en el presupuesto.',
  },
  {
    q: '¿Cuánto tarda?',
    a: 'La mayoría de los trabajos salen entre 24 y 72 horas. Las piezas grandes o los pedidos por cantidad pueden llevar algunos días más. El plazo te lo confirmo siempre antes de arrancar.',
  },
  {
    q: '¿Hacen pedidos por cantidad?',
    a: 'Sí. Para souvenirs de cumpleaños, eventos, torneos o piezas repetidas hay precio por cantidad. Contame cuántas unidades necesitás y te armo el presupuesto.',
  },
  {
    q: '¿Hacen envíos?',
    a: 'Sí, envío a todo el país por correo o encomienda. En la zona también podés coordinar el retiro directamente conmigo.',
  },
]

export function Faq() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Preguntas</div>
          <h2>Antes de escribirme</h2>
        </Reveal>
        <Reveal as="div" className="faq">
          {QUESTIONS.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
