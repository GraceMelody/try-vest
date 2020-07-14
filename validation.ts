// NOTE: TS declaration WIP - https://github.com/ealush/vest/pull/247
// @ts-ignore
import vest, { test } from "vest";
// @ts-ignore
import enforce from "vest/enforceExtended";

export const EDUCATIONS = [
  {
    label: "Self-taught",
    value: "selfTaught"
  },
  {
    label: "University Degree (Computer Science)",
    value: "computerScienceDegree"
  },
  {
    label: "University Degree (Other field)",
    value: "otherFieldDegree"
  }
] as const;

export const EXPERIENCES = [
  {
    label: "Limited experience (University or self taught)",
    value: "limited"
  },
  {
    label: "1 year experience",
    value: "oneYear"
  },
  {
    label: "2 - 3 years experience",
    value: "twoThreeYears"
  },
  {
    label: "4 years experience or more",
    value: "fourMoreYears"
  }
] as const;

export const EMPLOYMENT_STATUS = [
  {
    label: "Not Employed",
    value: "unemployed"
  },
  {
    label: "Employed as a programmer",
    value: "programmer"
  },
  {
    label: "Employed in another role",
    value: "employed"
  },
  {
    label: "Self-employed / Freelance",
    value: "freelance"
  },
  {
    label: "Student",
    value: "student"
  }
] as const;

export const WISHED_STATUS = [
  {
    label: "Full time employment",
    value: "fullTime"
  },
  {
    label: "Part time work",
    value: "partTime"
  },
  {
    label: "Internship",
    value: "intern"
  }
] as const;

export const LANGUAGES = [
  {
    label: "Java",
    value: "java"
  },
  {
    label: "C/C++",
    value: "c/c++"
  },
  {
    label: "Python",
    value: "python"
  },
  {
    label: "C#",
    value: "c#"
  },
  {
    label: "PHP",
    value: "php"
  },
  {
    label: "JavaScript",
    value: "js"
  },
  {
    label: "Ruby",
    value: "ruby"
  },
  {
    label: "Objective-C/Swift",
    value: "obj-c/swift"
  }
] as const;

export const INTERVIEW_AVAILABILITIES = [
  {
    label: "Anytime",
    value: "anytime"
  },
  {
    label: "Weekday",
    value: "weekday"
  },
  {
    label: "Evening",
    value: "evening"
  },
  {
    label: "Weekend",
    value: "weekend"
  }
] as const;

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
