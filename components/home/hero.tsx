import Image from "next/image";
import Button from "../ui/button";
import TypographyH1 from "../ui/typography-h1";
import Wrapper from "../ui/wrapper";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="overflow-x-hidden pb-[5.5rem] lg:pb-[4.25rem] lg:pt-12"
    >
      <Wrapper className="grid gap-9 lg:grid-cols-[52%,48%] lg:gap-[5.5rem]">
        {/* Image box */}
        <div className="relative h-[calc(100vw-3.0625rem)] lg:order-2 lg:h-[30.125rem]">
          <Image
            src="/illustration-working.svg"
            alt="Illustration of a person working"
            width={733}
            height={482}
            className="absolute left-0 -z-10 h-full min-w-[calc(100vw-1.5rem)] object-cover object-left lg:min-w-[45.8125rem] lg:object-contain"
          />
        </div>
        {/* Text box */}
        <div className="grid place-items-center lg:order-1 lg:place-content-center lg:place-items-start">
          <TypographyH1 id="hero-heading" className="text-center lg:text-left">
            More than just shorter links
          </TypographyH1>
          <p className="pb-7 pt-4 text-center text-lg/relaxed font-medium text-grayish-violet lg:max-w-[35ch] lg:pb-9 lg:pt-0 lg:text-left lg:text-3xl lg:-tracking-4">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button aria-label="Get started with Shortly" size="xl">
            Get Started
          </Button>
        </div>
      </Wrapper>
    </section>
  );
}
