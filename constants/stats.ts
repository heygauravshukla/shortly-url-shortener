export interface StatItem {
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  description: string;
}

export const stats: StatItem[] = [
  {
    iconSrc: "/icons/icon-brand-recognition.svg",
    iconWidth: 40,
    iconHeight: 40,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.",
  },
  {
    iconSrc: "/icons/icon-detailed-records.svg",
    iconWidth: 40,
    iconHeight: 40,
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    iconSrc: "/icons/icon-fully-customizable.svg",
    iconWidth: 48,
    iconHeight: 48,
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];
