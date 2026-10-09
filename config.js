/*
 * DATOS EDITABLES DE LA INVITACIÓN
 *
 * Este es el único archivo que necesitas tocar para personalizar el contenido.
 * - Cambia nombres, textos, enlace y paleta en este objeto.
 * - Deja una cadena vacía ("") en horarios/logística si todavía no está confirmada:
 *   la sección correspondiente se oculta automáticamente.
 * - Para añadir fotografías, coloca los archivos en assets/ y escribe su ruta aquí.
 */
window.INVITATION_CONFIG = {
  couple: {
    names: "Júlia & Jesús",
    shortNames: "Júlia y Jesús",
    dateISO: "2027-04-10",
    dateLabel: "10 de abril de 2027",
    venue: "Mas Les Lloses",
    openingLine: "Hay días que se convierten en recuerdos para toda la vida. Nos encantará compartir el nuestro contigo.",
    welcome: "Estamos preparando un día para celebrar lo que más nos importa: encontrarnos, brindar y teneros cerca. Aquí iremos guardando todos los detalles.",
    closingLine: "Qué alegría poder vivirlo juntos."
  },
  venue: {
    mapsUrl: "https://www.google.com/maps/place/Mas+Les+Lloses/@39.650392,-0.2971002,17z/data=!3m1!4b1!4m6!3m5!1s0xd603ffe3b1613fb:0xf491e6d823c53425!8m2!3d39.6503879!4d-0.2945253!16s%2Fg%2F11cmr20dpt?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D",
    description: "El lugar donde nos encontraremos para celebrar este día. Pronto añadiremos aquí cualquier indicación que pueda resultaros útil.",
    image: "",
    imageAlt: ""
  },
  // Horarios no confirmados todavía: no se muestran hasta rellenar los valores.
  schedule: [
    { time: "", label: "Llegada de invitados" },
    { time: "", label: "Ceremonia" },
    { time: "", label: "Celebración" }
  ],
  // Información práctica opcional. Las entradas vacías se ocultan.
  logistics: { arrival: "", parking: "", transport: "", notes: "" },
  /*
   * Referencia configurable mientras no haya hora de inicio confirmada.
   * Se calcula como las 12:00 de Europe/Madrid del día de la boda.
   * Sustituye este valor por HH:MM cuando decidáis otra referencia.
   */
  countdown: { referenceTime: "12:00", timezone: "Europe/Madrid" },
  images: { hero: "", venue: "" },
  theme: { ivory: "#F4EFE3", olive: "#737B52", sand: "#D8C5A7", ink: "#293326", terracotta: "#B47D62" },
  sharing: {
    title: "Júlia & Jesús — Nuestra boda",
    description: "Una invitación para compartir un día muy especial: 10 de abril de 2027, en Mas Les Lloses.",
    publicUrl: ""
  }
};
