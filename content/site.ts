import type { SiteContent } from "./types";

// DSU host names follow the public university directory for a Suffa-campus layout.
// Confirm titles and conference roles with the organizer before launch.
export const site: SiteContent = {
  conference: {
    shortName: "ICESF-2026",
    fullTitle:
      "International Conference on Engineering a Sustainable Future: Technology, Management, Human Values and Global Perspectives in the ESG Era",
    organizer: "DHA Suffa University",
    affiliationLine: "Technically co-sponsored by IEEE",
    venue: "DHA Suffa University Main Campus, DHA Phase VII (Ext.), Karachi",
    city: "Karachi",
    motto: "Learn to discover",
    announcement: "Abstract submission deadline: 30 September 2026",
    about: [
      "ICESF-2026 is hosted at the Main Campus of DHA Suffa University in DHA Phase VII (Ext.), Karachi — a not-for-profit university named after the Suffah of Masjid-e-Nabwi, with the motto Learn to discover.",
      "The conference draws on DSU’s four faculties: Engineering and Applied Sciences; Computing and Information Technology; Management Sciences; and Humanities and Social Sciences. Sessions are in person on campus.",
      "DHA Suffa University organizes ICESF-2026. The conference is technically co-sponsored by IEEE.",
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
  people: [
    {
      id: "patron-1",
      name: "Prof. Dr. Ahmed Saeed Minhas",
      role: "Vice Chancellor / Conference Patron",
      section: "patron",
      affiliation: "DHA Suffa University",
      photoSrc: "/media/people/vc.png",
    },
    {
      id: "chair-1",
      name: "Prof. Dr. Ahmad Hussain",
      role: "Conference Chair",
      section: "chair",
      affiliation: "Dean, Faculty of Engineering & Applied Sciences, DHA Suffa University",
      photoSrc: "/media/people/ahmad-hussain.jpeg",
    },
    {
      id: "cochair-1",
      name: "Dr. Huma Jamshed",
      role: "Conference Co-Chair",
      section: "co-chair",
      affiliation: "HoD, Department of Computer Science, DHA Suffa University",
      photoSrc: "/media/people/huma-jamshed.png",
    },
    {
      id: "cochair-2",
      name: "Dr. Azam Anwar Khan",
      role: "Conference Co-Chair",
      section: "co-chair",
      affiliation: "HoD, Department of Management Sciences, DHA Suffa University",
      photoSrc: "/media/people/azam-anwar.png",
    },
    {
      id: "sec-1",
      name: "Dr. Samreen Bari",
      role: "Conference Secretary",
      section: "secretary",
      affiliation: "HoD, Department of Humanities and Social Sciences, DHA Suffa University",
      photoSrc: "/media/people/samreen-bari.png",
    },
    {
      id: "sec-2",
      name: "Engr. Dr. Dur Muhammad Soomro",
      role: "Conference Secretary",
      section: "secretary",
      affiliation: "HoD, Department of Electrical Engineering, DHA Suffa University",
      photoSrc: "/media/people/soomro.png",
    },
    {
      id: "prog-1",
      name: "Engr. Dr. Shaheryar Atta Khan",
      role: "Program Chair",
      section: "program",
      affiliation: "Department of Mechanical Engineering, DHA Suffa University",
      photoSrc: "/media/people/shaheryar.png",
    },
    {
      id: "prog-2",
      name: "Dr. Najeeb Ur Rehman Malik",
      role: "Program Co-Chair",
      section: "program",
      affiliation: "Department of Information Technology, DHA Suffa University",
      photoSrc: "/media/people/najeeb.jpg",
    },
    {
      id: "prog-3",
      name: "Dr. Raazia Sosan",
      role: "Program Committee",
      section: "program",
      affiliation: "HoD, Department of Software Engineering, DHA Suffa University",
      photoSrc: "/media/people/raazia.jpg",
    },
    {
      id: "rev-1",
      name: "Dr. Ayman Taj",
      role: "Review Chair",
      section: "review",
      affiliation: "Director Marketing, PR & External Affairs, DHA Suffa University",
      photoSrc: "/media/people/ayman-taj.png",
    },
    {
      id: "rev-2",
      name: "Department of Civil Engineering",
      role: "Review Committee",
      section: "review",
      affiliation: "DHA Suffa University, DCK Campus",
    },
    {
      id: "rev-3",
      name: "Center for Entrepreneurship & Innovation",
      role: "Review Committee",
      section: "review",
      affiliation: "CEID, DHA Suffa University",
    },
    {
      id: "org-1",
      name: "Professional Development Center",
      role: "Organizing Chair",
      section: "organizing",
      affiliation: "DHA Suffa University",
    },
    {
      id: "org-2",
      name: "Career Services & Corporate Relations",
      role: "Local Arrangements",
      section: "organizing",
      affiliation: "DHA Suffa University",
    },
    {
      id: "org-3",
      name: "Enrollment & Registration Office",
      role: "Registration Desk",
      section: "organizing",
      affiliation: "DHA Suffa University Main Campus",
    },
  ],
  speakers: [
    {
      id: "sp-1",
      name: "Prof. Dr. Ahmed Saeed Minhas",
      affiliation: "Vice Chancellor, DHA Suffa University",
      talkTitle: "Learn to Discover: Suffa, Engineering, and a Sustainable Future",
      bio: "Vice Chancellor of DHA Suffa University. Opens ICESF-2026 at the Main Campus in DHA Karachi.",
      photoSrc: "/media/people/vc.png",
    },
    {
      id: "sp-2",
      name: "Prof. Dr. Ahmad Hussain",
      affiliation: "Dean, Faculty of Engineering & Applied Sciences, DHA Suffa University",
      talkTitle: "Engineering and Applied Sciences for the ESG Era",
      bio: "Leads DSU’s Faculty of Engineering and Applied Sciences, spanning Mechanical, Electrical, and Civil Engineering.",
      photoSrc: "/media/people/ahmad-hussain.jpeg",
    },
    {
      id: "sp-3",
      name: "Dr. Huma Jamshed",
      affiliation: "HoD, Department of Computer Science, DHA Suffa University",
      talkTitle: "Computing for Climate, Cities, and Responsible AI",
      bio: "Represents DSU Computing and Information Technology, including Computer Science and allied programmes.",
      photoSrc: "/media/people/huma-jamshed.png",
    },
    {
      id: "sp-4",
      name: "Dr. Azam Anwar Khan",
      affiliation: "HoD, Department of Management Sciences, DHA Suffa University",
      talkTitle: "Sustainable Enterprise and ESG Practice in Pakistan",
      bio: "Works with DSU Management Sciences on business, finance, and analytics under ESG expectations.",
      photoSrc: "/media/people/azam-anwar.png",
    },
    {
      id: "sp-5",
      name: "Dr. Samreen Bari",
      affiliation: "HoD, Department of Humanities and Social Sciences, DHA Suffa University",
      talkTitle: "Human Values, Ethics, and Society",
      bio: "Brings DSU Humanities and Social Sciences — English, Psychology, and International Relations — into the conference programme.",
      photoSrc: "/media/people/samreen-bari.png",
    },
    {
      id: "sp-6",
      name: "Engr. Dr. Dur Muhammad Soomro",
      affiliation: "HoD, Department of Electrical Engineering, DHA Suffa University",
      talkTitle: "Energy Systems and Resilient Infrastructure",
      bio: "Electrical Engineering at DHA Suffa University, with a focus on systems that support a sustainable campus and city.",
      photoSrc: "/media/people/soomro.png",
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
    titleTemplate: "%s | ICESF-2026",
    defaultTitle:
      "ICESF-2026 | International Conference on Engineering a Sustainable Future",
    description:
      "ICESF-2026, 9–10 December 2026 at DHA Suffa University, Karachi. International Conference on Engineering a Sustainable Future: Technology, Management, Human Values and Global Perspectives in the ESG Era. Technically co-sponsored by IEEE.",
    ogImage: null,
  },
};
