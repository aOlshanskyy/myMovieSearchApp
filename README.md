# Movie Search App

React + Vite SPA for searching movies via the [OMDb API](https://www.omdbapi.com/), with a simple client-side login flow and protected routes.

> Demo authentication only: user credentials live in the frontend JSON and are visible in the bundle. A real backend auth will be added later.

## Features

- Login page with mock authentication (`users.json` + `localStorage` session)
- Protected home route (React Router)
- Movie search via OMDb REST API
- Loading / error / empty UI states
- Responsive results grid (poster, title, year)
- API key stored in environment variables (`VITE_OMDB_API_KEY`)

## Demo accounts

| Username | Password |
|----------|----------|
| demo     | 123456     |
| admin    | 123456   |

## Tech stack

- React 19
- Vite
- React Router
- OMDb API
- Plain CSS

## Setup

1. Install dependencies:

```bash
npm install