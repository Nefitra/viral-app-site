import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Promote from "./components/Promote";
import HowItWorks from "./components/HowItWorks";
import TokenUtility from "./components/TokenUtility";
import VVIRAL from "./components/VVIRAL";
import Escrow from "./components/Escrow";
import Referrals from "./components/Referrals";
import Wallet from "./components/Wallet";
import Loop from "./components/Loop";
import Roadmap from "./components/Roadmap";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-[Inter,system-ui,sans-serif] selection:bg-[#8A2BFF]/40 selection:text-white">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Promote />
        <HowItWorks />
        <TokenUtility />
        <VVIRAL />
        <Escrow />
        <Referrals />
        <Wallet />
        <Loop />
        <Roadmap />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
