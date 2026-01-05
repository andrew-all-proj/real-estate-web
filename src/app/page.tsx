import ContactFormSection from '@/components/sections/ContactFormSection';
import ContactsSection from '@/components/sections/ContactsSection';
import CtaSection from '@/components/sections/CtaSection';
import FindSection from '@/components/sections/FindSection';
import HeroSection from '@/components/sections/HeroSection';
import ProcessSection from '@/components/sections/ProcessSection';
import PropertiesSection from '@/components/sections/PropertiesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TeamSection from '@/components/sections/TeamSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PropertiesSection />
      <FindSection />
      <ProcessSection />
      <ServicesSection />
      <CtaSection />
      <TeamSection />
      <ContactsSection />
      <ContactFormSection />
    </main>
  );
}
