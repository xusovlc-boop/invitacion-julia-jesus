# Júlia & Jesús — Invitación digital

Invitación estática, responsive y sin dependencias de servidor. La dirección artística combina marfil, oliva y arena, tipografía serif editorial, trazos botánicos y una composición de papelería contemporánea.

## Ejecutar localmente

Desde esta carpeta, abre index.html directamente o sirve el directorio con cualquier servidor estático. Por ejemplo:

~~~powershell
python -m http.server 4173
~~~

Después abre http://localhost:4173.

## Editar la invitación

1. Abre config.js.
2. Cambia nombres, textos, lugar, enlace de Google Maps y paleta dentro de INVITATION_CONFIG.
3. Introduce los horarios en schedule. Mientras haya valores vacíos, la página muestra una nota no definitiva; al completar una fila, la fila se muestra.
4. Añade información de llegada, aparcamiento o transporte en logistics. Si todos los campos están vacíos, la sección completa desaparece.
5. Para fotos propias, colócalas en assets/ y escribe su ruta en images.hero o images.venue. La ilustración sigue disponible si no hay foto.

La cuenta atrás usa la zona Europe/Madrid y el valor configurable countdown.referenceTime. Como todavía no hay hora de inicio confirmada, está preconfigurada a las 12:00 como referencia técnica: cambia referenceTime cuando decidáis qué instante debe marcar el contador.

## Publicar gratis: GitHub Pages

Recomiendo GitHub Pages para este proyecto porque es una carpeta estática, no requiere build y permite HTTPS en una URL estable.

1. Crea un repositorio público nuevo en GitHub, por ejemplo invitacion-julia-jesus.
2. Sube el contenido de esta carpeta conservando index.html en la raíz del repositorio.
3. En GitHub, entra en Settings → Pages.
4. En Build and deployment, selecciona Deploy from a branch, la rama principal y la carpeta / (root).
5. Guarda y espera a que GitHub muestre la URL pública. No se debe considerar publicada hasta abrirla y comprobarla en una ventana privada.
6. Cuando tengas la URL definitiva, copia esa URL en sharing.publicUrl de config.js y también en og:url de index.html. Para una previsualización más compatible, puedes convertir assets/og-image.svg a PNG manteniendo 1200×630 y actualizar og:image/twitter:image con la ruta absoluta del PNG.

Cada actualización posterior consiste en editar config.js o los recursos y hacer commit/push; GitHub Pages volverá a desplegarlo.

## Vista previa de WhatsApp

Comparte la URL pública en un chat de prueba. Los sistemas de mensajería suelen guardar en caché los metadatos: si cambias título o imagen y no se actualiza, espera unos minutos, cambia temporalmente la URL con un parámetro como ?v=2 o utiliza un inspector de enlaces del proveedor para forzar una nueva lectura. Comprueba que la imagen es accesible sin contraseña y que sus dimensiones son 1200×630.

## Datos que faltan

- Hora de llegada, ceremonia y celebración.
- Indicaciones confirmadas de llegada, aparcamiento y transporte, si las hay.
- Fotografías propias y sus textos alternativos, si queréis incorporarlas.
- URL pública definitiva para completar los metadatos absolutos de compartir.
