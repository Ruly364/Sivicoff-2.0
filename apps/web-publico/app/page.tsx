
import AccessCards from "../components/AccessCards";
import HeroSection from "../components/HeroSection";
import PublicHeader from "../components/PublicHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7f3] text-[#20352b]">
      <PublicHeader />
      <HeroSection />
      <AccessCards />

      <footer className="border-t border-[#dce4dc] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-[#617267]">
          SIVICOFF · Sistema de Vigilancia y Control Fitosanitario Forestal
        </div>
      </footer>
    </main>
  );
}
