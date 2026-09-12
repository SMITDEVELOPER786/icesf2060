import type { SiteContent } from "./types";

// DSU host names follow the public university directory for a Suffa-campus layout.
// Confirm titles and conference roles with the organizer before launch.
export const site: SiteContent = {
  conference: {
    shortName: "ISRC-STM 2026",
    fullTitle:
      "3rd International Student Research Conference on Sustainable Technology & Management",
    subtitle: "Technology, Management, Human Values & ESG Perspectives",
    organizer: "DHA Suffa University",
    affiliationLine: "",
    venue: "DHA Suffa University Main Campus, DHA Phase VII (Ext.), Karachi",
    organizedBy: "Organized by the Directorate of Postgraduate Programs",
    city: "Karachi",
    motto: "Learn to discover",
    announcement: "Abstract submission deadline: 10 November 2026",
    about: [
      "DHA Suffa University (DSU), Karachi, is committed to promoting academic excellence, research, innovation, and interdisciplinary learning. Through its teaching and research initiatives, the University provides a platform for students, researchers, academicians, and professionals to engage with emerging challenges and contribute innovative solutions for society and industry.",
      "With expertise spanning Computing and Information Technology, Management Sciences, Mechanical and Electrical Engineering, and Humanities and Social Sciences, DSU encourages collaboration across disciplines. This multidisciplinary environment enables research that combines technological advancement with effective management, ethical responsibility, human values, and sustainable development.",
      "Building on the success of its previous editions, DSU is organizing the 3rd International Student Research Conference on Sustainable Technology & Management (ISRC-STM 2026) on 9–10 December 2026. The conference provides a platform for students, researchers, academics, and industry professionals to present their research, exchange ideas, and explore innovative approaches toward sustainable development.",
      "Under the theme “Technology, Management, Human Values & ESG Perspectives,” ISRC-STM 2026 emphasizes the integration of engineering, digital technologies, business and management practices, and social and ethical perspectives. The conference aims to encourage interdisciplinary research and meaningful dialogue on how technology and responsible management can contribute to a more sustainable, resilient, inclusive, and socially responsible future.",
    ],
    aims: {
      intro:
        "The 3rd International Student Research Conference on Sustainable Technology & Management (ISRC-STM 2026) aims to provide an interdisciplinary platform for students, researchers, academicians, and industry professionals to present innovative research, exchange ideas, and explore practical solutions for a sustainable future.",
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
      "Engineering a sustainable future is reshaping technology, enterprise, and public life, creating both opportunities and responsibilities in the ESG era. ISRC-STM 2026 brings together students, researchers, academics, and practitioners to explore the intersection of technology, management, human values, and sustainability, and to share research that contributes to responsible and sustainable development.",
    guidelines: [
      "Submissions must be original and not under review elsewhere.",
      "Full papers should follow the IEEE conference paper format when a template link is provided.",
      "At least one author of each accepted paper is expected to register and present.",
    ],
  },
  importantDates: [
    {
      id: "abstract",
      label: "Abstract Submission Deadline",
      date: "10 Nov 2026",
    },
    {
      id: "notification",
      label: "Notification of Acceptance of Abstract",
      date: "20 Nov 2026",
    },
    {
      id: "full-paper",
      label: "Deadline for Presentation Submission",
      date: "30 Nov 2026",
    },
    {
      id: "conference",
      label: "Conference Date",
      date: "9 and 10 December 2026",
    },
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
      title: "Sustainable Engineering & Green Infrastructure",
      blurb:
        "Engineering solutions for renewable energy, sustainable infrastructure, smart grids, green buildings, advanced materials, manufacturing, transportation, and resource-efficient development.",
    },
    {
      id: "ai-data-smart",
      title: "AI, Data & Smart Systems",
      blurb:
        "Artificial intelligence, machine learning, IoT, digital twins, data analytics, and intelligent systems supporting sustainable environments, industries, communities, and informed decision-making.",
    },
    {
      id: "sustainable-business",
      title: "Sustainable Business, ESG & Supply Chains",
      blurb:
        "Sustainable business models, ESG strategy and reporting, green finance, circular economy, responsible operations, sustainable logistics, and resilient supply-chain management.",
    },
    {
      id: "governance-policy",
      title: "Governance, Policy & Responsible Innovation",
      blurb:
        "Sustainability governance, regulatory frameworks, stakeholder engagement, institutional responsibility, responsible innovation, data governance, and policy approaches for sustainable development.",
    },
    {
      id: "human-values",
      title: "Human Values, Ethics & Well-being",
      blurb:
        "Ethics, social responsibility, inclusion, responsible AI, human-centered innovation, organizational well-being, and the social and ethical dimensions of technological and sustainable transformation.",
    },
    {
      id: "society-sdg",
      title: "Society, Education & Sustainable Development",
      blurb:
        "Social equity, behavior change, responsible consumption, education, green skills, workforce transformation, community engagement, and inclusive approaches to sustainable development.",
    },
  ],
  // Conference committee — update roles with organizers before launch.
  people: [
    {
      id: "patron-1",
      name: "Prof. Dr. Ahmed Saeed Minhas",
      role: "Patron-in-Chief",
      section: "patron",
      affiliation: "Vice Chancellor, DHA Suffa University",
      photoSrc: "/media/speakers/minhas.jpeg",
    },
    {
      id: "sec-1",
      name: "Engr. Prof. Dr. Ahmad Hussain",
      role: "Conference Chair",
      section: "secretary",
      affiliation:
        "Dean, Faculty of Engineering and Applied Sciences, DHA Suffa University",
      photoSrc: "/media/people/ahmad-hussain-dean.jpeg",
    },
    
    {
      id: "cochair-cit",
      name: "Prof. Dr. Syed Zafar Nasir",
      role: "Conference Co-Chair",
      section: "co-chair",
      affiliation:
        "Dean, Faculty of Computing & Information Technology, DHA Suffa University",
      photoSrc: "/media/people/syed-zafar-nasir-dean.jpg",
    },
    {
      id: "cochair-mss",
      name: "Prof. Dr. Imtiaz Arif",
      role: "Conference Co-Chair",
      section: "co-chair",
      affiliation: "Dean, Faculty of Management Sciences, DHA Suffa University",
      photoSrc: "/media/people/imtiaz-arif-dean.png",
    },
    {
      id: "cochair-hss1",
      name: "Prof. Dr. Zainab Hussain Bhutto",
      role: "Conference Co-Chair",
      section: "co-chair",
      affiliation:
        "Dean, Faculty of Humanities & Social Sciences, DHA Suffa University",
      photoSrc: "/media/people/zainab-hussain-bhutto-dean.png",
    },
   
    {
      id: "cochair-hss",
      name: "Dr. Rabia Mumtaz",
      role: "Conference Secretary",
      section: "co-chair",
      affiliation:
        "Researcher in Green HRM, ESG & Sustainable Business | Deputy Director",
      photoSrc: "/media/people/rabia.jpg",
    },
    {
      id: "cochair-hss3",
      name: "Dr. Huma Jamshed",
      role: "co Secretary Conference",
      section: "co-chair",
      affiliation:
        "Head of Computer Science Department",
      photoSrc: "/media/people/humamam.jpeg",
    },
  ],
  speakers: [
    {
      id: "minhas",
      name: "Prof. Dr. Ahmed Saeed Minhas",
      affiliation: "Vice Chancellor, DHA Suffa University",
      bio: ".",
      photoSrc: "/media/speakers/minhas.jpeg",
    },
    {
      id: "afzal-haque",
      name: "Prof. Dr. Muhammad Afzal Haque",
      affiliation:
        "Vice Chancellor, Sir Syed University of Engineering & Technology (SSUET)",
      bio: "",
      photoSrc: "/media/speakers/afzal-haque.jpg",
    },
    {
      id: "vali-uddin",
      name: "Prof. Dr. Engr. Vali Uddin",
      affiliation: "Vice Chancellor, UIT University",
      bio: "",
      photoSrc: "/media/speakers/vali-uddin.jpg",
    },
    {
      id: "pathan1",
      name: "Dr Nadeem Qazi",
      affiliation:
        "Associate Professor, Department of Computer Science, UEL",
        bio: "",
        photoSrc: "/media/speakers/pathan.jpg",

    },
    {
      id: "pathan",
      name: "Prof. Dr. Dur Muhammad Pathan",
      affiliation:
        "Pro-Vice Chancellor, MUET, SZAB Campus, Khairpur Mir’s",
      bio: "",
            photoSrc: "/media/speakers/meh.png",
    },
   
    {
      id: "broderick",
      name: "Prof. Amanda J. Broderick",
      affiliation: "Vice-Chancellor & President, University of East London",
      bio: "",
      photoSrc: null,
    },
  ],
  partners: [
    {
      id: "dsu",
      name: "DHA Suffa University",
      logoSrc: "/media/partners/dsu.png",
    },
    {
      id: "ssuet",
      name: "Sir Syed University of Engineering & Technology",
      logoSrc: "/media/partners/ssuet.png",
    },
    {
      id: "uit",
      name: "UIT University",
      logoSrc: "/media/partners/uit.png",
    },
    {
      id: "muet",
      name: "MUET, Shaheed Z.A. Bhutto Campus, Khairpur Mirs",
      logoSrc: "/media/partners/muet.png",
    },
    {
      id: "uel",
      name: "University of East London",
      logoSrc: "/media/partners/uel.png",
    },
    {
      id: "inti",
      name: "INTI International University",
      logoSrc: "/media/partners/inti.png",
    },
    {
      id: "szabist",
      name: "SZABIST University",
      logoSrc: "/media/partners/szabist.png",
    },
  ],
  registrationFees: [
    { id: "national-fulltime", category: "National Full-Time Students", amount: "Rs 2,500" },
    { id: "online", category: "Online / International Students", amount: "Rs 1,500 / USD 15" },
  ],
  bankDetails: [
    { label: "Bank Name", value: "Bank AL Habib Ltd." },
    { label: "Account Title", value: "DHA SUFFA UNIVERSITY" },
    { label: "Account No.", value: "1074-0081-004027-01-3" },
    { label: "Swift Code", value: "BAHLPKKA" },
    { label: "IBAN", value: "PK06BAHL1074008100402701" },
    { label: "Branch Name", value: "Khayaban-e-Rahat (1074)" },
    { label: "Branch Code", value: "1074" },
    {
      label: "Branch Address",
      value:
        "Plot No. 14-C, Khayaban-e-Rahat, Lane-3, Phase-VI, D.H.A. Karachi",
    },
    { label: "Phone No.", value: "021-35349777-78-79" },
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
    easychair: "https://short.do/TnN6pf",
    registration: "https://short.do/TnN6pf",
    template: "https://www.ieee.org/conferences/publishing/templates.html",
  },
  seo: {
    titleTemplate: "%s | ISRC-STM 2026",
    defaultTitle:
      "ISRC-STM 2026 | 3rd International Student Research Conference on Sustainable Technology & Management",
    description:
      "ISRC-STM 2026, 9–10 December 2026 at DHA Suffa University, Karachi. 3rd International Student Research Conference on Sustainable Technology & Management — Technology, Management, Human Values & ESG Perspectives.",
    ogImage: null,
  },
};
