import type { Route } from "./+types/home";
import { Header } from "../components/header/header";
import { Highlights } from "~/highlights/highlights";
import { Skills } from "~/components/skills/skills";
import { Education } from "~/components/education/education";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ian Morrison" },
    { name: "Personal Website", content: "Welcome! I'm Ian Morrison, a software engineer looking for opportunities to grow and learn." },
  ];
}

export default function Home() {
  return (
    <div className="flex">
      <Skills />
      <div className="flex-1 ml-64 mr-64">
        <Header />
        <Highlights />
      </div>
      <Education />
    </div>
  );
}
