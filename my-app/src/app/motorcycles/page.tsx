import Hero from "@/app/components/Hero";
import { MOTORCYCLES } from "@/app/data/ASCIIArt";
import Text from "@/app/components/Text";

export default function Page() {
  return (
    <div>
      <Hero asciiArt={MOTORCYCLES}>
        <Text>Motorcyles</Text>
        <Text>
          &gt;<span className="blink">_</span>
        </Text>
      </Hero>
      <Hero>I purchased my first motorcycle in the Spring of 2026.</Hero>
    </div>
  );
}
