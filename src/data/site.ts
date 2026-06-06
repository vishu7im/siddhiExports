// =============================================================================
// SITE CONFIG — single source of truth.
// Edit THIS file to update contact details, services, countries, FAQs, etc.
// Values marked  ⚠️ REPLACE  are placeholders — swap in your real details.
// =============================================================================

export const site = {
  name: "SiddhiExports",
  legalName: "SiddhiExports",
  tagline: "International Parcel & Shipping Services from India",
  description:
    "Send parcels safely from India to the UK, Canada, USA, Australia & Europe. Doorstep pickup, affordable rates, trusted courier network & parcel tracking support. Get a free quote in under 1 minute.",
  url: "https://siddhiexports.in",

  // ── Contact details ─────────────────────────────────────────────────────
  // Phone/WhatsApp in INTERNATIONAL format, digits only (no +, spaces, dashes)
  // for the WhatsApp/tel links. `phoneDisplay` is what users see.
  phoneDisplay: "+91 8818000522", // ⚠️ REPLACE
  phone: "918818000522", //            ⚠️ REPLACE  (used for tel: link)
  whatsapp: "918818000522", //         ⚠️ REPLACE  (used for wa.me link)
  email: "info@siddhiexports.in", //   public contact / "from" mailbox (Google Workspace)

  // Inbox that receives quote-form submissions (sent FROM `email` via EmailJS Gmail service).
  formRecipient: "query@siddhiexports.in",
  // Friendly "from name" shown in the inbox for form emails.
  senderName: "SiddhiExports Website",

  // ── Address ──────────────────────────────────────────────────────────────
  address: {
    line1: "Near Railway Road", //              ⚠️ REPLACE
    city: "Kurukshetra",
    state: "Haryana",
    postalCode: "136118", //                     ⚠️ REPLACE
    country: "India",
  },
  // Google Maps share/embed link. Get yours: Google Maps → your business →
  // Share → Embed a map → copy the src URL into mapEmbedSrc.
  mapEmbedSrc:
    "https://www.google.com/maps?q=Kurukshetra%2C%20Haryana%2C%20India&output=embed", // ⚠️ REPLACE with your exact pin
  mapLink: "https://maps.google.com/?q=Kurukshetra,Haryana,India", //                    ⚠️ REPLACE

  workingHours: "Mon – Sat: 9:00 AM – 7:00 PM", // ⚠️ REPLACE
  // Schema.org openingHoursSpecification value (keep in sync with workingHours).
  openingHours: "Mo-Sa 09:00-19:00",

  // Approximate geo coordinates for Kurukshetra, Haryana — used in LocalBusiness schema.
  geo: { latitude: 29.9695, longitude: 76.8783 },

  // ── Social ────────────────────────────────────────────────────────────────
  instagram: "https://instagram.com/", // ⚠️ REPLACE
  facebook: "https://facebook.com/", //   ⚠️ REPLACE

  // ── EmailJS (read from env — see .env.example & README) ─────────────────────
  emailjs: {
    publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
    serviceId: import.meta.env.PUBLIC_EMAILJS_SERVICE_ID ?? "",
    templateId: import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  },
};

// Pre-filled WhatsApp link helper text used by buttons across the site.
export const whatsappDefaultText =
  "Hello SiddhiExports, I would like to send a parcel internationally. Please share a shipping quote.";

export function whatsappLink(text: string = whatsappDefaultText): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

// ── Navigation ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Countries", href: "/#countries" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ── Why choose us / trust points ──────────────────────────────────────────────
export const trustPoints = [
  {
    icon: "truck",
    title: "Doorstep Pickup",
    text: "We collect the parcel right from your home.",
  },
  {
    icon: "globe",
    title: "International Delivery",
    text: "Reliable shipping to 6+ regions worldwide.",
  },
  {
    icon: "tag",
    title: "Affordable Rates",
    text: "Honest, competitive international pricing.",
  },
  {
    icon: "shield",
    title: "Trusted Courier Partners",
    text: "Backed by a global logistics network.",
  },
  {
    icon: "pin",
    title: "Tracking Support",
    text: "Stay updated on your parcel’s journey.",
  },
  {
    icon: "chat",
    title: "Fast Customer Support",
    text: "Quick replies on WhatsApp & call.",
  },
];

