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
        I don&apos;t remember how old or where I was the first time I tried a
        coffee. I&apos;m pretty sure my reaction would have been that it&apos;s
        too bitter or it was too hot. I really wasn&apos;t much of a hot drink
        kid.
      </Text>
      <Text>
        I can tell you that it wasn&apos;t something I sought out. I wasn&apos;t
        a morning coffee drinker. I suppose ever once in a while I would have
        one. Almost certainly in NJ dinners. I had lived in Germany when I was
        in the Army and there was a place I went to for breakfast. Not just any
        breakfast, it was their <i>country breakfast</i>. I would sometimes get
        a shot of espresso, to make myself feel a little more European.
      </Text>
      <Text>
        After getting out of the Army, I lived in Northwest New Jersey, right at
        the very edge of the state on the Delaware River. I was the last exit
        off of Interstate 78 in Phillipsburg, NJ. Other times, I was living just
        across the river in Easton, PA. It was about 70 miles to downtown Newark
        and I commuted 5 days a week spending the majority of the time rubber
        necking in endless miserable traffic. The commute was an hour forty five
        most days. An hour forty five, each way. Why I worked so far from home
        you ask? Well, it was cheaper to live further west and this was a time
        was gas was a bit cheaper and long before COVID opened up the option to
        work at home. This the early 2000s, following 9/11 and the second Iraq
        war.
      </Text>
      <Text>
        I feel like I&apos;m telling you a whole other story here because this
        is supposed to be about coffee and yes, it now comes back to coffee.
        While on that God awful commute I would run into particuarly bad traffic
        around Clinton, NJ in Hunderton County. This happened to be where the
        Clinton Station Diner was located. This is somewhat of a famous diner
        because they are known for burgers up to 50lbs and the various contests
        they hold for people, or groups of people, to eat these enormous
        burgers. If traffic was at a total standstill, and believe me it was
        quite often, I would just pull into the diner and order a breakfast and
        wait it out there.
      </Text>
      <Text>
        I&apos;m all for two eggs scrambled, bacon, and white toast. This was a
        regular special and came with either juice or coffee. Every so often,
        just to make things interesting, I would order the coffee and usually
        fill it with cream and sugar and maybe drink half the cup, if that. I
        guess I eventually got used to the taste because I would get it more and
        more and with increasingly less milk and sugar. And I started to finish
        these cups and would notice when I got in the car and had a good 60
        minutes to go, I was <i>AWAKE</i>. I felt alive. I would crank the Radio
        and cruise the highway. And I guess that is how I finally became a
        coffee drinker. Getting some good diner coffee and feeling that caffiene
        surge. On the days I didn&apos;t go to the diner, I was in WaWa or
        Dunkin. It quickly became a habit, my morning coffee for the ride to
        work. I didn&apos;t make it at home, I didn&apos;t even own a coffee
        machine or anything. I just got it on my way out, like you would pick up
        a newspaper or a pack of gum. It was still something of a grab-and-go.
        There were no feelings.
      </Text>
    </div>
  );
}
