# Rogue Backend

A minimal API server built with [Elysia](https://elysiajs.com/) on the [Bun](https://bun.sh/) runtime.

## Getting Started

Install dependencies:

```bash
bun install
```

Start the development server (with watch mode):

```bash
bun run dev
```

The server runs at `http://localhost:3000` (override with `PORT`).

## Scripts

| Script            | Command                          |
| ----------------- | -------------------------------- |
| `bun run dev`     | Start dev server with hot reload |
| `bun run lint`    | Lint with Biome                  |
| `bun run format`  | Format with Biome                |

## Docs

- `/docs` — Swagger UI (via `@elysiajs/swagger`)
