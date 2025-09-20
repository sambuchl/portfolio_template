// content.js keeps the editable copy for the single-page portfolio.
// Update the text, links, and lists below and the app will refresh automatically.

window.SITE_CONTENT = {
  meta: {
    // #UPDATE: Set the browser title for your site
    title: 'Your Name — Portfolio & Essays',
    // #UPDATE: Customize the site-wide meta description
    description: 'A clean, mobile-first template for sharing your work and long-form writing.',
  },
  navigation: {
    brand: {
      // #UPDATE: Change the logo text in the top-left corner
      label: 'Your Name',
      // #UPDATE: Adjust where the brand link points
      href: '#about',
    },
    // #UPDATE: Rename, remove, or reorder navigation links
    items: [
      { label: 'About', target: '#about' },
      { label: 'Work', target: '#work' },
      { label: 'Writing', target: '#writing' },
      { label: 'Contact', target: '#contact' },
    ],
  },
  hero: {
    // #UPDATE: Introduce your core roles or focus areas
    kicker: 'Product builder • Investor • Writer',
    // #UPDATE: The main heading in the hero section
    heading: 'Hi, I’m Your Name.',
    // #UPDATE: Add one or more summary paragraphs that describe your mission
    summary: [
      'I build thoughtful software products and occasionally invest in people who want to do the same. This minimalist, mobile-friendly layout keeps the focus on your story and longer-form thinking.',
    ],
    primaryAction: {
      // #UPDATE: Primary call-to-action button label
      label: 'Let’s work together',
      // #UPDATE: Primary call-to-action URL (mailto, calendar, etc.)
      href: 'mailto:hello@example.com',
    },
    secondaryAction: {
      // #UPDATE: Secondary link label
      label: 'Read my latest essays →',
      // #UPDATE: Secondary link target
      href: '#writing',
    },
  },
  highlights: {
    // #UPDATE: Title for the work/highlights section
    heading: 'Selected work',
    // #UPDATE: Supporting copy beneath the work heading
    subheading: 'Highlight a few projects or investments that show how you think.',
    // #UPDATE: Optional call-to-action for the work section (remove to hide)
    cta: null,
    // #UPDATE: Showcase projects, roles, or achievements
    items: [
      {
        year: '2024',
        title: 'Studio One',
        description:
          'A lightweight productivity suite for tiny teams. Designed the end-to-end experience and shipped the first release in five months.',
        link: { label: 'View case study', href: '#' },
      },
      {
        year: '2023',
        title: 'Northbound Capital',
        description:
          'A thesis-driven angel fund backing AI tooling for small businesses. Helped the founders close their seed round and align go-to-market.',
        link: { label: 'Investment memo', href: '#' },
      },
      {
        year: '2022',
        title: 'Weeknote',
        description:
          'A weekly newsletter and podcast exploring the craft of leading product teams. Grew to 15k subscribers with a 52% open rate.',
        link: { label: 'Listen in', href: '#' },
      },
    ],
  },
  writing: {
    // #UPDATE: Heading for the writing/notes section
    heading: 'Recent writing',
    // #UPDATE: Short description beneath the heading
    subheading: 'Bring readers into your process with thoughtful essays and notes.',
    // #UPDATE: Text for the back button shown on the article view
    backLabel: 'Back to writing',
    // #UPDATE: Optional archive link (set to null to hide)
    archive: {
      label: 'Browse the full archive →',
      href: '#writing',
    },
    // #UPDATE: List of posts. Add more entries or edit/remove existing ones.
    posts: [
      {
        slug: 'deliberate-speed',
        title: 'Building with deliberate speed',
        date: 'June 12, 2024',
        readingTime: '7 min read',
        summary: 'A reflection on keeping the bar high while shipping faster than the competition.',
        body: [
          'Momentum is a competitive advantage. Teams that can deliver quickly while holding a high bar for quality compound tiny wins into something formidable.',
          'For me, deliberate speed means spending less time arguing over hypotheticals and more time instrumenting reality. It is the discipline of running tight experiments, trimming scope without dulling ambition, and relentlessly editing anything that slows the loop between idea and customer.',
          'Most organizations get stuck because they mistake consensus for clarity. The fix is simple but rarely easy: pick the smallest bet that will teach you the most, assign clear ownership, and set an honest deadline. Then move.',
        ],
        links: null,
      },
      {
        slug: 'investing-lens',
        title: 'What I look for when investing',
        date: 'May 3, 2024',
        readingTime: '5 min read',
        summary: 'The founder traits and market signals that consistently predict outlier outcomes.',
        body: [
          'Great founders wear reality like a second skin. They chase uncomfortable truths, collect unloved problems, and translate both into momentum with almost unfair energy.',
          'When I evaluate an opportunity I look for teams who have lived the problem, can explain their wedge in plain language, and demonstrate an obsession with customers over competitors.',
          'Markets change. Taste compounds. The founders I back are the ones who can spot a shift early and sprint toward it with curiosity instead of fear.',
        ],
        links: [
          { label: 'Pitch template I share with founders', href: '#' },
        ],
      },
      {
        slug: 'writing-rhythm',
        title: 'Keeping a writing rhythm',
        date: 'March 18, 2024',
        readingTime: '4 min read',
        summary: 'Systems and prompts that make publishing every week feel sustainable.',
        body: [
          'Publishing on a schedule is less about inspiration and more about building an environment that constantly hands you raw material.',
          'I keep a running list of questions from conversations, backchannel notes, and product reviews. When it is time to write, I pick one question and answer it in plain language. Editing comes later.',
          'If you want a writing habit that sticks, make it social. Share drafts early, ask for specific feedback, and celebrate the people who keep you honest.',
        ],
        links: null,
      },
    ],
  },
  contact: {
    // #UPDATE: Headline for the contact section
    heading: 'Let’s build something great',
    // #UPDATE: Supporting copy inviting visitors to reach out
    description: 'Have a project, role, or investment you want to discuss? Drop a note and I’ll reply within a day.',
    primaryAction: {
      // #UPDATE: Primary contact button
      label: 'Email hello@example.com',
      href: 'mailto:hello@example.com',
    },
    // #UPDATE: Add or edit social/contact links (set to [] to hide)
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'X (Twitter)', href: '#' },
      { label: 'RSS', href: '#' },
    ],
  },
  footer: {
    // #UPDATE: Footer note or copyright line
    note: '© 2024 Your Name. Built with a lightweight single-page template.',
  },
};
