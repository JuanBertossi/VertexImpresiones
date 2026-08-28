import { Reveal } from '@/shared/components/Reveal'
import './Process.css'

const STEPS = [
  {
    title: 'Contás tu idea',
    desc: 'Mandás una foto, un dibujo o un archivo 3D por WhatsApp. Si no tenés archivo no hay problema, lo armamos juntos.',
  },
  {
    title: 'Presupuesto y plazo',
    desc: 'En el día te paso el costo y el tiempo de entrega. Si no te sirve no pasa nada: el presupuesto no tiene cargo.',
  },
  {
    title: 'Retirás o te la envío',
    desc: 'Coordinamos retiro en zona o envío a domicilio a todo el país, como te quede más cómodo.',
  },
]

export function Process() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Proceso</div>
          <h2>Cómo funciona</h2>
          <p>Tres pasos, todo por WhatsApp. Sin formularios ni vueltas.</p>
        </Reveal>
        <Reveal className="process">
          {STEPS.map((step, i) => (
            <div className="p-step" key={step.title}>
              <span className="p-dot">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
