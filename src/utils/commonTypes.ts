export interface University {
    id: string;
    name: string;
    type: "private" | "state";
    gradeType: "associate" | "bachelor" | "master" | "PhD";
    educationType: string;
    campusType: "on" | "off";
    primaryLanguage: string;
    country: string;
    yearsOfStudy: number;
    deadlineForApplication: string;
    season: string;
    amount: number;
    course: string;
  }