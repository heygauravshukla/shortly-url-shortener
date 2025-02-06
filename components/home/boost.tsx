import Button from "../ui/button";
import TypographyH2 from "../ui/typography-h2";
import Wrapper from "../ui/wrapper";

export default function Boost() {
  return (
    <section aria-labelledby="boost-heading" className="bg-dark-violet">
      <Wrapper className="grid place-items-center gap-4 pb-[5.5rem] pt-24 lg:gap-5 lg:py-14">
        <TypographyH2 id="boost-heading" className="text-center text-white">
          Boost your links today
        </TypographyH2>
        <Button type="button" size="xl" className="w-fit">
          Get Started
        </Button>
      </Wrapper>
    </section>
  );
}
