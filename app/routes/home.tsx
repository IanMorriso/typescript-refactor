import type { Route } from "./+types/home";
import { Hero } from "../components/hero/hero";
import { About } from "../components/about/about";
import { Experience } from "../components/experience/experience";
import { Projects } from "../components/projects/projects";
import { Contact } from "../components/contact/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