// ── Services ──────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: "box",
    title: "International Parcel Shipping",
    text: "Safe, reliable parcel shipping for students and families abroad.",
  },
  {
    icon: "food",
    title: "Food Item Shipping",
    text: "Indian homemade food, snacks, spices and pickles — packed with care.",
  },
  {
    icon: "doc",
    title: "Document Courier",
    text: "Passports, university papers and legal documents delivered securely.",
  },
  {
    icon: "shirt",
    title: "Clothes & Personal Items",
    text: "Careful international handling for clothes and personal belongings.",
  },
  {
    icon: "cap",
    title: "Student Parcel Services",
    text: "Special pricing and support for students living abroad.",
  },
  {
    icon: "boxes",
    title: "Bulk Shipping Support",
    text: "Dedicated support for regular customers and businesses.",
  },
];

// ── Countries ─────────────────────────────────────────────────────────────────
export const countries = [
  { name: "United Kingdom", flag: "/images/flags/uk.svg" },
  { name: "Canada", flag: "/images/flags/canada.svg" },
  { name: "USA", flag: "/images/flags/usa.svg" },
  { name: "Australia", flag: "/images/flags/australia.svg" },
  { name: "Germany", flag: "/images/flags/germany.svg" },
  { name: "Europe", flag: "/images/flags/europe.svg" },
];

// Detailed per-country copy for the homepage "Countries We Ship To" section.
export const countryDetails = [
  {
    id: "canada",
    heading: "Parcel Service to Canada from India",
    flag: "/images/flags/canada.svg",
    alt: "Parcel service to Canada from India — Canada flag",
    text: "Canada is one of our most popular destinations. Our parcel service to Canada from India is trusted by parents sending homemade food, snacks and winter clothes to children in Toronto, Vancouver, Brampton, Calgary and beyond. We also run a dedicated student parcel service to Canada with careful packing, customs-ready documentation and tracking until delivery.",
  },
  {
    id: "uk",
    heading: "Parcel Service to UK from India",
    flag: "/images/flags/uk.svg",
    alt: "Parcel service to UK from India — United Kingdom flag",
    text: "Send parcels to London, Birmingham, Manchester, Leicester and every corner of the United Kingdom. Our food parcel service to the UK is a favourite — homemade pickles, sweets, spices and snacks packed to survive the journey. Clothes, gifts and documents travel just as safely with full tracking support.",
  },
  {
    id: "usa",
    heading: "Parcel Service to USA from India",
    flag: "/images/flags/usa.svg",
    alt: "Parcel service to USA from India — United States flag",
    text: "Our parcel service to the USA from India covers all 50 states, including New York, New Jersey, California and Texas. Whether it’s study material for a student, festive gifts for family or urgent business documents, we choose the fastest reliable route through our courier network at an affordable rate.",
  },
  {
    id: "australia",
    heading: "Parcel Service to Australia from India",
    flag: "/images/flags/australia.svg",
    alt: "Parcel service to Australia from India — Australia flag",
    text: "Australia has strict customs rules — and we know them well. Our parcel service to Australia from India ensures food items, clothes and personal belongings are declared and packed correctly for Sydney, Melbourne, Brisbane, Perth and Adelaide, so your parcel clears customs smoothly and arrives on time.",
  },
  {
    id: "germany",
    heading: "Parcel Service to Germany from India",
    flag: "/images/flags/germany.svg",
    alt: "Parcel service to Germany from India — Germany flag",
    text: "From Berlin to Munich, our parcel service to Germany from India delivers documents, gifts, clothes and care packages reliably. We prepare all EU customs paperwork for you, so students and professionals in Germany receive their parcels without delays or surprise charges.",
  },
  {
    id: "europe",
    heading: "International Shipping to Europe",
    flag: "/images/flags/europe.svg",
    alt: "International shipping to Europe from India — European Union flag",
    text: "Beyond Germany, our international shipping to Europe covers France, Italy, the Netherlands, Spain, Ireland, Poland and most other European countries. One pickup from your home in India, complete customs handling, and delivery to almost any address across Europe.",
  },
];

