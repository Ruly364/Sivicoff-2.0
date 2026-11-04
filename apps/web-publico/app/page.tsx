
import AccessCards from "../components/AccessCards";
import HeroSection from "../components/HeroSection";
import PublicFooter from "../components/PublicFooter";
import PublicHeader from "../components/PublicHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7f3] text-[#20352b]">
      <PublicHeader />
      <HeroSection />
      <AccessCards />
      <PublicFooter />
    </main>
  );
}
