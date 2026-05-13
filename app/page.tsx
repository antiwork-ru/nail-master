import Hero from "@/components/Hero";
import About from "@/components/About";
import Price from "@/components/Price";
import Education from "@/components/Education";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Price />
      <Education />
      <Portfolio />
      <Reviews />
      <Booking />

      <Footer />
    </>
  );
}