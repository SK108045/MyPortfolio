export type ProjectCategory =
  | "Business systems"
  | "Web & commerce"
  | "Tools & automation";

export type PortfolioProject = {
  slug: string;
  name: string;
  shortName: string;
  category: ProjectCategory;
  year: string;
  type: string;
  summary: string;
  stack: string[];
  visual: "stations" | "mobile" | "storefront" | "mapping" | "canvas";
  source?: string;
  live?: string;
  problem: string;
  approach: string;
  features: { title: string; description: string }[];
  engineering: string;
  scope: string;
};

// Curated from the repositories' source and documentation, reviewed 1 October 2026.
// Private repositories intentionally have no public source-code link.
export const projects: PortfolioProject[] = [
  {
    slug: "multi-station-pos",
    name: "Multi-station POS",
    shortName: "Oraforge / Shared shop",
    category: "Business systems",
    year: "2026",
    type: "Retail operations",
    summary:
      "Multiple tills. One inventory. A shared-shop point of sale system built around consistent stock, accountable staff, and reliable checkout.",
    stack: ["FastAPI", "PostgreSQL", "JavaScript", "Docker"],
    visual: "stations",
    problem:
      "A shop with several tills needs every sale to update the same stock. Separate local databases make inventory, receipts, and cashier accountability harder to trust.",
    approach:
      "I built a shared-shop backend with FastAPI and PostgreSQL. Browser tills connect to a shop server, while managers use a separate admin portal to manage products, staff, customers, and devices.",
    features: [
      {
        title: "Shared inventory",
        description:
          "Checkout updates stock, payments, and audit movements in one database transaction. Competing changes are checked before they overwrite newer data.",
      },
      {
        title: "Till & cashier identity",
        description:
          "Separate till enrollment and staff sign-in record which device and person created and completed each sale.",
      },
      {
        title: "Shop onboarding",
        description:
          "A browser setup flow creates the manager, tills, and a retail, pharmacy, restaurant, hardware, boutique, bar, or custom shop profile.",
      },
      {
        title: "Retry-safe checkout",
        description:
          "Idempotency keys let a till recover a committed sale after a lost response without recording the payment twice.",
      },
    ],
    engineering:
      "The interesting part was coordinating concurrent checkout. Orders and products are locked consistently, money is stored as integer cents, and edits check record versions. PostgreSQL regression tests cover shared-shop behavior and terminal isolation.",
    scope:
      "This version supports cash checkout on browser tills. It can run without internet while the shop server and LAN are available. The standalone Android POS is a separate application.",
  },
  {
    slug: "offline-android-pos",
    name: "Offline Android POS",
    shortName: "Oraforge / In your pocket",
    category: "Business systems",
    year: "2026",
    type: "Mobile application",
    summary:
      "A complete sales workflow in your pocket, with on-device storage, barcode scanning, receipts, and six business profiles.",
    stack: ["Capacitor", "SQLite", "JavaScript", "Android"],
    visual: "mobile",
    problem:
      "Small businesses need a usable POS on a phone, including in places where internet access is unreliable. The core sales workflow should not depend on a remote server.",
    approach:
      "I packaged the POS interface in a Capacitor Android app, with a native SQLite bridge for local operations and an IndexedDB fallback for browser testing.",
    features: [
      {
        title: "Local-first sales",
        description:
          "The interface and operational data live on the device, so core sales work without a Python server or internet connection.",
      },
      {
        title: "Six business profiles",
        description:
          "Retail, pharmacy, restaurant, hardware, boutique, and bar profiles adapt the same codebase to different workflows.",
      },
      {
        title: "Barcode workflow",
        description:
          "Camera scanning and USB or Bluetooth scanners help users find products and add them to the cart.",
      },
      {
        title: "Backup & restore",
        description:
          "Versioned exports support local backup and restore. The PC browser preview also has a daily backup scheduler.",
      },
    ],
    engineering:
      "The SQLite bridge keeps a familiar web interface usable as an Android application. I kept browser preview storage separate from native storage and treated network integrations as optional additions to the core sales flow.",
    scope:
      "The Android app operates independently. Shared stock with the multi-station server and automatic mobile backups are future work.",
  },
  {
    slug: "nicoo-furniture",
    name: "Nicoo Furniture Hub",
    shortName: "Nicoo / A better storefront",
    category: "Web & commerce",
    year: "2026",
    type: "Commerce & payments",
    summary:
      "A Nairobi furniture storefront that connects the catalogue, customer accounts, M-Pesa checkout, and order history in one experience.",
    stack: ["Astro", "TypeScript", "Clerk", "Supabase", "M-Pesa"],
    visual: "storefront",
    live: "https://furniture-chi-eight.vercel.app",
    problem:
      "A furniture catalogue is only one part of the buying experience. Customers also need a clear checkout, account access, and a way to revisit their orders.",
    approach:
      "I built an Astro storefront with Clerk authentication, Supabase order storage, and Swifta M-Pesa STK checkout. The customer portal ties those pieces together.",
    features: [
      {
        title: "Catalogue & shopping bag",
        description:
          "Product collections, persistent shopping bags, and delivery or pickup options guide customers into checkout.",
      },
      {
        title: "M-Pesa checkout",
        description:
          "STK push, payment guidance, retry states, and callback handlers support the phone payment flow.",
      },
      {
        title: "Customer portal",
        description:
          "Customers can search orders, revise drafts, reorder, manage delivery details, and download printable summaries.",
      },
      {
        title: "Receipt emails",
        description:
          "Receipt delivery connects paid orders with branded emails, alongside explicit retry and configuration handling.",
      },
    ],
    engineering:
      "Prices are resolved on the server instead of trusting the shopping bag. Authentication, order persistence, and payment confirmation have distinct responsibilities, with callbacks completing the provider event flow.",
    scope:
      "Automatic payment confirmation depends on the provider sending callbacks to the deployed app. Delivery is arranged with the shop; the visit enquiry form is a local preview.",
  },
  {
    slug: "parseify",
    name: "Parseify",
    shortName: "Parseify / Messy data, ready to import",
    category: "Tools & automation",
    year: "2026",
    type: "Data transformation",
    summary:
      "A supplier data tool that turns inconsistent spreadsheets into Shopify product imports, with reusable mappings and optional AI fallback.",
    stack: ["Python", "RapidFuzz", "Gemini", "Vite", "Supabase"],
    visual: "mapping",
    problem:
      "Supplier files rarely match an import schema. Column names vary, variants and images are spread across columns, and spreadsheet software can damage barcodes.",
    approach:
      "I built a layered mapping pipeline: saved profiles, normalization, exact matching, fuzzy matching, pattern detection, then optional AI for unresolved columns.",
    features: [
      {
        title: "Reusable supplier profiles",
        description:
          "Save a known mapping and apply it to later files from the same supplier, avoiding repeated manual setup.",
      },
      {
        title: "Variant & image expansion",
        description:
          "Turn wide supplier rows into grouped product, variant, and image records for the target import format.",
      },
      {
        title: "Data normalization",
        description:
          "Normalize weights and prices, generate handles, and handle scientific-notation barcodes.",
      },
      {
        title: "Validation before export",
        description:
          "Check required fields and output structure before writing the import CSV. A separate public site supports pilot requests.",
      },
    ],
    engineering:
      "The deterministic mapping layers do the first pass. AI is optional rather than required for every file, and the transformation engine separates mapping, expansion, normalization, and validation.",
    scope:
      "The conversion pipeline and operator workbench are separate from the public marketing site. The public site accepts pilot requests; it does not offer a public file-upload conversion service.",
  },
  {
    slug: "sketchsync",
    name: "SketchSync",
    shortName: "SketchSync / Create together",
    category: "Web & commerce",
    year: "2024",
    type: "Real-time collaboration",
    summary:
      "A collaborative drawing board with a shared canvas, live drawing updates, and persistent drawing data.",
    stack: ["Node.js", "WebSocket", "Firebase", "Canvas"],
    visual: "canvas",
    source: "https://github.com/SK108045/SketchSync",
    problem:
      "A shared drawing space needs to feel immediate. Participants should see each other’s changes as they draw, without manually refreshing the page.",
    approach:
      "I connected an HTML Canvas interface to a Node.js and WebSocket backend, using Firebase for persistent drawing data.",
    features: [
      {
        title: "Live drawing updates",
        description:
          "WebSocket messages synchronize drawing actions across connected participants.",
      },
      {
        title: "Drawing controls",
        description:
          "A color picker, brush sizes, and eraser support a simple collaborative sketching workflow.",
      },
      {
        title: "Persistent canvas data",
        description:
          "Firebase stores drawing data alongside the live communication layer.",
      },
      {
        title: "Web-based collaboration",
        description:
          "A responsive canvas interface makes the project accessible from the browser.",
      },
    ],
    engineering:
      "This project helped me work through event-driven communication: drawing actions become messages, remote messages update the canvas, and stored data gives the session persistence.",
    scope:
      "An earlier project that remains part of my work in real-time web applications. Source code is available on GitHub.",
  },
];

export const categories = [
  "All work",
  "Business systems",
  "Web & commerce",
  "Tools & automation",
] as const;
export const contactEmail = "wakabajohn72@gmail.com";
