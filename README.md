# frontend-landing

> **Tipo:** Landing page (single page, sin backend propio)
> **Stack:** React 19 + Vite + TypeScript
> **Arquitectura:** Feature-Based (simplificada)

Base reutilizable para landings de GoodApps. El nombre y el `package.json`
quedan siempre como `frontend-landing`: es una plantilla generica que se
clona/copia por proyecto, no se rebrandea in-place.

---

## Tech Stack

- **Core:** React 19, Vite, TypeScript (Strict Mode).
- **Routing:** React Router v7.
- **UI/Estilos:** TailwindCSS v4 (`@theme` en `shared/styles/global.css`).
- **Formularios:** React Hook Form + Zod (`@hookform/resolvers`).
- **Iconos:** `lucide-react` + iconos propios en `shared/components/icons`.
- **Utils de clases:** `clsx` + `tailwind-merge` + `class-variance-authority`.

---

## Estructura de directorios

```
src/
├── app/                    # Punto de entrada
│   ├── main.tsx            # createRoot + StrictMode
│   └── routes.tsx          # Router (createBrowserRouter)
│
├── features/                # Secciones de la landing (Hero, Beneficios, FAQ, etc.)
│   ├── components/          # Un archivo por seccion/bloque de la pagina
│   ├── hooks/                # Logica especifica de esas secciones
│   ├── schemas/              # Validacion Zod (ej: formulario de contacto)
│   ├── styles/                # CSS puntual que no entra en el design system global
│   └── views/                  # LandingPage.tsx (compone todas las secciones)
│
└── shared/                  # Reutilizable, agnostico al negocio
    ├── assets/               # Imagenes/fuentes estaticas
    ├── components/           # UI generica (ej: Reveal.tsx) + icons/
    ├── hooks/                # Hooks genericos (ej: useCountUp)
    ├── lib/                   # Helpers (ej: link de WhatsApp)
    └── styles/                 # global.css: tokens de color, tipografia, animaciones
```

Todas las carpetas de `features/` y `shared/` arrancan vacias: el contenido
de negocio (secciones reales, imagenes, copy) se agrega a mano por proyecto.

---

## Reglas

1. **Feature vs shared:** si un componente/hook se usa en mas de una seccion,
   se mueve a `shared/`. Si es especifico de una seccion, vive en `features/`.
2. **Formularios:** `react-hook-form` + `zod` (`features/schemas/`). Nada de
   `useState` campo por campo.
3. **Estilos:** los tokens (colores, radios, breakpoints) van en
   `shared/styles/global.css` via `@theme`; los componentes consumen esas
   variables, no hardcodean valores nuevos.
4. **Nomenclatura:**
   - Secciones/componentes: `PascalCase` → `Hero.tsx`, `Faq.tsx`
   - Hooks: `camelCase` + `use` → `useCountUp.ts`
   - Schemas: `camelCase` + `.schema` → `contact.schema.ts`

## Uso

```bash
pnpm install
pnpm dev         # http://localhost:5173
pnpm typecheck
pnpm build
```
