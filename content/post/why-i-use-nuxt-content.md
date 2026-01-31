---
title: Почему Nuxt Content + .md — идеальный блог
description: Как я перестал писать CMS, начал писать тексты и получил контроль, скорость и стиль.
categories: ["Nuxt", "Nuxt Content", "Markdown"]
slug: "why-i-use-nuxt-content"
date: "2026-02-02"
coverImage: "/assets/blog/why-i-use-nuxt-content.webp"
---

<p>Когда блог стал частью проекта, я быстро понял: писать CMS ради пары статей — бессмысленно. Хотелось просто писать тексты, контролировать структуру и не думать о бэкенде.</p>

<div class="margin_block_20"></div>

<div class="quote">"Контент должен быть простым. Всё остальное — задача фреймворка"</div>

<div class="margin_block_20"></div>

<h2>Знакомство с Nuxt Content</h2>
<div class="margin_block_10"></div>
<div class="hr_block"></div>
<div class="margin_block_20"></div>

<p>Nuxt Content оказался именно тем, что я искал. Ты просто создаёшь <span class="green_block_text">.md</span> файл — и он сразу становится частью приложения.</p>

<div class="margin_block_20"></div>

<p>Без API, без админки, без базы данных. Только файлы и предсказуемая структура.</p>

<div class="margin_block_20"></div>

<pre class="code_block">
content/
└── post/
    └── my-first-post.md
</pre>

<div class="margin_block_20"></div>

<h2>Frontmatter — контроль над страницей</h2>
<div class="margin_block_10"></div>
<div class="hr_block"></div>
<div class="margin_block_20"></div>

<p>Вся магия начинается с <span class="green_block_text">frontmatter</span>. Метаданные живут рядом с текстом и всегда под рукой.</p>

<div class="margin_block_20"></div>

<pre class="code_block">
---
title: Мой первый пост
description: О том, как удобно писать в Markdown
date: 2026-02-02
categories: ["Nuxt", "Content"]
---
</pre>

<div class="margin_block_20"></div>

<p>Заголовки, описания, категории, обложки — всё читается напрямую в компоненте.</p>

<div class="margin_block_20"></div>

<h2>HTML внутри Markdown — свобода стиля</h2>
<div class="margin_block_10"></div>
<div class="hr_block"></div>
<div class="margin_block_20"></div>

<p>Самое приятное — Markdown не ограничивает. Если нужно — используешь обычный HTML с классами.</p>

<div class="margin_block_20"></div>

<p>Хочешь цитату с кастомным стилем? Просто пишешь:</p>

<div class="margin_block_20"></div>

<pre class="code_block">
&lt;div class="quote"&gt;
  Мы пишем контент, а Nuxt делает магию
&lt;/div&gt;
</pre>

<div class="margin_block_20"></div>

<p>А дальше стилизуешь всё через CSS или Tailwind.</p>

<div class="margin_block_20"></div>

<h2>Почему это лучше CMS</h2>
<div class="margin_block_10"></div>
<div class="hr_block"></div>
<div class="margin_block_20"></div>

<div class="li_block"><b>Git</b> — вся история изменений под контролем</div>
<div class="li_block"><b>Скорость</b> — никакого бэкенда и запросов</div>
<div class="li_block"><b>Гибкость</b> — любые стили и компоненты</div>
<div class="li_block"><b>Простота</b> — писать можно даже в VS Code</div>

<div class="margin_block_20"></div>

<h2>Результат</h2>
<div class="margin_block_10"></div>
<div class="hr_block"></div>
<div class="margin_block_10"></div>

<p>Nuxt Content позволил мне сосредоточиться на главном — контенте. Блог стал частью проекта, а не отдельной системой.</p>

<div class="margin_block_10"></div>

<p>Подходит ли это всем? Нет. Но для личных блогов и контентных сайтов — <span class="green_text_normal">это идеал.</span></p>

<div class="margin_block_20"></div>
<div class="margin_block_20"></div>
<div class="hr_block"></div>
<div class="margin_block_20"></div>
<div class="margin_block_20"></div>

<p>В следующем посте покажу, как я делаю <span class="green_block_text">шаблон статьи</span> и рендерю Markdown через Nuxt 🚀</p>
