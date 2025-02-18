import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import TypographyH1 from "../ui/typography-h1";
import Wrapper from "../ui/wrapper";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="overflow-x-hidden pb-22 lg:pb-17 lg:pt-12"
    >
      <Wrapper className="grid gap-9 lg:grid-cols-[52%_48%] lg:gap-22">
        {/* Image box */}
        <div className="relative h-[calc(100vw-3.0625rem)] lg:order-2 lg:h-120.5">
          <Image
            src="/illustration-working.svg"
            alt="Illustration of a person working"
            width={733}
            height={482}
            className="absolute left-0 -z-10 h-full min-w-[calc(100vw-1.5rem)] object-cover object-left lg:min-w-183.5 lg:object-contain"
          />
        </div>
        {/* Text box */}
        <div className="grid place-items-center lg:order-1 lg:place-content-center lg:place-items-start">
          <TypographyH1
            id="hero-heading"
            className="text-center text-muted-foreground lg:text-left"
          >
            More than just shorter links
          </TypographyH1>
          <p className="text-lg/relaxed font-medium  text-center text-muted pb-7 pt-4 lg:max-w-[35ch] lg:text-3xl lg:-tracking-4 lg:text-left lg:pb-9 lg:pt-0">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button size="xl" asChild>
            <Link
              href="#shorten-section"
              prefetch={false}
              aria-label="Get started with Shortly"
            >
              Get Started
            </Link>
          </Button>
        </div>
      </Wrapper>
    </section>
  );
}
