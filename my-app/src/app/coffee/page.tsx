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
      <Text>
        I would like to share how I prepare my coffee as well as the way that I
        like to drink it. But first, I ought to tell you my coffee story.
      </Text>
    </div>
  );
}
