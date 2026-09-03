import { MapPin } from "lucide-react";
import { Map, MapMarker, MarkerContent } from "@/shared/components/ui/map";
import { Reveal } from "@/shared/components/Reveal";
import { getWhatsAppLink } from "@/shared/lib/whatsapp";
import "./Contact.css";

const ADDRESS_LAT = -31.4313101;
const ADDRESS_LNG = -64.1898499;

const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${ADDRESS_LAT},${ADDRESS_LNG}`;

const MAP_CENTER: [number, number] = [ADDRESS_LNG, ADDRESS_LAT];

export function Contact() {
  return (
    <section className="section" style={{ borderBottom: "none" }}>
      <div className="wrap contact">
        <Reveal>
          <div className="eyebrow">Contacto</div>
          <h2>Contame qué necesitás.</h2>
          <p>
            Respondo por WhatsApp de 9 a 21, todos los días. Trabajo en Córdoba
            y alrededores, y envío a todo el país.
          </p>
          <a
            className="btn-primary contact-whatsapp"
            href={getWhatsAppLink(
              "Hola Vertex! Vi la página y quería hacer una consulta.",
            )}
            target="_blank"
            rel="noopener"
          >
            Escribir por WhatsApp →
          </a>

          <div className="contact-links">
            <a
              className="clink"
              href="https://www.instagram.com/vertex.3d_"
              target="_blank"
              rel="noopener"
            >
              <span>Instagram</span>
              <span>@vertex.3d_ →</span>
            </a>
            <a
              className="clink"
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener"
            >
              <span>Cómo llegar</span>
              <span>Pasaje España 1306, Córdoba →</span>
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="loc">
            <Map className="loc-map" center={MAP_CENTER} zoom={15}>
              <MapMarker longitude={ADDRESS_LNG} latitude={ADDRESS_LAT}>
                <MarkerContent>
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener"
                    aria-label="Abrir en Google Maps"
                    className="loc-pin"
                  >
                    <MapPin className="fill-black stroke-white" size={28} />
                  </a>
                </MarkerContent>
              </MapMarker>
            </Map>
            <div className="loc-body">
              <span className="loc-eyebrow">Dirección</span>
              <p className="loc-addr">Pasaje España 1306</p>
              <p className="loc-city">Córdoba Capital, Argentina</p>
              <div className="loc-rule" />
              <p className="loc-hours">Todos los días, de 9 a 21</p>
              <a
                className="btn-primary loc-btn"
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener"
              >
                Abrir en Google Maps →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
