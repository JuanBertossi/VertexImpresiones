import { Reveal } from "@/shared/components/Reveal";
import "./Materials.css";
import "./Reviews.css";

// Reseñas de ejemplo para mostrar el diseño terminado. Reemplazar por reseñas
// reales de Google Maps antes de publicar el sitio.
const REVIEWS = [
  {
    text: "Le mandé una foto de un engranaje roto de una juguera y en dos días la tenía impresa, encajó perfecto.",
    name: "Juan",
  },
  {
    text: "Pedimos 30 llaveros para el cumple de mi hijo con el personaje que quería, salieron re prolijos y llegaron a tiempo.",
    name: "Iliana",
  },
  {
    text: "Le llevé el logo de mi negocio y me hizo jarras térmicas para regalarle al equipo, quedaron mejor de lo que imaginaba.",
    name: "Ignacio",
  },
];

export function Reviews() {
  return (
    <section className="section reviews">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Reseñas</div>
          <h2>Lo que dicen los clientes</h2>
        </Reveal>
        <Reveal className="mat-grid">
          {REVIEWS.map((review) => (
            <div
              className="mat-card review-card"
              key={review.name + review.text}
            >
              <p>{review.text}</p>
              <p className="mono review-name">{review.name}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
