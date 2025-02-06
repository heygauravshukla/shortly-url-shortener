import Image from "next/image";
import TypographyH2 from "../ui/typography-h2";
import TypographyH3 from "../ui/typography-h3";
import Wrapper from "../ui/wrapper";

// Type definition for each statistic item
interface StatItem {
  id: number;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  description: string;
}

// List of statistics displayed in the section
const stats: StatItem[] = [
  {
    id: 1,
    iconSrc: "/icons/icon-brand-recognition.svg",
    iconWidth: 40,
    iconHeight: 40,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.",
  },
  {
    id: 2,
    iconSrc: "/icons/icon-detailed-records.svg",
    iconWidth: 40,
    iconHeight: 40,
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    id: 3,
    iconSrc: "/icons/icon-fully-customizable.svg",
    iconWidth: 48,
    iconHeight: 48,
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

export default function Stats() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="bg-[#F0F1F6] py-20 lg:py-[7.5rem]"
    >
      <Wrapper className="grid gap-[5.75rem]">
        {/* Section heading and description */}
        <div className="grid gap-[1.125rem] lg:gap-3">
          <TypographyH2
            id="stats-heading"
            className="text-center text-very-dark-violet"
          >
            Advanced Statistics
          </TypographyH2>
          <p className="text-center text-base/relaxed font-medium text-grayish-violet lg:mx-auto lg:max-w-[45ch] lg:text-lg/loose">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        {/* Stats list */}
        <ul className="relative grid place-items-center gap-[5.75rem] before:absolute before:h-full before:w-2 before:bg-cyan before:content-[''] lg:h-[21.875rem] lg:grid-cols-3 lg:gap-8 lg:before:h-2 lg:before:w-full">
          {stats.map(
            ({ id, iconSrc, iconWidth, iconHeight, title, description }) => (
              <li
                key={id}
                className="relative grid w-full place-items-center gap-[0.875rem] rounded-lg bg-white px-7 pb-8 pt-[4.75rem] lg:place-items-start lg:gap-3 lg:px-9 lg:pb-10 lg:first:self-start lg:last:self-end"
              >
                {/* Icon container (positioned above each stat item) */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 grid size-[5.5rem] -translate-y-1/2 place-content-center rounded-full bg-dark-violet lg:ml-9"
                >
                  <Image
                    src={iconSrc}
                    alt={title}
                    width={iconWidth}
                    height={iconHeight}
                  />
                </span>

                <TypographyH3 className="text-center text-very-dark-violet lg:text-left">
                  {title}
                </TypographyH3>

                <p className="text-center text-base/relaxed font-medium -tracking-3 text-grayish-violet lg:text-left lg:-tracking-3">
                  {description}
                </p>
              </li>
            ),
          )}
        </ul>
      </Wrapper>
    </section>
  );
}
