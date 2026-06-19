# Chuck Ammons — Reconstructing Dad Launch Site

Static site. No build step, no framework — plain HTML/CSS/JS, deploys to
Cloudflare Pages as-is.

## What's real now

- **Title**: Reconstructing Dad
- **Cover / hero image**: the actual promo photo you sent, optimized for web (`assets/hero-photo.jpg`)
- **Subtitle**: "Seeing God Through the Lens of Jesus" — pulled directly off the printed cover in your photo
- **Dates**: June 21 (Father's Day) pre-order / July 17, 2026 release — confirmed against your Facebook posts
- **Reviews carousel**: Brian Simmons' Reconstructing Dad-specific endorsement, the two original endorsers, and 3 curated reader reviews pulled from your Amazon screenshots
- **Author note band**: pull-quote ("There is no creativity without vulnerability") linking to the Substack post
- **Backlist carousel**: 7 confirmed titles with covers + Amazon links
- **About photo**: your uploaded bio shot, framed as a simple white card rather than circle-cropped — the source file already has a built-in arc cutout, and stacking a circular CSS mask on top of that made it look broken. The card frame works with it instead.

## Flagging two real discrepancies — confirm before launch

1. **Subtitle mismatch.** Your June 8 Facebook post text calls the book
   "Reconstructing Dad: Discovering the God Who Looks Just Like Jesus,"
   but the printed cover in your photo reads "Seeing God Through the Lens
   of Jesus." The site currently uses the cover's wording since that's the
   printed asset. Let me know which is final.
2. **Backlist count.** Your bio copy says eight books before this one
   (ninth release). chuckammons.com/resources only shows 7 titles once
   Reconstructing Dad is pulled out (it was incorrectly listed there as
   backlist, which I removed since it's the book this whole site is for).
   If there's an 8th title not on that page, send it over and I'll add it.

## Still placeholder

- [ ] **Pre-order link** — replace every `#PREORDER_LINK` (3 places: nav, hero button)
- [ ] **Backlist images** — still hotlinked from chuckammons.com's Wix CDN. Fine
      short-term; for production, save the 8 cover files locally into `assets/`
      and repoint the `src` attributes so the site isn't dependent on the Wix
      site staying up.
- [ ] **Newsletter form / email service** — intentionally left alone per your last message; still just clears the input on submit, no backend wired.

## Deploying to Cloudflare Pages

This chat can write and refine the code (this folder) but can't run `wrangler`
against your real Cloudflare account or bind a custom domain — that's a
Claude Code job.

**Option A — Dashboard (fastest first pass, no CLI):**
1. Cloudflare dashboard → Workers & Pages → Create → Pages → Upload assets
2. Drag in this whole folder
3. Add the custom domain under the project's "Custom domains" tab

**Option B — Claude Code + Wrangler (better for ongoing deploys):**
```
npm install -g wrangler
wrangler login
wrangler pages deploy . --project-name=reconstructing-dad
```
Then `wrangler pages domain add <your-domain>` or bind it via the dashboard.
