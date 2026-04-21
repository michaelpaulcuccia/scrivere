import Hero from "./components/Hero";
import { HELLO_WORLD } from "./data/ASCIIArt";

export default function Page() {
  return (
    <div>
      <Hero asciiArt={HELLO_WORLD} />
    </div>
  );
}
