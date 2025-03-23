import type { Route } from "./+types/home";
import { Header } from "../components/header/header";
import { Highlights } from "~/highlights/highlights";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ian Morrison" },
    { name: "Personal Website", content: "Welcome! I'm Ian Morrison, a software engineer looking for opportunities to grow and learn." },
  ];
}

export default function Home() {
  return (
    <div>
      <Header />
      <Highlights />
  </div>
);
}