// Destination options for the quote form's dropdown.
export const destinationOptions = [
  "United Kingdom",
  "Canada",
  "USA",
  "Australia",
  "Germany",
  "Other Europe",
  "Other (mention in notes)",
];

// ── How it works ────────────────────────────────────────────────────────────
export const howItWorks = [
  {
    step: "1",
    title: "Request a Quote",
    text: "Fill the quick form or message us on WhatsApp with your parcel details.",
  },
  {
    step: "2",
    title: "Get the Best Rate",
    text: "We compare options across our courier network and share your best shipping rate.",
  },
  {
    step: "3",
    title: "Schedule Pickup",
    text: "Choose a convenient time — we collect the parcel from your doorstep.",
  },
  {
    step: "4",
    title: "Parcel Processing",
    text: "Your parcel is professionally packed, documented and customs-prepared.",
  },
  {
    step: "5",
    title: "Tracking Updates",
    text: "Follow your parcel’s journey with tracking support on WhatsApp.",
  },
  {
    step: "6",
    title: "International Delivery",
    text: "Your parcel is delivered safely to the destination address abroad.",
  },
];

// ── Partner / network names (rendered as styled wordmarks) ─────────────────────
// NOTE: presented as a "shipping & logistics network" — never "official partner".
export const partners = [
  { name: "DHL", color: "#D40511" },
  { name: "FedEx", color: "#4D148C" },
  { name: "UPS", color: "#351C15" },
  { name: "Aramex", color: "#E4002B" },
  { name: "DTDC", color: "#003F87" },
  { name: "Blue Dart", color: "#0072BC" },
];

