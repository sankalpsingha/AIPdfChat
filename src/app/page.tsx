import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Nav from "@/components/Nav";
import CTASection from "@/components/SimpleCTA";

export default function Home() {
  return (
    <div className="">
      <MaxWidthWrapper>
        <HeroSection />
        <FeatureSection />
        <CTASection />
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
}
