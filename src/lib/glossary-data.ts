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
      "Before you snap Lego together, you need to know what a brick actually is. This layer is the raw materials: what a computer is doing when it \"runs\" your code, and why the operating system underneath it changes your day-to-day experience.",
    terms: [
      {
        term: "Computer",
        definition:
          "A machine that follows instructions, step by step, extremely fast. Everything else in this glossary is just increasingly organised ways of giving it instructions.",
      },
      {
        term: "Code",
        definition:
          "The instructions themselves, written in a language a computer (eventually) understands.",
      },
      {
        term: "Operating system (OS)",
        definition:
          "The base software layer — Windows, macOS, or Linux — that manages the hardware and decides how programs get to run.",
        note: "The people who build most AI coding tools use Mac or Linux day to day, so that's where the tooling is best supported by default. That doesn't lock out Windows — it just means Windows has one extra step.",
      },
      {
        term: "WSL (Windows Subsystem for Linux)",
        definition:
          "A real Linux environment that runs inside Windows, side by side with your normal desktop.",
        note: "If you're on Windows, run your vibe-coding tools inside WSL. It puts you on the same footing as the Mac/Linux setup the tooling was actually built for.",
      },
    ],
  },
  {
    slug: "web-and-browsers",
    layer: 2,
    title: "The Web, Browsers & the Front End",
    tagline: "Aden's Mowing, page one",
    blurb:
      "Say you're starting a mowing business and you build yourself a single web page. On the internet that's one link, going nowhere else. On your file system, that's one file. Here's what's actually inside it.",
    terms: [
      {
        term: "Webpage",
        definition:
          "A document your browser can request and display. A \"single page\" site is one link, and on disk, one file.",
      },
      {
        term: "Browser",
        definition:
          "A native app on your desktop — Chrome, Firefox, Edge — whose whole job is requesting and rendering web pages. Under the hood it's exchanging HTML with a server.",
      },
      {
        term: "HTML",
        definition:
          "Outlines what the content actually is — the headings, text, images, and structure of the page.",
      },
      {
        term: "CSS",
        definition:
          "The styling layer, packaged alongside HTML. Turns plain content into something that looks like your brand.",
      },
      {
        term: "JavaScript (in the browser)",
        definition:
          "Makes the page interactive — clicks, popups, loaders, anything that responds without reloading.",
        note: "This runs on the visitor's browser, not your server. It can make a page feel alive, but it can't by itself remember anything between visitors — that's the back end's job (see Layer 5).",
      },
    ],
  },
  {
    slug: "domains-dns-ports",
    layer: 3,
    title: "Domains, DNS, IPs & Ports",
    tagline: "Getting the world to your file",
    blurb:
      "You've got a file that says \"Aden's Mowing\" on it. Now — how does anyone else on Earth actually get to it?",
    terms: [
      {
        term: "Domain name",
        definition:
          "A human-readable name — say, adensmowing.com — that you buy from a registrar (GoDaddy and similar).",
      },
      {
        term: "DNS",
        definition:
          "The system that translates a domain name into the IP address of the computer that's actually going to answer.",
      },
      {
        term: "IP address",
        definition: "The address of a specific computer on the internet.",
      },
      {
        term: "Port",
        definition:
          "A numbered lane on that computer, dedicated to one kind of traffic, so everything doesn't collide on the same channel.",
        note: "Web traffic (HTTP) sits on port 80, secure web traffic (HTTPS) on port 443, and remote terminal access (SSH) on port 22. There are thousands of ports — these three cover almost everything you'll touch early on.",
      },
      {
        term: "Web server",
        definition:
          "Software listening on that open port, whose job is to hand back the right file (or response) when a request for your domain arrives.",
        note: "Hosts like Vercel or Digital Ocean run this layer for you. Knowing what's happening underneath just means you use the right words when you're vibe coding, and can tell when something's actually broken at this layer versus somewhere else.",
      },
    ],
  },
  {
    slug: "data-and-databases",
    layer: 4,
    title: "Data & Database Design",
    tagline: "Model the data before you model anything else",
    blurb:
      "Now you want visitors to leave their mobile number in a queue you can see. That needs somewhere to live. Design how the data is shaped first — it tells you what language and keywords you actually need once you start vibe coding.",
    terms: [
      {
        term: "Database",
        definition:
          "Think of it like a spreadsheet: rows and columns, where every column has a type (text, number, date, and so on).",
      },
      {
        term: "Table",
        definition:
          "One data type/entity gets one table — like a tab in that spreadsheet. A mowing business might have a businesses table and a locations table.",
      },
      {
        term: "Column / field",
        definition: "A single typed value on a row — a name, an email, a date.",
      },
      {
        term: "Relationship — \"has many\"",
        definition:
          "One-to-many. A business has many locations; those locations belong to that one business.",
      },
      {
        term: "Relationship — \"belongs to\" / one-to-one",
        definition:
          "The other direction of the same link — each location belongs to exactly one business.",
      },
      {
        term: "Schema",
        definition:
          "The overall shape of your data — every table, every column, every relationship — sketched out before you write application code.",
        note: "Do this first and you don't end up with 80 accidental tables. Vibe code the schema, then vibe code on top of it.",
      },
    ],
  },
  {
    slug: "frontend-vs-backend",
    layer: 5,
    title: "Front End vs Back End — Making It Dynamic",
    tagline: "Static files can't remember anything",
    blurb:
      "A signup queue means the page has to save state and query it later. A static file you hand-edit every time can't do that — this is where an app stops being \"just a file.\"",
    terms: [
      {
        term: "Static file",
        definition:
          "Fixed content that only changes when you go in and manually edit it. Fine for a brochure page, not fine for a growing list of leads.",
      },
      {
        term: "Client-side JavaScript",
        definition:
          "Runs in the visitor's browser. Great for interactivity — a loader, a popup — but it has no memory of its own and can't touch your server's data on its own.",
      },
      {
        term: "Back end",
        definition:
          "Server-side logic that can actually save and query state — meaning it talks to a database instead of a static file.",
      },
      {
        term: "Dynamic application",
        definition:
          "What you get once the front end and back end are wired together: visitors can add data (a mobile number) and you can view or query it later, instead of everything being frozen at deploy time.",
      },
    ],
  },
  {
    slug: "apis-and-communication",
    layer: 6,
    title: "APIs & System Communication",
    tagline: "How separate systems actually talk",
    blurb:
      "Building internal business tools really comes down to two skills: knowing how your data is saved (Layer 4), and knowing how different systems hand data to each other.",
    terms: [
      {
        term: "API",
        definition:
          "A defined way for two systems to exchange data — one side sends a request, the other sends back a response.",
      },
      {
        term: "Request / payload",
        definition:
          "The actual data you send to an API, and the shape it's sent in — often JSON, sometimes form fields, sometimes a file attached to a URL.",
        note: "\"How do I attach something to a URL\" and \"is this going as a text file or as fields\" are exactly the kind of nuance that trips people up — there's more than one right way, and the API you're talking to decides which one it wants.",
      },
      {
        term: "Integration",
        definition:
          "Wiring one system's output into another's input — a form into a spreadsheet, a webhook into a queue, your app into a payment processor.",
      },
    ],
  },
  {
    slug: "logistics-and-integration",
    layer: 7,
    title: "Logistics & Systems Talking to Systems",
    tagline: "Most \"hard problems\" are just logistics",
    blurb:
      "Take a transcription website. To do any work on an audio file, that file has to exist on the server's file system — which means it has to be uploaded there first. That single, mildly annoying requirement is the whole problem, wearing a disguise.",
    terms: [
      {
        term: "Logistics problem",
        definition:
          "Most \"impossible\" technical problems are really just: this piece of data isn't where the next step needs it to be yet.",
        note: "Once you name it as a logistics problem — get the file/data from A to B — it stops feeling mysterious and starts feeling like a series of solvable steps.",
      },
      {
        term: "File system access",
        definition:
          "A server can only work on a file — audio, an image, a document — once that file actually exists on disk somewhere it can reach.",
      },
      {
        term: "Upload",
        definition:
          "The step that moves a file from a user's device onto your server (or a storage bucket) so your back end can finally operate on it.",
      },
      {
        term: "Getting systems to talk to systems",
        definition:
          "A large share of real engineering work is just this: solved problem after solved problem of moving data between two things that don't natively understand each other.",
      },
    ],
  },
  {
    slug: "control-flow",
    layer: 8,
    title: "Control Flow & Programming Logic",
    tagline: "The actual Lego blocks",
    blurb:
      "Underneath every feature is a small set of building blocks. Critical thinking, here, is just breaking a problem down and asking which block you're actually looking at.",
    terms: [
      {
        term: "Function",
        definition:
          "A named, reusable block that does something — and often hands back a result when it's done.",
      },
      {
        term: "If / else statement",
        definition:
          "A branch: do this if a condition is true, otherwise do that.",
      },
      {
        term: "Loop (for / while)",
        definition:
          "Repeats an action. A for loop typically runs a fixed number of times or over a list; a while loop keeps going until some condition stops being true.",
      },
      {
        term: "Breaking a problem into blocks",
        definition:
          "The core skill: looking at a feature and asking — is this a function call? An if statement? A loop? Naming the block tells you what to actually write.",
      },
    ],
  },
  {
    slug: "build-for-yourself-vs-sell",
    layer: 9,
    title: "Building For Yourself vs Building To Sell",
    tagline: "Beer and spirits — treat them as different drinks",
    blurb:
      "There are two very different kinds of software, and they get built completely differently: software that solves your own business's problem, and software you sell to other businesses as a product.",
    terms: [
      {
        term: "Internal application",
        definition:
          "Software built to run your own business. The data model is easy because it's just your business — your customers, your customer emails, your jobs.",
      },
      {
        term: "Multi-tenant SaaS",
        definition:
          "Software sold to other companies, where each company's data has to stay separate inside the same product.",
        note: "Scaling, security, and logistics all get noticeably harder here — this is the \"spirits\" to an internal tool's \"beer.\"",
      },
      {
        term: "Platform admin",
        definition:
          "The owner/operator of the whole product — sits above every tenant business using it.",
      },
      {
        term: "Tenant (business) admin",
        definition:
          "The admin of one specific business that has signed up to use your product.",
      },
      {
        term: "End users",
        definition:
          "The individual people using the product day to day inside a tenant — there may be several different user types, each with different permissions.",
        note: "All of these roles usually still authenticate through one shared users table, which is exactly what makes multi-tenant login logic genuinely tricky to get right.",
      },
    ],
  },
  {
    slug: "schema-first-design",
    layer: 10,
    title: "Schema-First Design & Migrations",
    tagline: "Design the Excel sheet before you design anything else",
    blurb:
      "A user having \"one project\" and a user having \"many projects\" look almost identical on day one — and brutally different once real data is sitting in that table. Model the data early, because reshaping it later, at scale, is genuinely painful.",
    terms: [
      {
        term: "Migration",
        definition:
          "A change to a database's structure after it already has real data in it — for example, turning a one-to-one relationship into a one-to-many.",
        note: "This is easy on an empty table and hard on a live one. The fix is deciding the shape correctly before data piles up, not after.",
      },
      {
        term: "\"What does the Excel sheet look like?\"",
        definition:
          "A practical design trick: picture the actual website you're building and ask what data is visible on the page. Each distinct thing you see becomes a table.",
      },
      {
        term: "Semantic grouping",
        definition:
          "Naming and grouping tables by what the data represents in the real world — not just by what's convenient to type today.",
        note: "Real-estate-site example: a listing you see is a property. Its rental history is one table, its sale history is another — because that's genuinely how the real-world data is shaped, not because it's arbitrary.",
      },
    ],
  },
];

export const totalTermCount = categories.reduce(
  (sum, category) => sum + category.terms.length,
  0
);
