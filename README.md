# Challenge Express

A Windows XP / Outlook Express-inspired theme for **CTFd 3.8.7 in individual mode**, with a Svelte 5 challenges page. Categories are folders, challenges are messages, and solved challenges appear as read mail.

## Install

1. Copy `theme/` to `CTFd/themes/challenge-express/`.
2. Keep CTFd's bundled `core` theme installed and `THEME_FALLBACK` enabled (the default).
3. Select `challenge-express` under **Admin Panel > Config > Theme**.

Compiled assets are included. The CTFd server does not need Node.js.

## Build

Requires **Node.js 22.12+** or a compatible newer LTS. From the project root:

```sh
npm ci
npm run build
```

Use `npm run dev` to rebuild automatically while editing. Source lives in `frontend/`; the build updates `theme/static/dist/` and `theme/templates/components/challenges-script.html`. Include both generated outputs when committing or deploying.

## Run locally

```sh
docker compose up -d
docker compose exec -e PYTHONPATH=/opt/CTFd ctfd python /opt/express-dev/seed.py
docker compose restart ctfd
```

Open **http://localhost:8000/challenges**.

| Account | Username | Password |
| --- | --- | --- |
| Player | `player` | `express-player-local` |
| Admin | `admin` | `express-admin-local` |

The seed adds three sample challenges and reapplies local event settings. The welcome flag is `flag{youve_got_mail}`. This localhost-only setup uses SQLite and a fixed development secret; use it for local testing only.

After rebuilding, restart CTFd to refresh cached templates, then reload the browser. `docker compose down` stops the service while retaining its data.

## Theme settings

Open **Admin Panel > Config > Theme > Theme Settings > Build**:

- **App name:** defaults to Challenge Express.
- **Logo URL:** an uploaded file path or HTTPS image URL. Blank uses the original icons.
- **Default challenge order:** lowest ID first or alphabetical name.

Click **Update** in the builder, then **Update** on the Theme page.

## Features and compatibility

- Category folders, search, unsolved filtering, and category-aware progress.
- Challenge descriptions, tags, attachments, hints, and server-validated flags.
- Sortable, resizable, draggable columns and draggable XP windows.
- Informational feedback for the `delayed-result` plugin's pending submissions.

Standard flag submissions are tested. Plugins with custom input UIs need adapters. Solution tabs, ratings, and solve-sharing controls are not exposed. Other pages use CTFd's core templates inside the themed shell.

## Tests

With local CTFd running, use an existing Playwright installation and Chrome:

```sh
PLAYWRIGHT_MODULE=/absolute/path/to/node_modules/playwright node dev/tests/smoke.cjs
```

Additional checks live in `dev/tests/` and run the same way. Some create local test accounts or temporarily change theme settings. Screenshots are saved to `dev/screenshots/`.

The original standalone demo is in `prototype/`; open `prototype/index.html` without Docker.
