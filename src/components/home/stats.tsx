// External dependencies
import Image from "next/image";

// Local components
import Wrapper from "../layout/wrapper";
import TypographyH2 from "../typography/typography-h2";
import TypographyH3 from "../typography/typography-h3";

// Constants
import { stats } from "@/constants/stats";

export default function Stats() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="bg-[hsl(230,25%,95%)] pb-20 pt-21 lg:pb-31 lg:pt-30"
    >
      <Wrapper className="grid gap-23">
        <div className="grid gap-4.5 lg:gap-3">
          <TypographyH2
            id="stats-heading"
            className="text-center text-foreground"
          >
            Advanced Statistics
          </TypographyH2>
          <p className="text-center text-base/relaxed font-medium text-secondary lg:mx-auto lg:max-w-[45ch] lg:text-lg/loose">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <ul className="relative grid place-items-center gap-23 before:absolute before:h-full before:w-2 before:bg-accent before:content-[''] lg:h-87.5 lg:grid-cols-3 lg:gap-8 lg:before:h-2 lg:before:w-full">
          {stats.map(
            ({ iconSrc, iconWidth, iconHeight, title, description }) => (
              <li
                key={title}
                className="relative bg-card grid w-full place-items-center gap-3.5 rounded-lg bg-white px-7 pb-8 pt-19 lg:place-items-start lg:gap-3 lg:px-9 lg:pb-10 lg:first:self-start lg:last:self-end"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 grid size-22 -translate-y-1/2 place-content-center rounded-full bg-primary lg:ml-9"
                >
                  <Image
                    src={iconSrc}
                    alt={title}
                    width={iconWidth}
                    height={iconHeight}
                  />
                </span>

                <TypographyH3 className="text-center text-card-foreground lg:text-left">
                  {title}
                </TypographyH3>

                <p className="text-center text-base/relaxed font-medium -tracking-3 text-secondary lg:text-left lg:-tracking-3">
                  {description}
                </p>
              </li>
            )
          )}
        </ul>
      </Wrapper>
    </section>
  );
}
