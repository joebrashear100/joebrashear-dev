# joebrashear.dev

Personal portfolio and design system showcase. Live at **[joebrashear.dev](https://joebrashear.dev)**.

---

## Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 (UMD, no build step) + Babel standalone for JSX |
| Styling | Vanilla CSS with custom properties (Altitude design system) |
| Fonts | Inter + JetBrains Mono via Google Fonts |
| Hosting | AWS S3 static website |
| CDN / HTTPS | AWS CloudFront |
| Domain | AWS Route 53 — joebrashear.dev |
| SSL | AWS ACM (DNS-validated) |

---

## Project structure

```
├── index.html          # Entry point — loads React + Babel + components
├── styles.css          # Altitude design system tokens + all component styles
├── App.jsx             # Root — data (PROJECTS, WORK, TRACKS) + layout composition
├── Nav.jsx             # Sticky top nav with theme toggle
├── Hero.jsx            # Headline, lede, CTAs, terminal widget
├── Terminal.jsx        # macOS-style terminal widget
├── ImpactBar.jsx       # 4-stat impact row
├── ProjectCard.jsx     # Project card with inline signal strip (PRs, commits)
├── WorkRow.jsx         # Enterprise work row (NDA-safe)
├── SignalPanels.jsx    # Panel variants: PRPanel, StatPanel, NowPlayingPanel
├── Heatmap.jsx         # GitHub-style contribution heatmap
├── Footer.jsx          # Footer with links and copyright
└── favicon.ico         # Amber dot on off-white (#BA7517 on #FAFAF7)
```

---

## Design system — Altitude

All visual decisions live in CSS custom properties at the top of `styles.css`.

**Palette**

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#FAFAF7` | `#0E0E0C` |
| `--surface` | `#FFFFFF` | `#161614` |
| `--surface-2` | `#F1EFE8` | `#1F1F1C` |
| `--accent` | `#BA7517` | `#EF9F27` |
| `--live` | `#1D9E75` | `#5DCAA5` |
| `--text` | `#1A1A18` | `#F1EFE8` |

**Typography**
- `--sans`: Inter — headings, body, descriptions
- `--mono`: JetBrains Mono — nav, labels, stats, code, all data

**Theme** — defaults to system `prefers-color-scheme`, overridable via the nav toggle.

---

## Updating content

All site content lives in `App.jsx` at the top of the file:

- **`PROJECTS`** — 4 active repos with signal data (commits/7d, open PRs, last PR)
- **`WORK`** — Delta enterprise portfolio (NDA-safe category descriptions)
- **`TRACKS`** — Spotify now-playing

Edit the relevant array and redeploy.

---

## Deployment

The site deploys to S3 + CloudFront. All files are public and served as static assets.

```bash
# Upload a changed file
aws s3 cp <file> s3://joe-brashear-portfolio-139316820951/ --content-type "<type>"

# Bust the CloudFront cache after any change
aws cloudfront create-invalidation --distribution-id E1ZZRGZSLATJAL --paths "/*"
```

**Infra summary**
- Bucket: `joe-brashear-portfolio-139316820951` (us-east-1)
- Distribution: `E1ZZRGZSLATJAL`
- CloudFront domain: `d3snmln37pp6gr.cloudfront.net`
- SSL cert ARN: `arn:aws:acm:us-east-1:139316820951:certificate/1d73d7c4-767f-48f9-8c60-eefc04293d05`

---

## Responsive breakpoints

| Breakpoint | Target |
|---|---|
| Default | Desktop ≥ 881px |
| `≤ 880px` | Tablet — single column layout |
| `≤ 430px` | Mobile — iPhone 14 Pro (393px) and similar |

---

*Built in Atlanta. Altitude design system — joebrashear.dev*
