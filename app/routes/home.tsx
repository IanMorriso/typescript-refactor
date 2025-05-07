import type { Route } from "./+types/home";
import { Hero } from "../components/hero/hero";
import { About } from "../components/about/about";
import { Experience } from "../components/experience/experience";
import { Projects } from "../components/projects/projects";
import { Contact } from "../components/contact/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ian Morrison" },
    { name: "Personal Website", content: "Welcome! I'm Ian Morrison, a software engineer looking for opportunities to grow and learn." },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />

      <Contact />
    </main>
  );
}
