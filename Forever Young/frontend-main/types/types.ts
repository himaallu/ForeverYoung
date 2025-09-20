export interface OpportunitySchema {
  _id: string;
  projectName: string;
  domain: "Design" | "Tech" | "Management" | "Other";
  hackathon: Hackathon;
  role: string;
  description: string;
  skills: Array<{ id: string; text: string }>;
  link: string;
  emailAddress: string;
  phoneNumber: string;
}
export interface CreateOpportunityForm {
  projectName: string;
  role: string;
  domain: "Design" | "Tech" | "Management" | "Other";
  hackathon: Hackathon;
  description: string;
  skills: Array<{ id: string; text: string }>;
  link: string;
  emailAddress: string;
  phoneNumber: string;
}

export type Hackathon = "-" | "DEVSOC" | "Ignitia";
export interface User {
  _id: string;
  googleId: string;
  email: string;
  name: string;
}

export interface Opportunity extends CreateOpportunityForm {
  _id: string;
  emailAddress: string;
}

export interface UserSliceInitialState {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface OpportunitySliceInitialState {
  opportunities: Opportunity[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}
