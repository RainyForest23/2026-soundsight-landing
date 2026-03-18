import { FluidBackground } from './components/background/FluidBackground';
import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { DemoSection } from './sections/DemoSection';
import { FooterSection } from './sections/FooterSection';
import { useViewportHeight } from './hooks/useViewportHeight';

export default function App() {
  useViewportHeight();

  return (
    <div className="siteShell">
      <FluidBackground />
      <main className="siteMain">
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
      </main>
      <FooterSection />
    </div>
  );
}
