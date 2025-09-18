---
title: Penzion Kersko – Forest Retreat
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');

:root {
  --forest: #2e6453;
  --forest-dark: #17372d;
  --mist: #f5efe6;
  --cream: #fff8f0;
  --accent: #d4a574;
  --sky: #dbe9e4;
  --text: #1b2a2f;
}

html {
  scroll-behavior: smooth;
}

.page-content {
  padding: 0;
}

.landing-page {
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  color: var(--text);
  background: var(--mist);
  overflow-x: hidden;
}

.lp-hero {
  position: relative;
  min-height: 85vh;
  background: linear-gradient(115deg, rgba(23, 55, 45, 0.82), rgba(46, 100, 83, 0.68)),
              url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=80') center/cover;
  display: flex;
  align-items: stretch;
  color: #f5f9f7;
  isolation: isolate;
}

.lp-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 15% 20%, rgba(212, 165, 116, 0.35), transparent 45%),
              radial-gradient(circle at 85% 80%, rgba(219, 233, 228, 0.25), transparent 55%);
  z-index: -1;
}

.lp-hero-inner {
  width: min(1120px, 92vw);
  margin: 0 auto;
  padding: 3rem 0 4rem;
  display: flex;
  flex-direction: column;
}

.lp-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}

.lp-brand {
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-size: clamp(1.4rem, 2.4vw, 1.8rem);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lp-nav-links {
  display: flex;
  gap: 1.75rem;
  font-size: 0.95rem;
}

.lp-nav-links a {
  color: inherit;
  text-decoration: none;
  font-weight: 500;
  position: relative;
}

.lp-nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.35rem;
  width: 100%;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.lp-nav-links a:hover::after {
  transform: scaleX(1);
}

.lp-hero-content {
  margin-top: clamp(3rem, 7vw, 5rem);
  display: grid;
  gap: 2.5rem;
  max-width: 620px;
}

.lp-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background: rgba(245, 239, 230, 0.12);
  backdrop-filter: blur(4px);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.7rem;
  font-weight: 600;
}

.lp-badge::before {
  content: '\272A';
  font-size: 0.9rem;
}

.lp-hero h1 {
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-size: clamp(2.8rem, 6vw, 4.6rem);
  line-height: 1.08;
  margin: 0;
}

.lp-hero p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(245, 249, 247, 0.9);
  margin: 0;
}

.lp-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.lp-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem 1.8rem;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.lp-btn.primary {
  background: var(--accent);
  color: var(--forest-dark);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.22);
}

.lp-btn.secondary {
  background: rgba(245, 239, 230, 0.12);
  color: #f5f9f7;
  border: 1px solid rgba(245, 239, 230, 0.35);
}

.lp-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.2);
}

.lp-hero-metrics {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
}

.lp-hero-metric {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.lp-hero-metric strong {
  font-size: 2rem;
  font-family: 'Playfair Display', serif;
}

.lp-section {
  padding: clamp(3.5rem, 9vw, 6rem) min(1120px, 92vw);
  margin: 0 auto;
}

.lp-section h2 {
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-size: clamp(2.1rem, 4vw, 3.1rem);
  margin-bottom: 1.2rem;
  color: var(--forest-dark);
}

.lp-section p.section-lead {
  max-width: 620px;
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(27, 42, 47, 0.78);
}

.lp-features {
  display: grid;
  gap: 1.8rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: 2.2rem;
}

.lp-feature-card {
  background: var(--cream);
  padding: 1.9rem;
  border-radius: 1.3rem;
  box-shadow: 0 18px 40px rgba(27, 42, 47, 0.12);
  border: 1px solid rgba(27, 42, 47, 0.06);
  display: grid;
  gap: 0.8rem;
}

.lp-feature-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 1.3rem;
  background: rgba(46, 100, 83, 0.12);
  color: var(--forest);
}

.lp-feature-card h3 {
  margin: 0;
  font-size: 1.2rem;
}

.lp-feature-card p {
  margin: 0;
  line-height: 1.6;
  color: rgba(27, 42, 47, 0.72);
}

.lp-cards {
  display: grid;
  gap: 1.8rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin-top: 2.5rem;
}

.lp-card {
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  background: var(--cream);
  box-shadow: 0 20px 45px rgba(27, 42, 47, 0.14);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  display: flex;
  flex-direction: column;
}

