# Movie Search App

Мінімальний React-додаток для пошуку фільмів через [OMDb API](https://www.omdbapi.com/).

## Setup

1. Встанови залежності:

```bash
npm install
```

2. Отримай безкоштовний API key: https://www.omdbapi.com/apikey.aspx  
   Підтверди ключ у листі (Activate).

3. Створи файл `.env` у корені проєкту (поруч з `package.json`):

```
VITE_OMDB_API_KEY=твій_ключ
```

Можна скопіювати `.env.example` і вставити ключ.

4. Запусти додаток:

```bash
npm run dev
```

Відкрий URL з терміналу (зазвичай `http://localhost:5173`), введи назву фільму (наприклад `batman`) і натисни «Шукати».

## Scripts

- `npm run dev` — локальна розробка
- `npm run build` — продакшен-збірка
- `npm run preview` — перегляд збірки
