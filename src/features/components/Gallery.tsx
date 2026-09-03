import repuestoImg from "@/shared/assets/repuesto-engranaje.jpg";
import llaverosImg from "@/shared/assets/llaveros-cumple.jpg";
import jarraImg from "@/shared/assets/jarras.jpeg";
import macetasImg from "@/shared/assets/macetas-deco.jpg";
import { Reveal } from "@/shared/components/Reveal";
import { GalleryCard } from "./GalleryCard";
import "./Gallery.css";

const PRODUCTS = [
  {
    image: repuestoImg,
    alt: "Engranaje de repuesto impreso en 3D junto a la pieza original gastada",
    tag: "Repuestos",
    label: "La pieza que ya no se consigue",
    note: "Se te rompió un engranaje, una traba, una manija, y el repuesto no existe más. Mandás una foto con una medida y la imprimo en material más resistente que el original.",
  },
  {
    image: llaverosImg,
    alt: "Llaveros personalizados con nombre impresos en 3D para cumpleaños",
    tag: "Souvenirs",
    label: "Llaveros para cumpleaños",
    note: "Con el nombre, la edad y el personaje que elijas, en los colores del cumple. Se hacen por cantidad y tienen precio especial a partir de las 10 unidades.",
  },
  {
    image: jarraImg,
    alt: "Jarra térmica personalizada con logo impresa en 3D",
    tag: "Equipos y marcas",
    label: "Jarras con tu escudo",
    note: "El logo de tu club, tu equipo o tu negocio en relieve y a varios colores. El regalo que siempre funciona para el grupo o para los clientes.",
  },
  {
    image: macetasImg,
    alt: "Macetas decorativas con forma de pelota impresas en 3D",
    tag: "Deco y regalos",
    label: "Objetos de diseño",
    note: "Macetas, adornos, organizadores y regalos con forma de lo que se te ocurra. Si lo viste en algún lado, probablemente se pueda imprimir.",
  },
];

export function Gallery() {
  return (
    <section className="section" id="trabajos">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Productos</div>
          <h2>Lo que más se pide.</h2>
          <p>
            Salió de la impresora para clientes reales — elegí lo que más se
            parezca a lo tuyo.
          </p>
        </Reveal>

        <Reveal className="gallery-grid">
          {PRODUCTS.map((product) => (
            <GalleryCard key={product.label} {...product} />
          ))}
        </Reveal>

        <Reveal className="gallery-foot">
          <p>
            <strong>¿Lo tuyo no está en la lista?</strong> Preguntá igual. Estos
            son los cuatro pedidos más comunes, pero la impresora hace
            prácticamente cualquier cosa.
          </p>
          <a
            className="btn-secondary"
            href="https://www.instagram.com/vertex.3d_"
            target="_blank"
            rel="noopener"
          >
            Ver más en Instagram →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
