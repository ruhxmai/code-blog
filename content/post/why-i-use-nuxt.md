---
title: Почему я выбрал Nuxt для своих проектов
description: Как Nuxt упростил мне жизнь, ускорил разработку и заставил забыть про боль с SEO.
categories: ["Nuxt", "Vue", "Фронтенд"]
slug: "why-i-use-nuxt"
date: "2026-01-31"
coverImage: "/assets/blog/why-i-use-nuxt.webp"
---

<p>Всё началось с того, что обычный SPA на Vue перестал меня устраивать. SEO, маршруты, SSR — каждый проект превращался в набор костылей. И в какой-то момент я понял: пора менять подход.</p>

<div class="margin_block_20"></div>

<div class="quote">"Фреймворк хорош тогда, когда ты думаешь о продукте, а не о конфигурации"</div>

<div class="margin_block_20"></div>

<h2>Первое знакомство</h2>
<div class="margin_block_10"></div>
<div class="hr_block"></div>
<div class="margin_block_20"></div>

<p>Я начал с <span class="green_block_text">npx nuxi init</span> и был приятно удивлён. Роутинг, структура проекта, SSR — всё уже готово. Никаких лишних решений, только понятная архитектура.</p>

<div class="margin_block_20"></div>

<p>Особенно зашло то, что Nuxt буквально <span class="green_text_italic">навязывает</span> хорошие практики. Ты не думаешь, где хранить страницы или как подключить layout — всё на своих местах.</p>

<div class="margin_block_20"></div>

<pre class="code_block">
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})
</pre>

<div class="margin_block_20"></div>

<h2>Фичи, без которых уже не могу</h2>
<div class="margin_block_10"></div>
<div class="hr_block"></div>
<div class="margin_block_20"></div>

<div class="li_block"><b>File-based routing</b> — страницы создаются сами</div>
<div class="li_block"><b>useAsyncData</b> — работа с данными без боли</div>
<div class="li_block"><b>Layouts</b> — чистая структура приложения</div>
<div class="li_block"><b>Content / Collections</b> — блог без CMS</div>

<div class="margin_block_20"></div>

<h2>SSR и SEO</h2>
<div class="margin_block_10"></div>
<div class="hr_block"></div>
<div class="margin_block_20"></div>

<p>Самый большой плюс — это SSR из коробки. Метатеги, og:image, динамические страницы — всё работает без дополнительных библиотек.</p>

<div class="margin_block_10"></div>

<p>Когда ты просто пишешь <span class="green_block_text">useHead</span> и знаешь, что поисковики увидят контент — это снимает огромный пласт стресса.</p>

<div class="margin_block_20"></div>

<h2>Результат</h2>
<div class="margin_block_10"></div>
<div class="hr_block"></div>
<div class="margin_block_10"></div>

<p>С Nuxt я стал собирать проекты быстрее, код стал чище, а структура — предсказуемой. Я больше не трачу время на настройку базовых вещей.</p>

<div class="margin_block_10"></div>

<p>Стоит ли Nuxt своего порога входа? <span class="green_text_normal">Однозначно да.</span></p>

<div class="margin_block_20"></div>
<div class="margin_block_20"></div>
<div class="hr_block"></div>
<div class="margin_block_20"></div>
<div class="margin_block_20"></div>

<p>В следующем посте расскажу, как я делаю блог на <span class="green_block_text">Nuxt Content</span> без единой админки 🚀</p>
