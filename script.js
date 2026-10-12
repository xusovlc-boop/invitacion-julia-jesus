(function () {
  "use strict";
  const config = window.INVITATION_CONFIG, root = document.documentElement;
  if (!config) return;
  Object.entries(config.theme || {}).forEach(([name, value]) => root.style.setProperty("--" + name, value));
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const setText = (selector, value) => $$(selector).forEach((el) => { el.textContent = value; });
  const date = new Date(config.couple.dateISO + "T12:00:00Z");
  const dateFormatter = new Intl.DateTimeFormat("es-ES", { timeZone: config.countdown.timezone, weekday: "long", day: "numeric", month: "long", year: "numeric" });
  setText("[data-couple-names]", config.couple.names); setText("[data-date-label]", config.couple.dateLabel); setText("[data-date-full]", capitalize(dateFormatter.format(date)));
  setText("[data-venue]", config.couple.venue); setText("[data-opening-line]", config.couple.openingLine); setText("[data-welcome]", config.couple.welcome); setText("[data-closing-line]", config.couple.closingLine); setText("[data-venue-description]", config.venue.description);
  const mapsLink = $("[data-maps-link]"); if (mapsLink) mapsLink.href = config.venue.mapsUrl;
  renderHeroImage(); renderVenueImage(); renderSchedule(); renderTransport(); renderLogistics(); renderForms(); renderGallery(); renderGift(); updateMeta(); setupNavigation(); startCountdown();
  function capitalize(value) { return value ? value.charAt(0).toUpperCase() + value.slice(1) : value; }
  function clean(value) { return String(value || "").trim(); }
  function renderHeroImage() {
    const path = clean(config.images && config.images.hero), hero = $(".hero");
    if (!path || !hero) return;
    const existing = $(".hero__photo", hero);
    if (existing) {
      existing.alt = clean(config.images.heroAlt) || "Fotografía de Júlia y Jesús";
      hero.classList.add("hero--photo");
      return;
    }
    const image = document.createElement("img"); image.className = "hero__photo"; image.src = path; image.alt = clean(config.images.heroAlt) || "Fotografía de Júlia y Jesús"; hero.prepend(image); hero.classList.add("hero--photo");
  }
  function renderVenueImage() {
    const path = clean(config.images && config.images.venue); if (!path) return;
    const art = $("[data-venue-art]"); if (!art) return;
    art.classList.add("has-image");
    const image = document.createElement("img");
    image.className = "place__photo";
    image.src = path;
    image.alt = config.venue.imageAlt || "Fotografía del lugar de la celebración";
    art.prepend(image);
    const fallback = $(".place__illustration", art); if (fallback) fallback.setAttribute("aria-hidden", "true");
  }
  function renderSchedule() {
    const entries = (config.schedule || []).filter((item) => clean(item.time) && clean(item.label)), transport = config.transport || {}, timeline = $("[data-schedule]"), empty = $("[data-schedule-empty]");
    if (clean(transport.departureTime) && clean(transport.departureLocation)) entries.push({ time: transport.departureTime, label: "Salida del autobús · " + transport.departureLocation });
    if (clean(transport.return1Time)) entries.push({ time: transport.return1Time, label: "Autobús de vuelta 1" });
