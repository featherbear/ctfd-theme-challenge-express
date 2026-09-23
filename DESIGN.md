# Challenge Express design system

## Visual identity

User-pinned Windows XP / Outlook Express email-client interface. The application itself is the design: a folder tree, dense inbox, and reading pane rather than a landing page surrounding a mock application.

## Tokens

| Role | Value |
| --- | --- |
| Desktop | `#3d6c99` |
| Window blue | `#245edb` |
| Window frame | `#0751cf` |
| Toolbar / chrome | `#ece9d8` |
| Pane background | `#ffffff` |
| Main text | `#222222` |
| Selection | `#316ac5` |
| Selected message | `#dbe7f8` |
| Borders | `#aca899` |
| Error text | `#a32820` |
| Success text | `#296322` |

Tahoma, Verdana, sans-serif; 12px base, 11px dense utility controls, 19px message subject. Compact typography is intentional to the era. Flags use a monospace face. Original colored SVG icons share a 24px viewBox, rendered at 16–26px. No shipping raster assets or external fonts.

## Layout

- Desktop: 218px folder pane beside a flexible inbox and reader; 242px scrollable message list above the reading pane.
- The reading pane keeps its header and reply form visible, with the message body independently scrollable.
- At 760px and below, folders become a horizontally scrollable strip; sender/category table columns disappear; message content uses document scrolling.
- A fixed taskbar anchors the experience. Page-bottom padding reserves space for it.

## State and interaction

**Read means solved.** Selecting a message never changes read state. A correct submission updates the icon, message weight, folder counts, progress, and points. Unread messages use bold subjects and closed envelopes; solved messages use regular text and open envelopes. Selection is pale blue, separate from solve state. There is no bookmarking feature. The inbox list shows status, subject, category, and points, with no From column.

Native buttons, inputs, dialog, details, and links provide keyboard behavior. Focus uses a blue outline; feedback uses text plus color and live announcements. No cosmetic animations delay operation.

## Review

### CTFd login and legibility

The login page uses a centered XP Log On window on the blue desktop: blue title bar, white identity banner, cream form area, inset inputs, and an outlined default button. Mobile stacks field labels above inputs. Native CTFd authentication, CSRF handling, error feedback, reset and registration links remain functional. Player navigation has no language selector.

Shared CTFd pages use dark headings and body text on cream or white. Muted text is `#465365`, links `#164d9e`, errors `#982c21`, and success text `#255b20`. White labels use darker blue/green chrome. Charts use explicit white backgrounds, dark labels, and a series palette with minimum 6.8:1 contrast against white. Category/solve indicators use the same darker palette. `dev/tests/contrast.cjs` checks rendered text; browser screenshots cover the XP prompt, scoreboard and profile charts.

Desktop and mobile screenshots inspected in two bounded passes. Fixed search/icon ID collision, desktop reply visibility, narrow status-column clipping, and white-label contrast. Compact text, inset pane boundaries, gradient title chrome, and segmented progress intentionally preserve the requested period aesthetic. Review was performed in-session; no independent reviewer was used.
