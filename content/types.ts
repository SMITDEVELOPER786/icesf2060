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
};

export type Speaker = {
  id: string;
  name: string;
  affiliation: string;
  bio: string;
  photoSrc: string | null;
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
    organizer: string;
    affiliationLine: string;
    venue: string;
    city: string;
    announcement: string | null;
    about: string[];
    guidelines: string[];
  };
  importantDates: ImportantDate[];
  tracks: Track[];
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
