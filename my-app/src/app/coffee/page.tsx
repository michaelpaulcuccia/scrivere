import Hero from "@/app/components/Hero";
import { COFFEE } from "@/app/data/ASCIIArt";
import Text from "@/app/components/Text";

export default function Page() {
  return (
    <div>
      <Hero asciiArt={COFFEE}>
        <Text>Coffee</Text>
        <Text>
          &gt;<span className="blink">_</span>
        </Text>
      </Hero>
    </div>
  );
}
