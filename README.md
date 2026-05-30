# SiddhiExports Website

Marketing website for **SiddhiExports** — international parcel & shipping services from India.
Built with [Astro](https://astro.build), deployed free to **GitHub Pages**, with a parcel-inquiry
form that emails you via **your own SMTP** (through EmailJS) plus an instant **WhatsApp** channel.

---

## 1. Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build
```

> Requires Node.js 18.20+, 20.3+ or 22+.

---

## 2. ✏️ Customize your details (one file)

Open **`src/data/site.ts`** and replace everything marked `⚠️ REPLACE`:

- Phone & WhatsApp number (international format, **digits only** — e.g. `919876543210`)
- Email, business address, PIN code, working hours
- Google Maps embed link (`mapEmbedSrc`)
- Instagram / Facebook URLs
- Testimonials and any service/FAQ wording

This single file feeds every page, the header, footer, and the floating WhatsApp button.

Replace the placeholder graphics in `public/` when you have real ones:
`favicon.svg`, `og-image.svg` (social share preview), `images/hero.svg`.

---

## 3. ✉️ Connect the inquiry form (EmailJS + Google Workspace)

GitHub Pages can't run a server, so the form sends through **EmailJS**, which connects securely to
your **Google Workspace** account. Submissions are sent **from `info@siddhiexports.in`** and land in
**`query@siddhiexports.in`**. Your login is held by Google/EmailJS — it is **never** in this repo.

1. Create a free account at **https://www.emailjs.com**.
2. **Email Services → Add New Service → Gmail.** Click **Connect Account** and sign in as
   **`info@siddhiexports.in`** (your Google Workspace mailbox), then allow access. Note the **Service ID**.
   *(Prefer SMTP? You can instead add an "Other / SMTP" service using `smtp.gmail.com`, port `465`,
   username `info@siddhiexports.in`, and a Google **App Password** — but the Gmail option above is easiest.)*
3. **Email Templates → Create a template** and set:
   - **To Email:** `query@siddhiexports.in`  (or `{{to_email}}`)
   - **From Name:** `{{from_name}}`
   - **From Email:** `info@siddhiexports.in`
   - **Reply To:** `{{reply_to}}`  *(so you can reply straight to the customer)*
   - **Subject:** `{{subject}}`
   - **Content:** open the editor's **code/HTML view** and paste the ready-made, branded template from
     **`docs/emailjs-template.html`** in this repo. It already lays out every field neatly.
   Save and note the **Template ID**.
4. **Account → General** → copy your **Public Key**.
5. Put the three values where the build can read them:

   **Local dev** — copy `.env.example` to `.env` and fill in:
   ```
   PUBLIC_EMAILJS_PUBLIC_KEY=xxxx
   PUBLIC_EMAILJS_SERVICE_ID=service_xxxx
   PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxx
   ```

   **GitHub Pages build** — repo **Settings → Secrets and variables → Actions → Variables tab**
   → add the same three names. (Use *Variables*, not *Secrets* — they're public, browser-safe IDs
   and must be readable at build time.)

Until these are set, the form politely tells visitors to use the **WhatsApp** button (which always
works and arrives pre-filled with their details — so you never lose a lead).

---

## 4. 🚀 Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to the `main` branch — the workflow in `.github/workflows/deploy.yml` builds and deploys
   automatically. Your site goes live at the Pages URL.

### Custom domain (`siddhiexports.in`)
- `public/CNAME` already contains `siddhiexports.in`.
- At your domain registrar, point the domain to GitHub Pages (A records to GitHub's IPs, or a
  `CNAME` for `www`). See GitHub's "Managing a custom domain" docs.
- In **Settings → Pages**, set the custom domain and enable **Enforce HTTPS**.

### No custom domain yet?
Edit `astro.config.mjs`: set `site: 'https://<your-user>.github.io'`, uncomment
`base: '/<repo-name>'`, and delete `public/CNAME`.

---

## 5. SEO notes
- Per-page titles, meta descriptions, Open Graph & Twitter tags (`src/layouts/Layout.astro`).
- `LocalBusiness` + `FAQPage` JSON-LD structured data.
- Auto-generated `sitemap-index.xml` (via `@astrojs/sitemap`) and `public/robots.txt`.
- After deploy: submit your domain + sitemap in **Google Search Console**.

## Project structure
```
src/
  data/site.ts        ← edit your details here
  layouts/Layout.astro
  components/          ← Header, Footer, Hero, QuoteForm, etc.
  pages/              ← /, /services, /about, /partners, /contact, /get-quote, 404
public/               ← favicon, og-image, flags, CNAME, robots.txt
```
