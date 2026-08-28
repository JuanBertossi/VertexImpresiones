import './Trust.css'

const STATS = [
  { num: '24-72h', label: 'tiempo típico de entrega' },
  { num: 'PLA · PETG', label: 'materiales disponibles' },
  { num: '0,1 mm', label: 'precisión de capa' },
]

export function Trust() {
  return (
    <div className="wrap">
      <div className="trust">
        {STATS.map((stat) => (
          <div className="trust-item" key={stat.num}>
            <span className="trust-num">{stat.num}</span>
            <span className="trust-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
