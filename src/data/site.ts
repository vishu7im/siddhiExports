// =============================================================================
// SITE CONFIG — single source of truth.
// Edit THIS file to update contact details, services, countries, FAQs, etc.
// Values marked  ⚠️ REPLACE  are placeholders — swap in your real details.
// =============================================================================

export const site = {
  name: 'SiddhiExports',
  legalName: 'SiddhiExports',
  tagline: 'International Parcel & Shipping Services from India',
  description:
    'Send parcels safely from India to the UK, Canada, USA, Australia & Europe. Doorstep pickup, affordable rates, trusted courier network & parcel tracking support. Get a free quote in under 1 minute.',
  url: 'https://siddhiexports.in',

  // ── Contact details ─────────────────────────────────────────────────────
  // Phone/WhatsApp in INTERNATIONAL format, digits only (no +, spaces, dashes)
  // for the WhatsApp/tel links. `phoneDisplay` is what users see.
  phoneDisplay: '+91 8818000522', // ⚠️ REPLACE
  phone: '918818000522', //            ⚠️ REPLACE  (used for tel: link)
  whatsapp: '918818000522', //         ⚠️ REPLACE  (used for wa.me link)
  email: 'info@siddhiexports.in', //   public contact / "from" mailbox (Google Workspace)

  // Inbox that receives quote-form submissions (sent FROM `email` via EmailJS Gmail service).
  formRecipient: 'query@siddhiexports.in',
  // Friendly "from name" shown in the inbox for form emails.
  senderName: 'SiddhiExports Website',

  // ── Address ──────────────────────────────────────────────────────────────
  address: {
    line1: 'Near Railway Road', //              ⚠️ REPLACE
    city: 'Kurukshetra',
    state: 'Haryana',
    postalCode: '136118', //                     ⚠️ REPLACE
    country: 'India',
  },
  // Google Maps share/embed link. Get yours: Google Maps → your business →
  // Share → Embed a map → copy the src URL into mapEmbedSrc.
  mapEmbedSrc:
    'https://www.google.com/maps?q=Kurukshetra%2C%20Haryana%2C%20India&output=embed', // ⚠️ REPLACE with your exact pin
  mapLink: 'https://maps.google.com/?q=Kurukshetra,Haryana,India', //                    ⚠️ REPLACE

  workingHours: 'Mon – Sat: 9:00 AM – 7:00 PM', // ⚠️ REPLACE

  // ── Social ────────────────────────────────────────────────────────────────
  instagram: 'https://instagram.com/siddhiexports', // ⚠️ REPLACE
  facebook: 'https://facebook.com/siddhiexports', //   ⚠️ REPLACE

  // ── EmailJS (read from env — see .env.example & README) ─────────────────────
  emailjs: {
    publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
    serviceId: import.meta.env.PUBLIC_EMAILJS_SERVICE_ID ?? '',
    templateId: import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
  },
};

// Pre-filled WhatsApp link helper text used by buttons across the site.
export const whatsappDefaultText =
  'Hello SiddhiExports, I would like to send a parcel internationally. Please share a shipping quote.';

export function whatsappLink(text: string = whatsappDefaultText): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

// ── Navigation ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Countries', href: '/#countries' },
  { label: 'Partners', href: '/partners' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// ── Why choose us / trust points ──────────────────────────────────────────────
export const trustPoints = [
  { icon: 'truck', title: 'Doorstep Pickup', text: 'We collect the parcel right from your home.' },
  { icon: 'globe', title: 'International Delivery', text: 'Reliable shipping to 6+ regions worldwide.' },
  { icon: 'tag', title: 'Affordable Rates', text: 'Honest, competitive international pricing.' },
  { icon: 'shield', title: 'Trusted Courier Partners', text: 'Backed by a global logistics network.' },
  { icon: 'pin', title: 'Tracking Support', text: 'Stay updated on your parcel’s journey.' },
  { icon: 'chat', title: 'Fast Customer Support', text: 'Quick replies on WhatsApp & call.' },
];

// ── Services ──────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: 'box',
    title: 'International Parcel Shipping',
    text: 'Safe, reliable parcel shipping for students and families abroad.',
  },
  {
    icon: 'food',
    title: 'Food Item Shipping',
    text: 'Indian homemade food, snacks, spices and pickles — packed with care.',
  },
  {
    icon: 'doc',
    title: 'Document Courier',
    text: 'Passports, university papers and legal documents delivered securely.',
  },
  {
    icon: 'shirt',
    title: 'Clothes & Personal Items',
    text: 'Careful international handling for clothes and personal belongings.',
  },
  {
    icon: 'cap',
    title: 'Student Parcel Services',
    text: 'Special pricing and support for students living abroad.',
  },
  {
    icon: 'boxes',
    title: 'Bulk Shipping Support',
    text: 'Dedicated support for regular customers and businesses.',
  },
];

