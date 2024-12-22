import GallerySection from '@/components/organisms/GallerySection';
import HeroSection from '@/components/organisms/HeroSection';
import MediaSection from '@/components/organisms/MediaSection';
import PrioritiesSection from '@/components/organisms/PropertySection';
import VisionSection from '@/components/organisms/VisionSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      {/* <PrioritiesSection /> */}
      <MediaSection />
  <GallerySection />
      {/* Add other page sections here */}
    </>
  );
}