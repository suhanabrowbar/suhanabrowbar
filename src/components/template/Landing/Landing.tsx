'use client';
import { motion } from 'framer-motion';
import Hero from '@/components/organisme/Hero/Hero';
import About from '@/components/organisme/About/About';
import Services from '@/components/organisme/Services/Services';
import GiftCertificates from '@/components/organisme/GiftCertificates/GiftCertificates';
import Testimonials from '@/components/organisme/Testimonials/Testimonials';
import BookingCTA from '@/components/organisme/BookingCTA/BookingCTA';
import ScrollHandler from '@/components/organisme/ScrollHandler/ScrollHandler';
import dynamic from 'next/dynamic';

const Gallery = dynamic(
  () => import('@/components/organisme/Gallery/Gallery'),
  { ssr: false, loading: () => <div>Loading...</div> },
);
const BeforeAfter = dynamic(
  () => import('@/components/organisme/BeforeAfter/BeforeAfter'),
  { ssr: false, loading: () => <div>Loading...</div> },
);

const FadeIn = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.8, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const Landing = () => {
  return (
    <div className="overflow-hidden">
      <ScrollHandler />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.section>
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn delay={0.2}>
        <Services />
      </FadeIn>
      <FadeIn>
        <BeforeAfter />
      </FadeIn>
      <FadeIn>
        <Gallery />
      </FadeIn>
      <FadeIn>
        <GiftCertificates />
      </FadeIn>
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <BookingCTA />
      </FadeIn>
    </div>
  );
};

export default Landing;