.lp-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 26px 55px rgba(27, 42, 47, 0.18);
}

.lp-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.lp-card-body {
  padding: 1.8rem;
  display: grid;
  gap: 0.9rem;
}

.lp-card-body h3 {
  margin: 0;
  font-size: 1.35rem;
}

.lp-tags {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.lp-tag {
  font-size: 0.78rem;
  padding: 0.35rem 0.75rem;
  background: rgba(46, 100, 83, 0.12);
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--forest-dark);
}

.lp-experiences {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin-top: 2.5rem;
}

.lp-experience {
  padding: 2rem;
  border-radius: 1.4rem;
  background: linear-gradient(155deg, rgba(219, 233, 228, 0.75), rgba(245, 239, 230, 0.9));
  border: 1px solid rgba(27, 42, 47, 0.08);
  display: grid;
  gap: 0.75rem;
}

.lp-experience h3 {
  margin: 0;
  font-size: 1.25rem;
}

.lp-gallery {
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

.lp-gallery-item {
  position: relative;
  padding-top: 65%;
  border-radius: 1.2rem;
  overflow: hidden;
  box-shadow: 0 18px 38px rgba(27, 42, 47, 0.14);
}

.lp-gallery-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.lp-gallery-item:nth-child(1)::before {
  background-image: url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80');
}

.lp-gallery-item:nth-child(2)::before {
  background-image: url('https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80');
}

.lp-gallery-item:nth-child(3)::before {
  background-image: url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80');
}

.lp-gallery-item:nth-child(4)::before {
  background-image: url('https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1200&q=80');
}

.lp-gallery-item:hover::before {
  transform: scale(1.06);
}

.lp-gallery-caption {
  position: absolute;
  inset: auto 1rem 1rem;
  background: rgba(27, 42, 47, 0.72);
  color: #f5f9f7;
  padding: 0.6rem 0.9rem;
  border-radius: 0.8rem;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
}

.lp-testimonials {
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-top: 2.5rem;
}

.lp-testimonial {
  background: var(--cream);
  border-radius: 1.4rem;
  padding: 2rem;
  box-shadow: 0 18px 36px rgba(27, 42, 47, 0.12);
  display: grid;
  gap: 1rem;
  position: relative;
}

.lp-testimonial::before {
  content: '\201C';
  position: absolute;
  top: 1.2rem;
  left: 1.6rem;
  font-size: 3.4rem;
  color: rgba(46, 100, 83, 0.16);
}

.lp-testimonial strong {
  font-weight: 600;
  color: var(--forest-dark);
}

.lp-contact {
  background: linear-gradient(115deg, rgba(46, 100, 83, 0.92), rgba(23, 55, 45, 0.94));
  color: #f5f9f7;
  border-radius: 2rem;
  padding: clamp(2.5rem, 6vw, 4rem);
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  align-items: center;
  box-shadow: 0 26px 55px rgba(0, 0, 0, 0.24);
}

.lp-contact h3 {
  font-family: 'Playfair Display', serif;
  font-size: 2.1rem;
  margin: 0 0 1rem;
}

.lp-contact p {
  margin: 0 0 1.1rem;
  line-height: 1.7;
}

.lp-contact ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.8rem;
}

.lp-contact li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.lp-contact li span.icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(245, 239, 230, 0.14);
  display: grid;
  place-items: center;
  font-size: 1rem;
}

.lp-contact a {
  color: #fdfbf7;
  font-weight: 600;
  text-decoration: none;
}

.lp-contact a:hover {
  text-decoration: underline;
}

.lp-contact .lp-btn.primary {
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.24);
}

.lp-footer {
  padding: 2.5rem 0 3rem;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(27, 42, 47, 0.72);
}

.lp-footer a {
  color: var(--forest);
  font-weight: 600;
  text-decoration: none;
}

.lp-section + .lp-section {
  margin-top: -1.5rem;
}

.lp-section[id] {
  scroll-margin-top: 90px;
}

@media (max-width: 720px) {
  .lp-nav-links {
    display: none;
  }

  .lp-hero-inner {
    padding: 2.5rem 0 3rem;
  }

  .lp-hero {
    min-height: 95vh;
  }

  .lp-hero-actions {
    width: 100%;
  }

  .lp-btn {
    flex: 1;
    justify-content: center;
  }
}
</style>

