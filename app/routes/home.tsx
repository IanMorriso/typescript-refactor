import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome/welcome";
import { Highlights } from "../components/highlights/highlights";
import { Footer } from "../components/footer/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Welcome />
      <Highlights />
      <Footer />
  </div>
);
}
