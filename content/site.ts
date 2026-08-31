import type { SiteContent } from "./types";

// Placeholder contact email — organizer should replace before launch.
export const site: SiteContent = {
  conference: {
    shortName: "ICESF-2026",
    fullTitle:
      "International Conference on Engineering a Sustainable Future: Technology, Management, Human Values and Global Perspectives in the ESG Era",
    organizer: "DHA Suffa University",
    affiliationLine: "Technically co-sponsored by IEEE",
    venue: "DHA Suffa University, Karachi",
    city: "Karachi",
    announcement: "Abstract submission deadline: 30 September 2026",
    about: [
      "ICESF-2026 brings researchers, practitioners, and educators to DHA Suffa University to examine how engineering, management, and human values can support a sustainable future in the ESG era.",
      "The programme invites original work across technology, sustainable enterprise, ethics and society, and global ESG practice. Sessions are in person on the DHA Suffa University campus in Karachi.",
      "The conference is organized by DHA Suffa University and technically co-sponsored by IEEE.",
    ],
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
  people: [],
  speakers: [],
  registrationFees: [
    { id: "ieee-member", category: "IEEE member", amount: "To be announced" },
    { id: "non-member", category: "Non-member", amount: "To be announced" },
    { id: "student", category: "Student", amount: "To be announced" },
  ],
  contact: {
    email: "icesf@dsu.edu.pk",
    phone: "",
    addressLines: [
      "DHA Suffa University",
      "Dg-78, Off Khayaban-e-Tufail, Phase VII (Ext.)",
      "DHA, Karachi, Pakistan",
    ],
  },
  links: {
    easychair: null,
    registration: null,
    template: null,
  },
  seo: {
    titleTemplate: "%s | ICESF-2026",
    defaultTitle:
      "ICESF-2026 | International Conference on Engineering a Sustainable Future",
    description:
      "ICESF-2026, 9–10 December 2026 at DHA Suffa University, Karachi. International Conference on Engineering a Sustainable Future: Technology, Management, Human Values and Global Perspectives in the ESG Era. Technically co-sponsored by IEEE.",
    ogImage: null,
  },
};
