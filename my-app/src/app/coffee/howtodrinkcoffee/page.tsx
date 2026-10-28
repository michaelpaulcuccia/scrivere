import Hero from "@/app/components/Hero";
import { COFFEE } from "@/app/data/ASCIIArt";
import Text from "@/app/components/Text";

export default function Page() {
  return (
    <div>
      <Hero asciiArt={COFFEE}>
        <Text>How to drink coffee</Text>
        <Text>
          &gt;<span className="blink">_</span>
        </Text>
      </Hero>
      <Text>
        Coffee begins with high quality, fresh roasted beans and clean spring
        water.
      </Text>
    </div>
  );
}
