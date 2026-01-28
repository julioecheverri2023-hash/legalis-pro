# Resumen de Desarrollo: Proyectos NESTOR LEGAL & EDUAR PRO

Este documento sirve como base de conocimiento y contexto para futuros desarrollos, mantenimiento y escalamiento de las plataformas creadas en enero de 2026.

---

## 1. Visión General de los Proyectos

### 🏗️ NESTOR LEGAL (Gestión Técnica Legal)
- **Repositorio:** `https://github.com/julioecheverri2023-hash/legalis-pro`
- **Url En Vivo:** `https://legalis-pro.vercel.app`
- **Objetivo:** Sistema integral para abogados y técnicos legales que permite el seguimiento de casos, gestión financiera y consultoría mediante IA.

### 🐧 EDUAR PRO (Gestión Escolar - Grado Transición)
- **Repositorio:** `https://github.com/julioecheverri2023-hash/edugestion-transicion`
- **Url En Vivo:** `https://edugestion-transicion-finale.vercel.app`
- **Objetivo:** Plataforma para docentes de transición que centraliza la asistencia, notas, diario de campo y tesorería del salón.

---

## 2. Stack Tecnológico (Core)

| Tecnología | Uso |
| :--- | :--- |
| **React 19** | Biblioteca principal de UI (Interfaz de Usuario). |
| **TypeScript** | Lenguaje para tipado fuerte y reducción de errores. |
| **Vite** | Herramienta de construcción (bundler) ultra rápida. |
| **Tailwind CSS** | Framework de diseño para estilos modernos y responsivos. |
| **Lucide React** | Librería de iconos vectoriales. |
| **Google Gemini AI** | Motor de inteligencia artificial para los chatbots. |

---

## 3. Arquitectura del Código

Ambos proyectos siguen una estructura modular y limpia:

-   **/components**: Componentes reutilizables (Sidebar, Header, Chatbot).
-   **/views**: Vistas principales de cada módulo (Dashboard, Financiero, etc.).
-   **/controllers**: Lógica de integración con servicios externos (Generative AI).
-   **/types**: Definiciones de interfaces y enums para TypeScript (Rutas, Estudiantes, Casos).
-   **/public/assets**: Recursos visuales (Logos, Documentos, Imágenes).

---

## 4. Funcionalidades Clave Implementadas

### Módulos Legales (Nestor Legal)
- **Dashboard Legal:** Resumen de casos abiertos y vencimientos.
- **Módulo Penal:** Gestión técnica de expedientes.
- **Financiero & Inmobiliario:** Trackers especializados para contabilidad y predios.
- **Nestor AI:** Chatbot con contexto legal alimentado por Gemini.

### Módulos Escolares (Eduar Pro)
- **Fichas Estudiantes:** Datos básicos y acudientes.
- **Asistencia Automática:** Registro diario con estados (Presente/Ausente).
- **Boletín de Notas:** Generador de reportes académicos.
- **Diario de Campo:** Registro de actividades pedagógicas con fotos.
- **Tesorería Escolar:** Gestión de abonos y gastos del grado.

---

## 5. Personalización y Marca (Rebranding)

Ambos sistemas cuentan con identidad visual propia generada mediante IA:
- **Nestor Legal:** Escudo de autoridad en Oro y Azul Marino.
- **Eduar Pro:** Mascota "Eduar" (Pingüino 3D) con estilo educativo moderno.
- **Integración:** Footer "Powered by" en el sidebar para posicionamiento de marca.

---

## 6. Configuración de Despliegue (DevOps)

1.  **CI/CD:** Conexión GitHub ➔ Vercel. Cada "push" a la rama `main` actualiza el sitio en vivo.
2.  **Variables de Entorno:**
    - `GEMINI_API_KEY`: Necesaria para que los chatbots funcionen. Deve configurarse en el panel de Vercel.
3.  **Modo de Navegación:** Se utiliza `HashRouter` para evitar errores de 404 en refrescos de página en hosting estático.

---

**Nota Final:** Este ecosistema fue diseñado para ser escalable. Se pueden añadir nuevos módulos simplemente extendiendo el enum `AppRoute` en `types.ts` y añadiendo la nueva vista en `App.tsx`.
