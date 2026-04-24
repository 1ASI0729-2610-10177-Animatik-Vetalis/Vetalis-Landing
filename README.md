# Vetalis - Landing Page

Este proyecto es la página de aterrizaje (landing page) oficial para **Vetalis** (también conocido como VetCare), una plataforma inteligente de gestión para clínicas veterinarias. 

El proyecto está construido íntegramente con **tecnologías web nativas (HTML5, CSS3 y Vanilla JavaScript)**, sin depender de frameworks pesados, lo que garantiza una carga ultrarrápida, máxima compatibilidad y fácil mantenimiento.

## Características Principales

Basado en el código fuente, la página incluye las siguientes funcionalidades:
* **Traducción Integrada (i18n):** Cambio de idioma dinámico (Inglés / Español) implementado con Vanilla JS y atributos `data-i18n`, sin recargar la página.
* **Calculadora de Precios:** Toggle interactivo para alternar entre facturación mensual y anual, calculando automáticamente los descuentos (20% OFF).
* **Interfaz Interactiva:**
  * Navegación fluida (Smooth Scrolling) hacia las distintas secciones de la página.
  * Acordeón de Preguntas Frecuentes (FAQ) dinámico.
  * Uso de la librería de íconos [Lucide](https://lucide.dev/).
* **Diseño Responsivo y Moderno:** Estilos propios usando variables CSS (`:root`), animaciones fluidas (`fade-in`) y tipografía *Inter* de Google Fonts.

## Tecnologías Utilizadas

* **Estructura:** HTML5 Semántico.
* **Estilos:** CSS3 puro (CSS Grid, Flexbox, Variables CSS y Animaciones Keyframes).
* **Lógica:** Vanilla JavaScript (ES6).
* **Recursos Externos:** Google Fonts (Inter) y Lucide Icons (vía CDN).

## Estructura del Proyecto

```text
/
├── index.html          # Estructura principal de la landing page
├── main.js             # Lógica de la interfaz (i18n, smooth scroll, precios, FAQ)
├── .gitignore          # Archivos y carpetas ignorados por el control de versiones
├── README.md           # Documentación del proyecto
└── assets/
    ├── styles.css      # Hoja de estilos global de la página
    └── images/         # Carpeta de recursos gráficos (logos, capturas de uso, casos de éxito)
```
## Desarrollo y Ejecución Local
Como este proyecto no utiliza frameworks ni requiere un proceso de compilación (build) como Webpack, Vite o Angular CLI, ejecutarlo es extremadamente sencillo:

Opción 1: Directo en el navegador
Simplemente haz doble clic en el archivo index.html para abrirlo en tu navegador web predeterminado.

Opción 2: Usando un Servidor Local (Recomendado)
Para evitar problemas con políticas de CORS al cargar recursos locales (si se agregan a futuro) y tener recarga automática al guardar cambios, se recomienda usar una extensión como Live Server en Visual Studio Code:

Abre el proyecto en VS Code.

Instala la extensión "Live Server".

Haz clic derecho sobre index.html y selecciona "Open with Live Server".

## Personalización de Estilos
El diseño está controlado por variables CSS en la raíz del archivo assets/styles.css. Puedes cambiar fácilmente la paleta de colores modificando estas variables:

```text
:root {
    --bg: #0f1012;         /* Fondo principal */
    --card: #161719;       /* Fondo de tarjetas */
    --primary: #3b82f6;    /* Color primario (botones, enlaces) */
    --text: #ffffff;       /* Texto principal */
    /* ... */
}
```
## Gestión de Idiomas
Los textos de la página se gestionan desde el archivo main.js a través del objeto translations. Para modificar o agregar un nuevo idioma, simplemente edita este diccionario y asegúrate de que el botón correspondiente en el navbar de index.html tenga el atributo data-lang correcto.
