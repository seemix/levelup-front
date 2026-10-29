# План рефакторингу та оптимізації фронтенду

Мета: оптимізація й актуалізація залежностей **без зміни функціоналу**.
Перевірка після кожного етапу: `npx tsc --noEmit`, `npm run lint`, `npm run build`.

## 1. Залежності

- [x] Оновити `next` 16.1.6 → 16.4.3, `react`/`react-dom` 19.2.3 → 19.3.1
- [x] Оновити `next-intl` → 4.14.9, `framer-motion` 12 → 14.7.1, `swiper` 12 → 14.3.0
- [x] Оновити `@payloadcms/richtext-lexical` → 3.92.1, `react-icons` → 5.7.0
- [x] Оновити dev-залежності: `@biomejs/biome` 2.2.0 → 2.6.4 (міграція `biome.json`), `@types/react*` 19.3, `@types/node` 20 → 24 (відповідає Node 24)
- [x] `typescript` залишено на 5.x (7.x — мажорний реліз нового компілятора, поза межами «без змін»)
- [x] Видалити невикористану залежність `zustand`
- [x] Прибрати імпорти транзитивних пакетів: `use-intl` → `next-intl`, `lexical` → `@payloadcms/richtext-lexical/lexical`

> Встановлення виконується з `--legacy-peer-deps`: `@payloadcms/richtext-lexical` вимагає peer `payload`, який на фронтенді не потрібен.

## 2. Структура та імпорти

- [x] Прибрати barrel-файл `components/index.ts` (циклічні імпорти, гірший tree-shaking) — прямі імпорти скрізь
- [x] Видалити мертвий код: `hooks/useClickOutside.ts` (не працював — `ref` не прив'язувався), дубль `ref={menuRef}` у `Header`
- [x] Винести повторюваний `fetch` у `lib/api.ts` (`fetchApi`)

## 3. Продуктивність

- [x] `page.tsx`: два запити до API паралельно (`Promise.all`) замість послідовних
- [x] Прибрати `'use client'` у компонентах без клієнтської логіки (`Services`, `Main`, `Loader`, `BurgerButton`) — менше JS у бандлі
- [x] Passive-слухачі `scroll` у `Header` та `ArrowUp`
- [x] Прибрати невикористане накреслення шрифту Oswald 200 (у CSS не вживається)
- [x] Логотип у `Footer` — статичний імпорт замість `logo.src`

## 4. Якість коду

- [x] Типізація `EasyWeekWidget` замість `window as any`
- [x] `BurgerButton`: нижня смуга використовувала клас `center_bar` (стилі ідентичні, візуально без змін) → `bottom_bar`
- [x] `parseInt` з radix, шаблонні рядки, `biome-ignore` з поясненням для `ScrollHandler`
- [x] Форматування всього проєкту `biome` (`public/` виключено з перевірок)
- [x] Результат: `tsc` без помилок, `biome` — 0 помилок, `next build` успішний

## 5. Відкладено (змінює поведінку або потребує рішення)

- [ ] `page.tsx`: у запиті `barbers` параметр `&?sort=createdAt` схожий на помилку (`?` замість `&`) — виправлення змінить порядок барберів
- [ ] `layout.tsx`/`page.tsx`: немає обробки помилок `fetch` (падіння API ламає сторінку)
- [ ] `Header`: `<nav>` вкладено в `<button>` (невалідний HTML) — потрібна перевірка верстки
- [ ] `!important` у `globals.css` та `SingleServiceCard.module.css` (3 попередження biome)
- [ ] `typescript` 7 та міграція `framer-motion` → `motion`
- [ ] Прибрати шаблонні `public/*.svg` від create-next-app
