// NOTE: TS declaration WIP - https://github.com/ealush/vest/pull/247
// @ts-ignore
import vest, { test } from "vest";
// @ts-ignore
import enforce from "vest/enforceExtended";

import {
  EDUCATIONS,
  EXPERIENCES,
  EMPLOYMENT_STATUS,
  WISHED_STATUS,
  LANGUAGES,
  INTERVIEW_AVAILABILITIES
} from "./formData";

type Education = typeof EDUCATIONS[number]["value"];
type Experience = typeof EXPERIENCES[number]["value"];
type EmploymentStatus = typeof EMPLOYMENT_STATUS[number]["value"];
type WishedStatus = typeof WISHED_STATUS[number]["value"];
type Language = typeof LANGUAGES[number]["value"];
type InterviewAvailability = typeof INTERVIEW_AVAILABILITIES[number]["value"];

export type Data = {
  name?: string;
  email?: string;
  startEstimate?: string;
  sourceInfo?: string;
  education?: Education;
  experience?: Experience;
  employmentStatus?: EmploymentStatus;
  wishedStatus?: WishedStatus;
  language?: Language;
  interviewAvailability?: InterviewAvailability;
};

export default vest.create(
  "newApplicantForm",
  (data: Data, currentField?: keyof Data) => {
    currentField && vest.only(currentField);

    test("name", "Name is required", () => {
      enforce(data.name).isNotEmpty();
    });

    test("email", "Email is required", () => {
      enforce(data.email).isNotEmpty();
    });

    test("email", "Email is not valid", () => {
      enforce(data.email).isEmail();
    });

    test("education", "Education is required", () => {
      enforce(data.education).isNotEmpty();
    });

    test("experience", "Experience is required", () => {
      enforce(data.experience).isNotEmpty();
    });

    test("employmentStatus", "This field is required", () => {
      enforce(data.employmentStatus).isNotEmpty();
    });

    test("wishedStatus", "This field is required", () => {
      enforce(data.wishedStatus).isNotEmpty();
    });

    test("language", "Language is required", () => {
      enforce(data.language).isNotEmpty();
    });

    test("interviewAvailability", "This field is required", () => {
      enforce(data.interviewAvailability).isNotEmpty();
    });

    test("startEstimate", "This field is required", () => {
      enforce(data.startEstimate).isNotEmpty();
    });

    test("sourceInfo", "This field is require", () => {
      enforce(data.sourceInfo).isNotEmpty();
    });
  }
);
