import Hero from "./components/Hero";
import { WELCOME } from "./data/ASCIIArt";

export default function Page() {
  return (
    <div>
      <Hero asciiArt={WELCOME} />
    </div>
  );
}