// ── Testimonials ──────────────────────────────────────────────────────────────
// ⚠️ REPLACE with real customer reviews when available.
export const testimonials = [
  {
    quote:
      "Very smooth parcel service to the UK from Kurukshetra. Doorstep pickup was on time and the rate was honest. Highly recommended.",
    author: "Ravi S.",
    location: "Sent to London, UK",
  },
  {
    quote:
      "Sent homemade food and pickles to my daughter studying in Canada. Everything was packed carefully and reached safely and fast!",
    author: "Sunita D.",
    location: "Sent to Toronto, Canada",
  },
  {
    quote:
      "Affordable rates and they picked up the parcel from my home. Tracking updates on WhatsApp till delivery. Great support.",
    author: "Amanpreet K.",
    location: "Sent to Sydney, Australia",
  },
  {
    quote:
      "Needed urgent documents couriered to the USA. SiddhiExports handled everything the same day and kept me updated throughout.",
    author: "Vikram M.",
    location: "Sent to New Jersey, USA",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    q: "What is the best international parcel service in Kurukshetra?",
    a: "SiddhiExports is a trusted international parcel service in Kurukshetra, Haryana, located near Railway Road. We combine doorstep pickup, honest pricing, a reliable global courier network and personal WhatsApp support — which is why local families, students and businesses choose us for international shipping.",
  },
  {
    q: "What is the cheapest international parcel service in Kurukshetra?",
    a: "Rates depend on weight, size and destination, but SiddhiExports compares options across multiple courier partners to find you the cheapest reliable rate for every shipment. Request a free quote — we respond with your best price in minutes, with no hidden charges.",
  },
  {
    q: "How much does international parcel delivery cost?",
    a: "International parcel delivery cost depends on the destination country, parcel weight, dimensions and how quickly you need it delivered. Share your parcel details through our quote form or on WhatsApp and we’ll send you an exact, all-inclusive rate — usually within minutes.",
  },
  {
    q: "Which countries can I send parcels to?",
    a: "We ship parcels from India to the UK, Canada, USA, Australia, Germany and across Europe — including France, Italy, the Netherlands, Spain and Ireland. Many other destinations are available on request, so just ask.",
  },
  {
    q: "Can I send homemade food internationally?",
    a: "Yes. Homemade food courier is one of our specialities. We ship pickles, sweets, snacks, spices and dry food items abroad with leak-proof, customs-compliant packing. Some countries restrict certain food items, so we confirm what’s allowed for your destination before pickup.",
  },
  {
    q: "Can I send documents abroad?",
    a: "Yes. Our international document courier service securely delivers passports, university applications, degree certificates, visa paperwork and legal documents worldwide, with tracking from pickup to delivery.",
  },
  {
    q: "Do you provide doorstep pickup?",
    a: "Yes. Doorstep parcel pickup is free with every booking. We collect the parcel directly from your home or office in Kurukshetra and nearby areas at a time convenient for you.",
  },
  {
    q: "How long does international shipping take?",
    a: "Typical delivery times are 4–10 business days depending on the destination and service chosen. Express options are faster; economy options cost less. We share an estimated timeline along with your quote.",
  },
  {
    q: "Can I track my parcel?",
    a: "Yes. Every shipment includes parcel tracking support. You receive a tracking number once your parcel ships, and our team also sends updates on WhatsApp until it is delivered.",
  },
  {
    q: "Do you ship to Canada from India?",
    a: "Yes. Parcel service to Canada from India is one of our most popular routes. We deliver to Toronto, Vancouver, Brampton, Calgary and every Canadian province — including food parcels and student shipments.",
  },
  {
    q: "Do you ship to the UK from India?",
    a: "Yes. We ship parcels to the UK from India daily — to London, Birmingham, Manchester, Leicester and across England, Scotland, Wales and Northern Ireland. Homemade food, clothes, gifts and documents are all welcome.",
  },
  {
    q: "Do you ship to the USA from India?",
    a: "Yes. Our parcel service to the USA from India covers all 50 states. We handle customs documentation for you and choose the fastest reliable route through our courier network.",
  },
  {
    q: "Do you ship to Australia from India?",
    a: "Yes. We ship parcels to Australia from India with extra attention to Australia’s strict customs rules, so food items, clothes and personal belongings reach Sydney, Melbourne, Brisbane and Perth without delays.",
  },
  {
    q: "Can students get discounted parcel services?",
    a: "Yes. Our student parcel service offers special pricing for students studying abroad. Parents regularly use it to send food, clothes, books and study material to children in Canada, the UK, the USA and Australia.",
  },
  {
    q: "What items are prohibited for international shipping?",
    a: "Items like flammable liquids, batteries shipped loose, aerosols, weapons, currency and perishable wet food are restricted for international shipping. Rules vary by country — share your parcel contents with us and we’ll confirm what’s allowed before pickup.",
  },
  {
    q: "Which courier partner do you use?",
    a: "We work with a trusted international logistics network that includes major global carriers such as DHL, FedEx, UPS and Aramex. For each parcel we choose the partner offering the best balance of price, speed and reliability for your destination.",
  },
  {
    q: "How do I book an international parcel pickup?",
    a: "Booking takes under a minute: fill our online quote form or message us on WhatsApp with your parcel details and destination. We confirm the rate, schedule your doorstep pickup and handle everything from packing guidance to customs paperwork.",
  },
  {
    q: "Is packaging included?",
    a: "We guide you on packing and provide professional packing support for fragile items, food and liquids, so your parcel meets international courier standards. Tell us what you’re sending and we’ll advise the safest option.",
  },
  {
    q: "Do you provide business shipping services?",
    a: "Yes. We offer bulk international shipping for businesses, exporters and regular shippers — with volume pricing, scheduled pickups and dedicated support for commercial documentation.",
  },
  {
    q: "Why choose SiddhiExports for international shipping?",
    a: "Because we make international shipping simple: free doorstep pickup, affordable transparent rates, a trusted courier network, full tracking support and a real human on WhatsApp whenever you have a question — all from a local, reliable team in Kurukshetra.",
  },
];