<div class="landing-page">
  <section class="lp-hero" id="top">
    <div class="lp-hero-inner">
      <nav class="lp-nav">
        <div class="lp-brand">Penzion Kersko</div>
        <div class="lp-nav-links">
          <a href="#accommodations">Suites</a>
          <a href="#experiences">Experiences</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div class="lp-hero-content">
        <span class="lp-badge">Forest Hideaway • Kersko Nature Reserve</span>
        <h1>Unwind in the Storybook Woods of Penzion Kersko</h1>
        <p>
          Nestled among ancient pines made famous by Bohumil Hrabal, our boutique retreat blends
          Czech craftsmanship, gourmet dining, and mindful experiences. Just 45 minutes from Prague,
          yet a world away from the rush.
        </p>
        <div class="lp-hero-actions">
          <a class="lp-btn primary" href="#contact">Plan Your Stay</a>
          <a class="lp-btn secondary" href="#accommodations">Explore the Suites</a>
        </div>
        <div class="lp-hero-metrics">
          <div class="lp-hero-metric">
            <strong>12</strong>
            <span>designer suites with forest views</span>
          </div>
          <div class="lp-hero-metric">
            <strong>3</strong>
            <span>seasonal tasting menus by Chef Jana</span>
          </div>
          <div class="lp-hero-metric">
            <strong>∞</strong>
            <span>trails, streams &amp; moments to breathe</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="lp-section" id="about">
    <h2>Where forest legends meet modern comfort</h2>
    <p class="section-lead">
      Penzion Kersko is a serene forest estate inspired by the beloved Hrabal stories. Wake up to birdsong,
      spend afternoons in our glasshouse spa, and end the day with firelight and Moravian wines under the stars.
    </p>
    <div class="lp-features">
      <article class="lp-feature-card">
        <div class="lp-feature-icon">🌿</div>
        <h3>Nature at your doorstep</h3>
        <p>Private access to meandering forest trails, river meadows, and hidden picnic spots curated by our guides.</p>
      </article>
      <article class="lp-feature-card">
        <div class="lp-feature-icon">🛁</div>
        <h3>Spa &amp; wellness rituals</h3>
        <p>Thermal cedar sauna, aroma steam, and forest bathing ceremonies designed to ground and rejuvenate.</p>
      </article>
      <article class="lp-feature-card">
        <div class="lp-feature-icon">🍷</div>
        <h3>Slow dining experiences</h3>
        <p>Seasonally evolving menus highlighting local foragers, biodynamic vineyards, and Kersko apiary honey.</p>
      </article>
    </div>
  </section>

  <section class="lp-section" id="accommodations">
    <h2>Suites crafted for dreamers &amp; wanderers</h2>
    <p class="section-lead">
      Each suite is a story—handmade oak, artisan textiles, and balconies that float above the mossy forest floor.
      Choose the atmosphere that suits your escape.
    </p>
    <div class="lp-cards">
      <article class="lp-card">
        <img src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80" alt="Sunlit suite with forest view" />
        <div class="lp-card-body">
          <h3>Atelier Loft</h3>
          <p>Two-story sanctuary with floor-to-ceiling windows, freestanding soaking tub, and private library nook.</p>
          <div class="lp-tags">
            <span class="lp-tag">65 m²</span>
            <span class="lp-tag">Panoramic balcony</span>
            <span class="lp-tag">Private sauna</span>
          </div>
        </div>
      </article>
      <article class="lp-card">
        <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80" alt="Cozy room with fireplace" />
        <div class="lp-card-body">
          <h3>Hrabal Cottage</h3>
          <p>Romantic hideaway with crackling fireplace, vintage record player, and secret garden for evening stargazing.</p>
          <div class="lp-tags">
            <span class="lp-tag">Fireplace lounge</span>
            <span class="lp-tag">Garden patio</span>
            <span class="lp-tag">Breakfast basket</span>
          </div>
        </div>
      </article>
      <article class="lp-card">
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80" alt="Modern glasshouse spa" />
        <div class="lp-card-body">
          <h3>Forest Glasshouse</h3>
          <p>Immersive glass pavilion set amidst the pines, featuring a rain shower atrium and meditation lounge.</p>
          <div class="lp-tags">
            <span class="lp-tag">Signature stay</span>
            <span class="lp-tag">Rain shower atrium</span>
            <span class="lp-tag">Butler service</span>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="lp-section" id="experiences">
    <h2>Experiences to remember long after checkout</h2>
    <p class="section-lead">
      From sunrise canoeing to twilight storytelling, our curated itinerary lets you move at your own pace—whether that's
      adventurous, reflective, or a little of both.
    </p>
    <div class="lp-experiences">
      <article class="lp-experience">
        <h3>Forest bath &amp; tea ceremony</h3>
        <p>Guided shinrin-yoku walk finishing with hand-blended herbal infusions in our riverside tea pavilion.</p>
        <p><strong>Daily • 9:00 &amp; 15:00</strong></p>
      </article>
      <article class="lp-experience">
        <h3>Hrabal cycling trail</h3>
        <p>Vintage bicycles, illustrated maps, and storytelling stops at the author's favorite forest landmarks.</p>
        <p><strong>Weekends • Limited groups</strong></p>
      </article>
      <article class="lp-experience">
        <h3>Chef's table beneath the pines</h3>
        <p>Seven-course tasting under starlight with wine pairings, foraged ingredients, and live acoustic set.</p>
        <p><strong>Thursdays to Sundays • Reservation only</strong></p>
      </article>
    </div>
  </section>

  <section class="lp-section" id="gallery">
    <h2>Moments from the Kersko forest</h2>
    <p class="section-lead">
      Imagine yourself here—soft morning light, emerald canopies, and warm interiors designed for quiet wonder.
    </p>
    <div class="lp-gallery">
      <div class="lp-gallery-item">
        <span class="lp-gallery-caption">Golden hour above the Elbe wetlands</span>
      </div>
      <div class="lp-gallery-item">
        <span class="lp-gallery-caption">Atelier Loft bedroom sanctuary</span>
      </div>
      <div class="lp-gallery-item">
        <span class="lp-gallery-caption">Forest glasshouse spa</span>
      </div>
      <div class="lp-gallery-item">
        <span class="lp-gallery-caption">Twilight paths lined with lanterns</span>
      </div>
    </div>
  </section>

  <section class="lp-section" id="stories">
    <h2>Guests who found their forest rhythm</h2>
    <div class="lp-testimonials">
      <blockquote class="lp-testimonial">
        <p>“The forest felt like it was breathing with us. Between the cedar sauna and the storytelling evening, we left with a sense of calm we didn't know we needed.”</p>
        <strong>Lenka &amp; Petr, Prague</strong>
      </blockquote>
      <blockquote class="lp-testimonial">
        <p>“Every detail is intentional—the scent of spruce in the lobby, the vinyl selection, the chef introducing every dish. A soulful Czech retreat.”</p>
        <strong>Marcus, Copenhagen</strong>
      </blockquote>
      <blockquote class="lp-testimonial">
        <p>“We booked the Forest Glasshouse for our anniversary and spent hours watching mist roll through the trees. Magical.”</p>
        <strong>Katarína, Bratislava</strong>
      </blockquote>
    </div>
  </section>

  <section class="lp-section" id="contact">
    <div class="lp-contact">
      <div>
        <h3>Ready to escape to Kersko?</h3>
        <p>
          Our hosts tailor every stay—from celebratory dinners to restorative retreats. Tell us about your occasion
          and we'll craft an itinerary steeped in forest magic.
        </p>
        <a class="lp-btn primary" href="mailto:hello@penzionkersko.cz">Request your stay</a>
      </div>
      <div>
        <ul>
          <li><span class="icon">📍</span> Hrabalova 8, Kersko, Czech Republic</li>
          <li><span class="icon">✉️</span> <a href="mailto:hello@penzionkersko.cz">hello@penzionkersko.cz</a></li>
          <li><span class="icon">📞</span> <a href="tel:+420602123456">+420 602 123 456</a></li>
          <li><span class="icon">🕰️</span> Check-in 15:00 · Check-out 11:00</li>
        </ul>
      </div>
    </div>
  </section>

  <footer class="lp-footer">
    © <span id="year"></span> Penzion Kersko &nbsp;•&nbsp; Inspired by the forests of Polabí
  </footer>
</div>

<script>
  document.getElementById('year').textContent = new Date().getFullYear();
</script>
