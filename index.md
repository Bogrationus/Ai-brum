---
title: Получите бесплатный PDF-гайд
---

<style>
:root {
  --bg: #0f172a;
  --card-bg: rgba(15, 23, 42, 0.85);
  --accent: #38bdf8;
  --accent-dark: #0ea5e9;
  --text: #f8fafc;
  --muted: #cbd5f5;
  --shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.5);
  font-family: "Inter", "Segoe UI", sans-serif;
}

.landing {
  min-height: 100vh;
  background: radial-gradient(circle at top left, rgba(56, 189, 248, 0.25), transparent 45%),
              radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.35), transparent 40%),
              var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
  box-sizing: border-box;
}

.landing__card {
  max-width: 880px;
  width: 100%;
  background: var(--card-bg);
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 32px;
  padding: clamp(2.5rem, 6vw, 4rem);
  color: var(--text);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.landing__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(56, 189, 248, 0.16);
  color: var(--accent);
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.landing__title {
  margin-top: 1.75rem;
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  line-height: 1.15;
  font-weight: 700;
}

.landing__subtitle {
  margin-top: 1rem;
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 36rem;
}

.landing__highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin: 2.5rem 0;
}

.highlight {
  background: rgba(15, 23, 42, 0.55);
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid rgba(148, 163, 184, 0.2);
  display: grid;
  gap: 0.65rem;
}

.highlight__icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(56, 189, 248, 0.22);
  display: grid;
  place-items: center;
  color: var(--accent);
  font-weight: 600;
}

.highlight__title {
  font-size: 1.05rem;
  font-weight: 600;
}

.highlight__text {
  color: rgba(241, 245, 249, 0.8);
  font-size: 0.95rem;
  line-height: 1.6;
}

.subscription-form {
  background: rgba(15, 23, 42, 0.65);
  border-radius: 24px;
  border: 1px solid rgba(148, 163, 184, 0.25);
  padding: clamp(1.75rem, 4vw, 2.25rem);
  display: grid;
  gap: 1rem;
}

.subscription-form label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(148, 163, 184, 0.85);
}

.subscription-form__fields {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.subscription-form input[type="email"] {
  flex: 1 1 240px;
  min-width: 0;
  padding: 0.95rem 1.2rem;
  border-radius: 16px;
  border: none;
  font-size: 1rem;
  background: rgba(15, 23, 42, 0.85);
  color: var(--text);
  box-shadow: inset 0 0 0 1px rgba(56, 189, 248, 0.2);
}

.subscription-form input[type="email"]::placeholder {
  color: rgba(148, 163, 184, 0.8);
}

.subscription-form button {
  flex: 0 0 auto;
  padding: 0.95rem 1.6rem;
  border-radius: 16px;
  border: none;
  background: linear-gradient(135deg, var(--accent), var(--accent-dark));
  color: #0b1120;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 15px 30px -15px rgba(14, 165, 233, 0.8);
}

.subscription-form button:hover {
  transform: translateY(-1px);
  box-shadow: 0 20px 40px -18px rgba(14, 165, 233, 0.85);
}

.subscription-form button:active {
  transform: translateY(0);
}

.privacy-note {
  font-size: 0.85rem;
  color: rgba(148, 163, 184, 0.9);
}

@media (max-width: 600px) {
  .landing__card {
    border-radius: 24px;
  }

  .subscription-form button {
    width: 100%;
    justify-content: center;
  }
}
</style>

<section class="landing">
  <div class="landing__card">
    <span class="landing__eyebrow">PDF-гайд внутри</span>
    <h1 class="landing__title">Освойте систему планирования, которая экономит до 10 часов в неделю</h1>
    <p class="landing__subtitle">
      Получите практический PDF-гайд с готовыми шаблонами, чек-листами и методиками, которые помогут структурировать день,
      сфокусироваться на ключевых задачах и освободить время для действительно важного.
    </p>

    <div class="landing__highlights">
      <article class="highlight">
        <div class="highlight__icon">1</div>
        <h3 class="highlight__title">Старт за 15 минут</h3>
        <p class="highlight__text">Настройте систему из гайда всего за один вечер и увидьте первые результаты уже завтра.</p>
      </article>
      <article class="highlight">
        <div class="highlight__icon">2</div>
        <h3 class="highlight__title">Готовые шаблоны</h3>
        <p class="highlight__text">Скачайте PDF с таблицами и чек-листами, которые можно использовать в Notion, Excel или распечатать.</p>
      </article>
      <article class="highlight">
        <div class="highlight__icon">3</div>
        <h3 class="highlight__title">Поддержка привычек</h3>
        <p class="highlight__text">Получите список проверенных практик, которые помогут удерживать фокус и не срываться.</p>
      </article>
    </div>

    <form class="subscription-form">
      <label for="email">Подпишитесь и получите PDF на почту</label>
      <div class="subscription-form__fields">
        <input type="email" id="email" name="email" placeholder="name@example.com" required>
        <button type="submit">Получить PDF</button>
      </div>
      <p class="privacy-note">Нажимая кнопку, вы соглашаетесь с условиями рассылки и политикой конфиденциальности.</p>
    </form>
  </div>
</section>
