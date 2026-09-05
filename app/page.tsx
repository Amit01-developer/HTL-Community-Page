import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import Tracks from "@/components/Tracks";
import Events from "@/components/Events";
import PastEvents from "@/components/PastEvents";
import Speakers from "@/components/Speakers";
import Testimonials from "@/components/Testimonials";
import Expect from "@/components/Expect";
import Sponsors from "@/components/Sponsors";
import Organizers from "@/components/Organizers";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <SocialProof />
      <About />
      <Tracks />
      <Events />
      <PastEvents />
      <Testimonials />
      <Speakers />
      <Expect />
      <Sponsors />
      <Organizers />
      <Newsletter />
      <FAQ />
      <JoinCTA />
      <Footer />
    </main>
  );
}
