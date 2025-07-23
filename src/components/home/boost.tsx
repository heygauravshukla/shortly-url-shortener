// External dependencies
import Link from "next/link";

// Local components
import Wrapper from "../layout/wrapper";
import TypographyH2 from "../typography/typography-h2";
import { Button } from "../ui/button";

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
        <Button size="xl" className="w-fit" asChild>
          <Link
            href="#shorten-section"
            prefetch={false}
            aria-label="Get started with Shortly"
          >
            Get Started
          </Link>
        </Button>
      </Wrapper>
    </section>
  );
}
