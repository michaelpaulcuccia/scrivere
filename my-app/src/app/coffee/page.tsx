import Hero from "@/app/components/Hero";
import { WELCOME } from "@/app/data/ASCIIArt";
import Text from "@/app/components/Text";

export default function Page() {
  return (
    <div>
      <Hero asciiArt={WELCOME}>
        <Text>COFFEE</Text>
        <Text>
          &gt;<span className="blink">_</span>
        </Text>
      </Hero>
    </div>
  );
}
