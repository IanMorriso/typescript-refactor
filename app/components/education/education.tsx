import { Sidebar } from "~/components/sidebar/sidebar";

export function Education() {
  const education = [
    { category: "University of Alberta", items: ["Bachelor of Science with Specialization in Computing Science - Expected graduation December 2026"] },
    { category: "Courses", items: ["CMPUT 301: Intro to Software Engineering", "CMPUT 379: Operating Systems", "CMPUT 204: Algorithms", "CMPUT 229: Computer Architecture", "CMPUT 201: Practical Programming Methodologies",  "CMPUT 291: File and Database Design"]}
  ];

  return <Sidebar title="Education" categories={education} position="right" />;
} 