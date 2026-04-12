# Juan Estrada Salas — Sitio Web

Página web profesional para despacho de abogados en Saltillo, Coahuila.

## Estructura del proyecto

```
juan-estrada-salas/
├── index.html       ← Página principal (una sola página con scroll)
├── css/
│   └── style.css    ← Todos los estilos
├── js/
│   └── main.js      ← Interacciones y animaciones
└── README.md
```

## Cómo abrir en VSCode

1. Abre VSCode
2. Archivo → Abrir Carpeta → selecciona `juan-estrada-salas/`
3. Instala la extensión **Live Server** (si no la tienes)
4. Click derecho en `index.html` → **Open with Live Server**

O simplemente abre `index.html` directamente en el navegador.

## Secciones

- **Hero** — Presentación principal con nombre, descripción y botones de llamada
- **Áreas de Práctica** — 6 tarjetas con animación al hacer scroll
- **Contacto** — Información de contacto + formulario de consulta

## Colores

| Variable    | Valor      | Uso                  |
|-------------|------------|----------------------|
| `--dark`    | `#0d1b2a`  | Fondo oscuro         |
| `--gold`    | `#e8971a`  | Acento principal     |
| `--white`   | `#ffffff`  | Texto sobre oscuro   |

## Personalización rápida

- **Teléfono**: Busca `8443062684` en `index.html` y reemplaza
- **Correo**: Agrega un `mailto:` en la tarjeta de Horario si tienes email
- **Texto**: Edita directamente en `index.html`
- **Colores**: Cambia las variables en `:root` dentro de `css/style.css`
