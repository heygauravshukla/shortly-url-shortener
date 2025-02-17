import { Button } from "../ui/button";
import TypographyH2 from "../ui/typography-h2";
import Wrapper from "../ui/wrapper";

export default function Boost() {
  return (
    <section
      aria-labelledby="boost-heading"
      className="bg-primary bg-[url('/backgrounds/bg-boost-mobile.svg')] bg-cover bg-center bg-no-repeat pb-22 pt-24 lg:bg-[url('/backgrounds/bg-boost-desktop.svg')] lg:py-14"
    >
      <Wrapper className="grid place-items-center gap-4 lg:gap-5">
        <TypographyH2
          id="boost-heading"
          className="text-center text-background"
        >
          Boost your links today
        </TypographyH2>
        <Button size="xl" className="w-fit">
          Get Started
        </Button>
      </Wrapper>
    </section>
  );
}