// ── Countries ─────────────────────────────────────────────────────────────────
export const countries = [
  { name: 'United Kingdom', flag: '/images/flags/uk.svg' },
  { name: 'Canada', flag: '/images/flags/canada.svg' },
  { name: 'USA', flag: '/images/flags/usa.svg' },
  { name: 'Australia', flag: '/images/flags/australia.svg' },
  { name: 'Germany', flag: '/images/flags/germany.svg' },
  { name: 'Europe', flag: '/images/flags/europe.svg' },
];

// Destination options for the quote form's dropdown.
export const destinationOptions = [
  'United Kingdom',
  'Canada',
  'USA',
  'Australia',
  'Germany',
  'Other Europe',
  'Other (mention in notes)',
];

// ── How it works ────────────────────────────────────────────────────────────
export const howItWorks = [
  { step: '1', title: 'Submit Inquiry', text: 'Fill the quick form or message us on WhatsApp.' },
  { step: '2', title: 'We Contact You', text: 'We confirm details and share your best shipping rate.' },
  { step: '3', title: 'Pickup & Shipping', text: 'We pick up from your door and ship it worldwide.' },
];

// ── Partner / network names (rendered as styled wordmarks) ─────────────────────
// NOTE: presented as a "shipping & logistics network" — never "official partner".
export const partners = [
  { name: 'DHL', color: '#D40511' },
  { name: 'FedEx', color: '#4D148C' },
  { name: 'UPS', color: '#351C15' },
  { name: 'Aramex', color: '#E4002B' },
  { name: 'DTDC', color: '#003F87' },
  { name: 'Blue Dart', color: '#0072BC' },
];

// ── Testimonials ──────────────────────────────────────────────────────────────
// ⚠️ REPLACE with real customer reviews when available.
export const testimonials = [
  {
    quote: 'Very smooth parcel service to the UK. Highly recommended.',
    author: 'Ravi S.',
    location: 'Sent to London, UK',
  },
  {
    quote: 'Sent homemade food to my daughter in Canada. Reached safely and fast!',
    author: 'Sunita D.',
    location: 'Sent to Toronto, Canada',
  },
  {
    quote: 'Affordable rates and they picked up the parcel from my home. Great support.',
    author: 'Amanpreet K.',
    location: 'Sent to Sydney, Australia',
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    q: 'What items can I send internationally?',
    a: 'Clothes, documents, homemade food, snacks, spices, gifts, medicines and most personal belongings. Message us with your contents and we’ll confirm if anything needs special handling.',
  },
  {
    q: 'How long does delivery take?',
    a: 'It depends on the destination and service chosen — typically a few business days to a couple of weeks. We share an estimated timeline with your quote.',
  },
  {
    q: 'Do you provide doorstep pickup?',
    a: 'Yes. We collect the parcel directly from your address in India at a time convenient for you.',
  },
  {
    q: 'Can I track my parcel?',
    a: 'Yes. We provide tracking support so you can follow your parcel’s journey until it’s delivered.',
  },
  {
    q: 'Which countries do you ship to?',
    a: 'The UK, Canada, USA, Australia, Germany and across Europe — plus many other destinations on request.',
  },
];
