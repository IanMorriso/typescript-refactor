import { Sidebar } from "~/components/sidebar/sidebar";

export function Skills() {
  const skills = [
    { category: "Languages", items: ["C", "Python", "Java", "JavaScript", "TypeScript", "RISC-V", "HTML/CSS"] },
    { category: "Tools and Technologies", items: ["Git", "scikit-learn", "Google Cloud Platform", "Cursor", "Figma", "MongoDB", "React", "Node.js", "Vue", "REST APIs"] },
    { category: "Other", items: ["Agile Development", "Algorithm Analysis", "Optimization", "Parallel Computing", "Data Structures", "Object-Oriented Programming"] }
  ];

  return <Sidebar title="Skills" categories={skills} position="left" />;
} 