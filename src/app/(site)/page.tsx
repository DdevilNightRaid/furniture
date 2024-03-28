import Navbar from "@/components/Navbar/Navbar";
import Hero from "./_components/Hero/Hero";
import Why from "./_components/why/Why";
import MaxWidthWrapper from "@/lib/MaxWidthWrapper";
import Best from "./_components/best/Best";
import ShowCase from "./_components/showcase/ShowCase";
import Contact from "./_components/contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-[#fefefe]">
      <MaxWidthWrapper className="bg-background w-full">
        <header>
          <Navbar />
          <Hero />
        </header>
      </MaxWidthWrapper>
      <section>
        <Why />
      </section>
      <section>
        <Best />
      </section>
      <section>
        <ShowCase />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
