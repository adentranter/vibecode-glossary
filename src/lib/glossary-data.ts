export type Term = {
  term: string;
  definition: string;
  /** Why it actually matters when you're vibe coding, not just trivia. */
  note?: string;
};

export type Category = {
  slug: string;
  layer: number;
  title: string;
  tagline: string;
  blurb: string;
  terms: Term[];
};

export const categories: Category[] = [
  {
    slug: "computers-and-os",
    layer: 1,
    title: "Computers, Code & Operating Systems",
    tagline: "The bricks themselves",
    blurb:
      "What a computer is doing when it “runs” your code, and why the OS underneath changes your day.",
    terms: [
      {
        term: "Computer",
        definition:
          "A machine that follows instructions, extremely fast. Everything else is just organised ways of giving it those instructions.",
      },
      {
        term: "Code",
        definition:
          "The instructions themselves, written in a language a computer eventually understands.",
      },
      {
        term: "Operating system (OS)",
        definition:
          "The base layer — Windows, macOS, or Linux — that manages hardware and how programs run.",
        note: "Most AI coding tools are built on Mac/Linux. Windows works — often via one extra step (WSL).",
      },
      {
        term: "WSL (Windows Subsystem for Linux)",
        definition:
          "A real Linux environment that runs inside Windows, alongside your normal desktop.",
        note: "On Windows, run vibe-coding tools inside WSL so you match the Mac/Linux setup they were built for.",
      },
    ],
  },
  {
    slug: "web-and-browsers",
    layer: 2,
    title: "The Web, Browsers & the Front End",
    tagline: "Aden's Mowing, page one",
    blurb:
      "One mowing-business web page: one link on the internet, one file on disk — here's what's inside.",
    terms: [
      {
        term: "Webpage",
        definition:
          "A document your browser can request and display. A single-page site is one link, and on disk, one file.",
      },
      {
        term: "Browser",
        definition:
          "A desktop app (Chrome, Firefox, Edge) that requests and renders web pages by exchanging HTML with a server.",
      },
      {
        term: "HTML",
        definition:
          "What the content is — headings, text, images, and structure.",
      },
      {
        term: "CSS",
        definition:
          "The styling layer. Turns plain content into something that looks like your brand.",
      },
      {
        term: "JavaScript (in the browser)",
        definition:
          "Makes the page interactive — clicks, popups, loaders — without a full reload. Runs in the visitor's browser, not your server; it can't remember anything between visitors on its own (see Layer 5).",
      },
    ],
  },
  {
    slug: "domains-dns-ports",
    layer: 3,
    title: "Domains, DNS, IPs & Ports",
    tagline: "Getting the world to your file",
    blurb: "You've got the file. How does anyone else on Earth actually reach it?",
    terms: [
      {
        term: "Domain name",
        definition:
          "A human-readable name — adensmowing.com — bought from a registrar.",
      },
      {
        term: "DNS",
        definition:
          "Translates a domain name into the IP address of the computer that will answer.",
      },
      {
        term: "IP address",
        definition: "The address of a specific computer on the internet.",
      },
      {
        term: "Port",
        definition:
          "A numbered lane on that computer for one kind of traffic, so everything doesn't collide.",
        note: "HTTP 80, HTTPS 443, SSH 22 — these three cover almost everything early on.",
      },
      {
        term: "Web server",
        definition:
          "Software listening on that port that returns the right file or response when your domain is requested.",
        note: "Hosts like Vercel run this for you. Knowing the layer helps you name what broke.",
      },
    ],
  },
  {
    slug: "data-and-databases",
    layer: 4,
    title: "Data & Database Design",
    tagline: "Model the data before you model anything else",
    blurb:
      "Visitors leave a mobile number in a queue you can see — that needs a home. Shape the data first; it tells you what to vibe code.",
    terms: [
      {
        term: "Database",
        definition:
          "Like a spreadsheet: rows and columns, each column typed (text, number, date…).",
      },
      {
        term: "Table",
        definition:
          "One entity per table — a tab in that spreadsheet. A mowing business might have businesses and locations.",
      },
      {
        term: "Column / field",
        definition: "A single typed value on a row — name, email, date.",
      },
      {
        term: "Relationship — \"has many\"",
        definition:
          "One-to-many. A business has many locations; those locations belong to that one business.",
      },
      {
        term: "Relationship — \"belongs to\" / one-to-one",
        definition:
          "The other direction — each location belongs to exactly one business.",
      },
      {
        term: "Schema",
        definition:
          "The overall shape — every table, column, and relationship — sketched before application code.",
        note: "Do this first or you get 80 accidental tables. Vibe code the schema, then build on it.",
      },
    ],
  },
  {
    slug: "frontend-vs-backend",
    layer: 5,
    title: "Front End vs Back End — Making It Dynamic",
    tagline: "Static files can't remember anything",
    blurb:
      "A signup queue needs saved state. A static file you hand-edit can't do that — this is where an app stops being “just a file.”",
    terms: [
      {
        term: "Static file",
        definition:
          "Fixed content that only changes when you edit it by hand. Fine for a brochure, not for a growing list of leads.",
      },
      {
        term: "Client-side JavaScript",
        definition:
          "Runs in the visitor's browser. Great for UI; no lasting memory of its own, and can't touch your server's data alone.",
      },
      {
        term: "Back end",
        definition:
          "Server-side logic that can save and query state — it talks to a database, not a static file.",
      },
      {
        term: "Dynamic application",
        definition:
          "Front end and back end wired together: visitors add data, you query it later — nothing frozen at deploy time.",
      },
    ],
  },
  {
    slug: "apis-and-communication",
    layer: 6,
    title: "APIs & System Communication",
    tagline: "How separate systems actually talk",
    blurb:
      "Internal tools come down to two skills: how data is saved (Layer 4), and how systems hand data to each other.",
    terms: [
      {
        term: "API",
        definition:
          "A defined way for two systems to exchange data — request in, response out.",
      },
      {
        term: "Request / payload",
        definition:
          "The data you send, and the shape it's in — JSON, form fields, or a file on a URL. The API decides which it wants.",
      },
      {
        term: "Integration",
        definition:
          "Wiring one system's output into another's input — form → spreadsheet, webhook → queue, app → payments.",
      },
    ],
  },
  {
    slug: "logistics-and-integration",
    layer: 7,
    title: "Logistics & Systems Talking to Systems",
    tagline: "Most \"hard problems\" are just logistics",
    blurb:
      "A transcription site can only work on audio that already exists on the server — upload first. That mildly annoying step is often the whole problem.",
    terms: [
      {
        term: "Logistics problem",
        definition:
          "Most “impossible” bugs are really: this data isn't where the next step needs it yet.",
        note: "Name it as get-data-from-A-to-B and it becomes a series of solvable steps.",
      },
      {
        term: "File system access",
        definition:
          "A server can only process a file once that file exists somewhere it can reach.",
      },
      {
        term: "Upload",
        definition:
          "Moves a file from the user's device onto your server (or a bucket) so the back end can use it.",
      },
      {
        term: "Getting systems to talk to systems",
        definition:
          "A large share of real work is moving data between two things that don't natively understand each other.",
      },
    ],
  },
  {
    slug: "control-flow",
    layer: 8,
    title: "Control Flow & Programming Logic",
    tagline: "The actual Lego blocks",
    blurb:
      "Under every feature: a small set of blocks. Critical thinking here is naming which block you're looking at.",
    terms: [
      {
        term: "Function",
        definition:
          "A named, reusable block that does something — and often returns a result.",
      },
      {
        term: "If / else statement",
        definition: "A branch: do this if true, otherwise do that.",
      },
      {
        term: "Loop (for / while)",
        definition:
          "Repeats an action — for a fixed count or list, or while a condition stays true.",
      },
      {
        term: "Breaking a problem into blocks",
        definition:
          "Look at a feature and ask: function? if? loop? Naming the block tells you what to write.",
      },
    ],
  },
  {
    slug: "build-for-yourself-vs-sell",
    layer: 9,
    title: "Building For Yourself vs Building To Sell",
    tagline: "Beer and spirits — treat them as different drinks",
    blurb:
      "Two different drinks: software that runs your own business, and software you sell to other businesses.",
    terms: [
      {
        term: "Internal application",
        definition:
          "Built for your own business. The data model is easy — it's just your customers, emails, and jobs.",
      },
      {
        term: "Multi-tenant SaaS",
        definition:
          "Sold to other companies; each company's data stays separate inside the same product.",
        note: "Scaling, security, and logistics get harder — spirits to an internal tool's beer.",
      },
      {
        term: "Platform admin",
        definition:
          "Owner/operator of the whole product — sits above every tenant.",
      },
      {
        term: "Tenant (business) admin",
        definition:
          "Admin of one business that signed up to use your product.",
      },
      {
        term: "End users",
        definition:
          "People using the product day to day inside a tenant — often several roles with different permissions.",
        note: "Roles usually share one users table — that's what makes multi-tenant login tricky.",
      },
    ],
  },
  {
    slug: "schema-first-design",
    layer: 10,
    title: "Schema-First Design & Migrations",
    tagline: "Design the Excel sheet before you design anything else",
    blurb:
      "“One project” vs “many projects” looks identical on day one and brutal once real data is in the table. Model early.",
    terms: [
      {
        term: "Migration",
        definition:
          "A change to database structure after real data is already in it — e.g. one-to-one → one-to-many.",
        note: "Easy on an empty table, hard on a live one. Decide the shape before data piles up.",
      },
      {
        term: "\"What does the Excel sheet look like?\"",
        definition:
          "Picture the page you're building: what data is visible? Each distinct thing becomes a table.",
      },
      {
        term: "Semantic grouping",
        definition:
          "Name and group tables by what the data is in the real world — not what's convenient to type today.",
        note: "A listing is a property; rental history and sale history are separate tables because that's how the world is shaped.",
      },
    ],
  },
];

export const totalTermCount = categories.reduce(
  (sum, category) => sum + category.terms.length,
  0
);
