# JMA Organization — Multi-Page Static Website

Clean, fast static site for JMA Organization built with plain HTML, CSS, and vanilla JavaScript. No build step, no framework. Designed with a dark teal and gold skeuomorphic aesthetic across all pages.

## Pages

- **index.html** — Home page with service overview
- **publishing-house.html** — Publishing House service details
- **recording-studio.html** — Recording Studio & artist mentorship
- **mission-enablement.html** — Mission Enablement operational support
- **restorative-hospitality.html** — Restorative Hospitality programs
- **about.html** — About JMA, values, and story

## Design

- **Color scheme**: Dark muted teal (#0d2523) with gold accents (#c9a15c)
- **Aesthetic**: Premium skeuomorphic design with leather texture, metallic gold elements, stitching details, and subtle depth
- **Typography**: Fraunces (display), Work Sans (body)
- **Mobile-first responsive design** with collapsible hamburger navigation
- **Metallic buttons**: All gold buttons feature metallic gradient with inset shadows and texture
- **Hover states**: Subtle brightness adjustment on buttons and cards, no drastic color changes

## Logo Setup

1. Place your JMA logo (PNG or JPEG with transparency recommended) in `assets/img/`
2. Name it `logo.png` or `logo.jpg`
3. The header on all pages automatically references `assets/img/logo.png`
4. Logo displays at 40px height, scaling responsively

## Local Development

Open `index.html` directly in your browser, or run a local server:

```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Deployment to Cloudflare Pages

### Option A: Dashboard (Quick)
1. Go to **Cloudflare Dashboard** → **Workers & Pages**
2. Click **Create** → **Pages**
3. **Upload assets** — select this entire folder
4. Add your custom domain under **Custom domains**

### Option B: Via Wrangler CLI
```bash
npm install -g wrangler
wrangler login
wrangler pages deploy . --project-name=jma-org
wrangler pages domain add yourdomain.com
```

## Next Steps

- [ ] Add your JMA logo to `assets/` folder (and link in header if needed)
- [ ] Replace placeholder email (`JohnHeineLLC@gmail.com`) with production contact
- [ ] Deploy to Cloudflare Pages
- [ ] Connect custom domain (`jmaorg.net`)
- [ ] Update with real imagery/photography for each service

## File Structure

```
.
├── index.html                    # Homepage
├── publishing-house.html         # Service page
├── recording-studio.html         # Service page
├── mission-enablement.html       # Service page
├── restorative-hospitality.html  # Service page
├── about.html                    # About page
├── css/
│   └── style.css                # All styles (skeuomorphic design)
├── js/
│   └── main.js                  # Mobile menu toggle
├── assets/                      # Images (add logo, photos here)
└── README.md
```

## Notes

- All pages are fully responsive (tested at mobile, tablet, desktop)
- Mobile menu is hidden at 720px and below
- SEO-ready with proper meta tags on each page
- Lighthouse-optimized for performance
- No external dependencies — pure HTML/CSS/JS

