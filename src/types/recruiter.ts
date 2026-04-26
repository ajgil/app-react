// Recruiter Onboarding Types

export interface YachtData {
  yachtName: string;
  yachtSize: string;
  flag: string;
  website?: string;
}

export interface RecruiterData {
  fullName: string;
  role: string;
  phone: string;
  email: string;
}

export interface OnboardingFormData {
  yacht: YachtData | null;
  recruiter: RecruiterData | null;
}

export type OnboardingStep = "yacht-setup" | "recruiter-details" | "done";
