import AnnouncementBar from "./_components/AnnouncementBar";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Collections from "./_components/Collections";
import Bestsellers from "./_components/Bestsellers";
import WhyUwakstar from "./_components/WhyUwakstar";
import FounderSpotlight from "./_components/FounderSpotlight";
import AsSeenIn from "./_components/AsSeenIn";
import Testimonial from "./_components/Testimonial";
import Newsletter from "./_components/Newsletter";
import Footer from "./_components/Footer";

export default function UwakstarPage() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <Hero />
      <Collections />
      <Bestsellers />
      <WhyUwakstar />
      <FounderSpotlight />
      <AsSeenIn />
      <Testimonial />
      <Newsletter />
      <Footer />
    </main>
  );
}
