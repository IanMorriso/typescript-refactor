import { Sidebar } from "~/components/sidebar/sidebar";

export function Education() {
  const education = [
    { category: "University of Alberta", items: ["Bachelor of Science with Specialization in Computing Science - Expected graduation December 2026"] },

  ];

  return <Sidebar title="Education" categories={education} position="right" />;
} 