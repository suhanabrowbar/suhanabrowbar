'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

const HeroScrollActions = () => {
  const router = useRouter();

  const scrollToSection = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();

    if (window.location.pathname !== '/') {
      router.push(`/?scrollTo=${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <Link
          href="/booking"
          className="group relative overflow-hidden rounded-full bg-[#7d4638] px-10 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white shadow-[0_18px_45px_rgba(80,42,32,0.22)] transition-all duration-300 hover:bg-[#8e5546] hover:shadow-[0_22px_55px_rgba(80,42,32,0.3)]"
        >
          <span className="relative z-10">Book Your Brows</span>

          <motion.div
            className="absolute inset-0 z-0 bg-white/15"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.55 }}
          />
        </Link>

        <button
          onClick={(e) => scrollToSection(e, 'services')}
          className="group flex cursor-pointer items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:text-secondary"
        >
          <span>View Services</span>
          <div className="h-px w-8 bg-secondary transition-all duration-300 group-hover:w-12" />
        </button>
      </div>

      <p className="mx-auto mt-7 max-w-2xl text-sm font-light leading-relaxed text-[#fff7f2]/75">
        Not rushed. Not one-size-fits-all. Just brows shaped around your face,
        your comfort, and your confidence.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
      >
        <button
          className="flex cursor-pointer flex-col items-center gap-2"
          onClick={(e) => scrollToSection(e, 'about')}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary/75">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <ChevronDown className="h-4 w-4 text-primary/75" />
          </motion.div>
        </button>
      </motion.div>
    </>
  );
};

export default HeroScrollActions;
