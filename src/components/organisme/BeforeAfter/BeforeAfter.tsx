'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import AfterImage from '../../../../public/images/after.webp';

const BeforeAfter = () => {
  return (
    <section id="results" className="bg-white py-24 sm:py-28">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">
            Brow Results
          </span>

          <h2 className="mt-4 font-serif text-4xl font-light text-[#3b2c28] sm:text-5xl lg:text-6xl">
            Real Brows <span className="italic text-primary">Real Results</span>
          </h2>

          <p className="mt-6 text-lg font-light leading-relaxed text-[#6f625b]">
            See how gentle, precise threading refines the brows without
            over-shaping - always tailored to your natural features, comfort,
            and face shape.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="overflow-hidden rounded-4xl bg-white shadow-[0_24px_60px_rgba(61,35,21,0.10)]">
            <div className="relative aspect-square w-full">
              <Image
                src={AfterImage}
                alt="Eyebrow threading and shaping result"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />

              <div className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#3b2c28] backdrop-blur-sm">
                Result
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-[#7c6d66] sm:text-base">
            Every result is shaped with care, patience, and attention to what
            suits your face best - never rushed, never one-shape-fits-all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
