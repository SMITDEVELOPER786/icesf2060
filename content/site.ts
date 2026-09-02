import type { SiteContent } from "./types";

// DSU host names follow the public university directory for a Suffa-campus layout.
// Confirm titles and conference roles with the organizer before launch.
export const site: SiteContent = {
  conference: {
    shortName: "ISRC-STM 2026",
    fullTitle:
      "International Student Research Conference on Sustainable Technology & Management",
    subtitle: "Technology, Management, Human Values & ESG Perspectives",
    organizer: "DHA Suffa University",
    affiliationLine: "",
    venue: "DHA Suffa University Main Campus, DHA Phase VII (Ext.), Karachi",
    city: "Karachi",
    motto: "Learn to discover",
    announcement: "Abstract submission deadline: 30 September 2026",
    about: [
      "DHA Suffa University (DSU), Karachi, is committed to promoting academic excellence, research, innovation, and interdisciplinary learning. Through its teaching and research initiatives, the University provides a platform for students, researchers, academicians, and professionals to engage with emerging challenges and contribute innovative solutions for society and industry.",
      "With expertise spanning Computing and Information Technology, Management Sciences, Mechanical and Electrical Engineering, and Humanities and Social Sciences, DSU encourages collaboration across disciplines. This multidisciplinary environment enables research that combines technological advancement with effective management, ethical responsibility, human values, and sustainable development.",
      "Building on the success of its previous editions, DSU is organizing the 3rd International Student Research Conference on Sustainable Technology & Management (ISRC-STM 2026) on 9–10 December 2026. The conference provides a platform for students, researchers, academics, and industry professionals to present their research, exchange ideas, and explore innovative approaches toward sustainable development.",
      "Under the theme “Technology, Management, Human Values & ESG Perspectives,” ISRC-STM 2026 emphasizes the integration of engineering, digital technologies, business and management practices, and social and ethical perspectives. The conference aims to encourage interdisciplinary research and meaningful dialogue on how technology and responsible management can contribute to a more sustainable, resilient, inclusive, and socially responsible future.",
    ],
    aims: {
      intro:
        "The International Student Research Conference on Sustainable Technology & Management (ISRC-STM 2026) aims to provide an interdisciplinary platform for students, researchers, academicians, and industry professionals to present innovative research, exchange ideas, and explore practical solutions for a sustainable future.",
      leadIn: "The conference seeks to:",
      objectives: [
        "Promote student-led research, innovation, and scholarly collaboration across multiple disciplines.",
        "Encourage interdisciplinary research linking technology, engineering, management, human values, and ESG principles.",
        "Provide opportunities for young researchers to present their work, receive constructive feedback, and build academic and professional networks.",
        "Explore the role of AI, data analytics, IoT, digital transformation, renewable energy, sustainable engineering, and emerging technologies in addressing environmental and societal challenges.",
        "Advance research in sustainable business models, governance, finance, supply chains, and organizational resilience.",
        "Encourage discussion on ethics, social responsibility, inclusion, policy, human well-being, and responsible innovation.",
        "Strengthen collaboration among universities, industry, policymakers, and research communities.",
        "Highlight research that contributes to the United Nations Sustainable Development Goals (SDGs) and responsible ESG practices.",
        "Provide a platform for translating academic research into practical, scalable, and socially relevant solutions.",
        "Inspire the next generation of researchers to contribute toward a sustainable, resilient, inclusive, and technology-enabled future.",
      ],
    },
    themeIntro:
      "Engineering a sustainable future is reshaping technology, enterprise, and public life, creating both opportunities and responsibilities in the ESG era. ISRC-STM 2026 brings researchers and practitioners together to examine technology, management, human values, and global perspectives, and to share work that advances that agenda.",
    guidelines: [
      "Submissions must be original and not under review elsewhere.",
      "Full papers should follow the IEEE conference paper format when a template link is provided.",
      "At least one author of each accepted paper is expected to register and present.",
    ],
  },
  importantDates: [
    { id: "abstract", label: "Abstract Submission", date: "30 September 2026" },
    { id: "notification", label: "Notification of Acceptance", date: "10 October 2026" },
    { id: "full-paper", label: "Full Paper Submission", date: "30 October 2026" },
    { id: "conference", label: "Conference", date: "9–10 December 2026" },
  ],
  programme: [
    {
      id: "open",
      day: "Day 1",
      time: "09:00 AM – 11:00 AM",
      title: "Opening, Main Campus",
    },
    {
      id: "tech-1",
      day: "Day 1",
      time: "11:00 AM – 05:00 PM",
      title: "Engineering & Computing Sessions",
    },
    {
      id: "tech-2",
      day: "Day 2",
      time: "09:00 AM – 04:00 PM",
      title: "Management, Humanities & Panels",
    },
    {
      id: "close",
      day: "Day 2",
      time: "04:00 PM – 05:00 PM",
      title: "Closing at DHA Suffa University",
    },
  ],
  faculties: [
    {
      id: "eas",
      title: "Faculty of Engineering & Applied Sciences",
      blurb:
        "Mechanical, Electrical, and Civil Engineering at the DSU Main Campus and DCK Campus.",
    },
    {
      id: "cit",
      title: "Faculty of Computing and Information Technology",
      blurb:
        "Computer Science, Software Engineering, Information Technology, Artificial Intelligence, and Data Science.",
    },
    {
      id: "ms",
      title: "Faculty of Management Sciences",
      blurb:
        "Business Administration, Accounting & Finance, and Business Analytics & Programming.",
    },
    {
      id: "hss",
      title: "Faculty of Humanities and Social Sciences",
      blurb:
        "English, Psychology, and International Relations — human values at the centre of the ESG agenda.",
    },
  ],
  tracks: [
    {
      id: "technology",
      title: "Technology and Engineering for a Sustainable Future",
      blurb:
        "Engineering methods, systems, and tools that reduce environmental impact and support resilient infrastructure.",
    },
    {
      id: "management",
      title: "Management and Sustainable Enterprise",
      blurb:
        "Strategy, operations, and governance for organisations working under ESG expectations.",
    },
    {
      id: "values",
      title: "Human Values, Ethics, and Society",
      blurb:
        "The social and ethical dimensions of technology, including equity, responsibility, and human development.",
    },
    {
      id: "esg",
      title: "Global Perspectives and ESG Practice",
      blurb:
        "Comparative and practice-oriented work on ESG reporting, policy, and cross-border collaboration.",
    },
  ],
  themes: [
    {
      id: "sustainable-engineering",
      title: "Sustainable Engineering",
      blurb:
        "Engineering solutions for sustainable infrastructure, materials, manufacturing, transportation, and environmentally responsible development.",
    },
    {
      id: "ai-smart-systems",
      title: "AI & Smart Systems",
      blurb:
        "AI, machine learning, IoT, digital twins, and intelligent systems supporting sustainable environments and communities.",
    },
    {
      id: "data-digital",
      title: "Data & Digital Transformation",
      blurb:
        "Data analytics, digital platforms, and emerging technologies enabling informed and sustainable decision-making.",
    },
    {
      id: "energy-green",
      title: "Energy & Green Infrastructure",
      blurb:
        "Renewable energy, smart grids, energy efficiency, EV infrastructure, and sustainable built environments.",
    },
    {
      id: "sustainable-business",
      title: "Sustainable Business & ESG",
      blurb:
        "Business models, ESG strategy, sustainable finance, corporate reporting, and responsible organizational practices.",
    },
    {
      id: "human-values",
      title: "Human Values & Ethics",
      blurb:
        "Ethics, social responsibility, inclusion, well-being, responsible AI, and the human dimensions of sustainability.",
    },
    {
      id: "supply-chains",
      title: "Sustainable Supply Chains",
      blurb:
        "Green operations, circular economy, sustainable logistics, resource efficiency, and resilient supply-chain management.",
    },
    {
      id: "governance-policy",
      title: "Governance & Policy",
      blurb:
        "Corporate governance, sustainability policy, stakeholder engagement, regulatory frameworks, and institutional responsibility.",
    },
    {
      id: "society-sdg",
      title: "Society & Sustainable Development",
      blurb:
        "Behavior change, responsible consumption, social equity, education, workforce transformation, and community sustainability.",
    },
  ],
  // Placeholder mock entries for layout only — replace with confirmed organizers before launch.
  people: [
    {
      id: "patron-1",
      name: "Prof. A. Patron",
      role: "Conference Patron",
      section: "patron",
      affiliation: "Host University",
      photoSrc: null,
    },
    {
      id: "chair-1",
      name: "Dr. B. Chair",
      role: "Conference Chair",
      section: "chair",
      affiliation: "Faculty of Engineering",
      photoSrc: null,
    },
    {
      id: "cochair-1",
      name: "Dr. C. Co-Chair",
      role: "Conference Co-Chair",
      section: "co-chair",
      affiliation: "Faculty of Computing",
      photoSrc: null,
    },
    {
      id: "cochair-2",
      name: "Dr. D. Co-Chair",
      role: "Conference Co-Chair",
      section: "co-chair",
      affiliation: "Faculty of Management",
      photoSrc: null,
    },
    {
      id: "sec-1",
      name: "Dr. E. Secretary",
      role: "Conference Secretary",
      section: "secretary",
      affiliation: "Host University",
      photoSrc: null,
    },
    {
      id: "sec-2",
      name: "Engr. F. Secretary",
      role: "Conference Secretary",
      section: "secretary",
      affiliation: "Host University",
      photoSrc: null,
    },
    {
      id: "prog-1",
      name: "Dr. G. Program",
      role: "Program Chair",
      section: "program",
      affiliation: "Program Committee",
      photoSrc: null,
    },
    {
      id: "prog-2",
      name: "Dr. H. Program",
      role: "Program Co-Chair",
      section: "program",
      affiliation: "Program Committee",
      photoSrc: null,
    },
    {
      id: "rev-1",
      name: "Dr. I. Review",
      role: "Review Chair",
      section: "review",
      affiliation: "Review Committee",
      photoSrc: null,
    },
    {
      id: "org-1",
      name: "Organizing Desk",
      role: "Local Arrangements",
      section: "organizing",
      affiliation: "Host University",
      photoSrc: null,
    },
  ],
  speakers: [
    {
      id: "sp-1",
      name: "Keynote Speaker One",
      affiliation: "Partner University",
      talkTitle: "Keynote talk title (to be confirmed)",
      bio: "Short bio placeholder for the opening keynote.",
      photoSrc: null,
    },
    {
      id: "sp-2",
      name: "Keynote Speaker Two",
      affiliation: "Industry Partner",
      talkTitle: "Keynote talk title (to be confirmed)",
      bio: "Short bio placeholder for a technology keynote.",
      photoSrc: null,
    },
    {
      id: "sp-3",
      name: "Keynote Speaker Three",
      affiliation: "Research Institute",
      talkTitle: "Keynote talk title (to be confirmed)",
      bio: "Short bio placeholder for a management and ESG keynote.",
      photoSrc: null,
    },
    {
      id: "sp-4",
      name: "Keynote Speaker Four",
      affiliation: "Host University",
      talkTitle: "Keynote talk title (to be confirmed)",
      bio: "Short bio placeholder for a human values keynote.",
      photoSrc: null,
    },
  ],
  registrationFees: [
    { id: "ieee-member", category: "IEEE member", amount: "USD 180" },
    { id: "non-member", category: "Non-member", amount: "USD 230" },
    { id: "student-ieee", category: "Student (IEEE member)", amount: "USD 90" },
    { id: "student", category: "Student (non-member)", amount: "USD 120" },
  ],
  contact: {
    email: "icesf@dsu.edu.pk",
    phone: "+92 21 3524 4851",
    addressLines: [
      "DHA Suffa University — Main Campus",
      "DG-78, Off Khayaban-e-Tufail, Phase VII (Ext.)",
      "DHA, Karachi 75500, Pakistan",
    ],
  },
  links: {
    easychair: null,
    registration: null,
    template: "https://www.ieee.org/conferences/publishing/templates.html",
  },
  seo: {
    titleTemplate: "%s | ISRC-STM 2026",
    defaultTitle:
      "ISRC-STM 2026 | International Student Research Conference on Sustainable Technology & Management",
    description:
      "ISRC-STM 2026, 9–10 December 2026 at DHA Suffa University, Karachi. International Student Research Conference on Sustainable Technology & Management — Technology, Management, Human Values & ESG Perspectives.",
    ogImage: null,
  },
};
