export type CommitteeSection =
  | "patron"
  | "chair"
  | "co-chair"
  | "secretary"
  | "program"
  | "review"
  | "organizing";

export type ImportantDate = {
  id: string;
  label: string;
  date: string;
};

export type ProgrammeItem = {
  id: string;
  day: string;
  time: string;
  title: string;
};

export type Track = {
  id: string;
  title: string;
  blurb: string;
};

export type Person = {
  id: string;
  name: string;
  role: string;
  section: CommitteeSection;
  affiliation?: string;
  photoSrc?: string | null;
};

export type Speaker = {
  id: string;
  name: string;
  affiliation: string;
  bio: string;
  photoSrc: string | null;
  talkTitle?: string;
};

export type RegistrationFee = {
  id: string;
  category: string;
  amount: string;
};

export type SiteContent = {
  conference: {
    shortName: string;
    fullTitle: string;
    subtitle: string;
    organizer: string;
    affiliationLine: string;
    venue: string;
    city: string;
    announcement: string | null;
    motto: string;
    about: string[];
    aims: {
      intro: string;
      leadIn: string;
      objectives: string[];
    };
    themeIntro: string;
    guidelines: string[];
  };
  importantDates: ImportantDate[];
  programme: ProgrammeItem[];
  faculties: Track[];
  tracks: Track[];
  themes: Track[];
  people: Person[];
  speakers: Speaker[];
  registrationFees: RegistrationFee[];
  contact: {
    email: string;
    phone: string;
    addressLines: string[];
  };
  links: {
    easychair: string | null;
    registration: string | null;
    template: string | null;
  };
  seo: {
    titleTemplate: string;
    defaultTitle: string;
    description: string;
    ogImage: string | null;
  };
};
