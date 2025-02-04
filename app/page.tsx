import Header from "@/components/header";
import Hero from "@/components/home/hero";
import Shorten from "@/components/home/shorten";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Shorten />
      </main>
    </>
  );
}
