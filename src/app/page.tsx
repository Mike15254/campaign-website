import HeroSection from '@/components/organisms/HeroSection';
import PrioritiesSection from '@/components/organisms/PropertySection';
import VisionSection from '@/components/organisms/VisionSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <PrioritiesSection />
      {/* Add other page sections here */}
    </>
  );
}