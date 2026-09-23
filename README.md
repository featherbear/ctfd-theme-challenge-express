# Challenge Express

A Windows XP / Outlook Express-inspired CTFd theme, tested against **CTFd 3.8.7 in individual mode** using Docker. Categories are folders, challenge titles are subjects, and challenge descriptions are messages. Solved challenges are read; opening an unsolved challenge never changes its state.

## Run CTFd locally

```sh
docker compose up -d
docker compose exec -e PYTHONPATH=/opt/CTFd ctfd python /opt/express-dev/seed.py
docker compose restart ctfd
```

Open **http://localhost:8000/challenges** after startup completes.

| Account | Username | Password |
| --- | --- | --- |
| Player | `player` | `express-player-local` |
| Administrator | `admin` | `express-admin-local` |

The seed installs three sample challenges and configures individual mode. It preserves existing accounts and solves, but reapplies local event settings. Use it only with this local fixture. The welcome flag is `flag{youve_got_mail}`.

This development Compose setup binds to localhost and uses SQLite, a persistent named volume, and a fixed development secret. It is intended for local testing. `docker compose down` stops it and retains the database. Theme files are mounted read-only; restart the CTFd service after template changes to clear template caches.

## Install on an existing CTFd 3.8.7 instance

1. Copy `theme/` to `CTFd/themes/challenge-express/`.
2. Keep CTFd's bundled `core` theme installed and `THEME_FALLBACK` enabled (the default).
3. Select `challenge-express` under **Admin Panel > Config > Theme**.
4. Use individual user mode.

The theme overrides the shared window, navigation, login prompt, and challenge board. Registration, password reset, scoreboard, users, profiles, settings, custom pages, notifications, and error pages use version-matched core templates and compiled assets within the XP-style shell. Navigation has no language selector. No theme build step is needed.

The message reader uses CTFd's APIs for challenge data, hints, attachments, flag attempts, and solved state. Markdown is taken from CTFd's server-rendered challenge view. Flags and progress are not validated or stored in browser storage.

**Current integration scope:** the standard flag-submission reader is tested. Third-party challenge plugins with custom JavaScript or input UIs need an adapter. Advanced challenge features such as solution tabs, ratings, and solve-sharing controls are not yet exposed by this reader. Email delivery for password reset/verification requires a mail-configured CTFd instance and was not tested locally.

## Custom branding

Open **Admin Panel > Config > Theme > Theme Settings > Build**.

- **App name** (`app_name`): overrides Challenge Express in the login heading, browser/window titles, taskbar, and help. Blank uses Challenge Express. The event name remains separately configurable in General settings.
- **Logo URL** (`logo`): an uploaded image path (such as `/files/.../logo.png`) or HTTPS image URL. Appears in the login banner and application title bar, scaled without cropping. Blank restores the original icons.

Click **Update** inside the builder, then **Update** on the Theme page to save. Refresh player pages to see the changes.

## Interactions

- Select a category or use Search to narrow the list.
- Open a subject to read a challenge. The list is hidden until **Back to challenges**.
- Reply with a flag. Read/unread state follows the server's solve result.
- Drag headers to reorder columns, or drag their right edges to resize.
- Keyboard: Alt + Left/Right on a header reorders; Left/Right on a resize handle adjusts width.
- Column layout resets on refresh.
- Drag the login window by its blue title bar. The entire box stays within the viewport, including after resizing. Short viewports scroll the window's contents internally.
- Keyboard: focus the login title bar and use arrow keys to move 10 pixels, or Shift + arrow keys for 1 pixel. Position resets on refresh.

## Browser verification

`dev/smoke.cjs` runs a real Chrome session against the Docker instance. It creates a fresh test account on each run and leaves it in the local database for inspection. It checks:

- Registration, logout, and login.
- Opening a challenge leaves it unsolved and hides the list.
- A real free hint unlock.
- Incorrect and correct server-validated submissions.
- Solved state after reload and a new login.
- The player's 50-point scoreboard result.
- Search, empty results, column reordering/resizing, and layout reset.
- Scoreboard, users, private profile, settings, notifications, and home page rendering.
- Desktop 1440 x 1000 and mobile 390 x 844, including horizontal overflow and browser exceptions.

Run using an available Playwright installation with Chrome installed:

```sh
PLAYWRIGHT_MODULE=/absolute/path/to/node_modules/playwright node dev/smoke.cjs
```

Screenshots are saved to `dev/desktop.png`, `dev/reader.png`, `dev/mobile.png`, and `dev/mobile-reader.png`.

Login (desktop/mobile), scoreboard, and profile screenshots are also captured. The login checks include invalid credentials and successful authentication. `dev/contrast.cjs` checks rendered text against its background across nine representative pages, plus chart palette contrast. Run it with the same `PLAYWRIGHT_MODULE` environment variable. Chart labels and series use explicit dark colors on white; profile timestamps use compact labels to prevent clipping.

The shared template includes a small workaround for CTFd 3.8.7's profile graph: its category loops otherwise evaluate before the asynchronous solves response arrives.

`dev/branding.cjs` verifies login drag boundaries, keyboard movement, viewport resizing, short-height scrolling, the admin Theme Settings builder, custom logo/name rendering, and default fallback. It temporarily changes theme settings and restores their previous value. Run with the same `PLAYWRIGHT_MODULE` variable against the local seeded instance.

## Original standalone prototype

Open `index.html` directly to preview the original eight-challenge prototype without Docker. Its `app.js` uses demo flags and local-storage progress. It is separate from the installable theme and does not connect to CTFd.

## Files

- `theme/templates/`: CTFd shared shell and challenge page.
- `theme/static/`: XP styling and server-backed challenge interactions.
- `compose.yaml`: pinned, local Docker environment.
- `dev/seed.py`: local accounts, settings, and sample challenges.
- `dev/smoke.cjs`: repeatable browser integration test.
- `index.html`, `styles.css`, `accessibility.css`, `app.js`, `columns.js`: standalone prototype.
- `PRODUCT.md`, `DESIGN.md`: product requirements and visual direction.
