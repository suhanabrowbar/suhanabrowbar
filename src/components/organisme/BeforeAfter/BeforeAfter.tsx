'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

import BeforImage from '../../../../public/images/before.webp';
import AfterImage from '../../../../public/images/after.webp';

const clamp = (v: number, min = 0, max = 100) =>
  Math.min(max, Math.max(min, v));

const BeforeAfter = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);

  const updateSlider = (clientX: number) => {
    if (!rectRef.current) return;
    const x = clientX - rectRef.current.left;
    const percent = clamp((x / rectRef.current.width) * 100);

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setSliderPos(percent));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    rectRef.current = e.currentTarget.getBoundingClientRect();
    updateSlider(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    updateSlider(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

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
            Real Brows|
            <span className="italic text-primary">Real Results</span>
          </h2>

          <p className="mt-6 text-lg font-light leading-relaxed text-[#6f625b]">
            See how gentle, precise threading refines the brows without
            over-shaping — always tailored to your natural features, comfort,
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
            <div
              ref={containerRef}
              className="relative aspect-square w-full cursor-ew-resize select-none touch-none"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              role="img"
              aria-label="Before and after brow results comparison"
            >
              <Image
                src={BeforImage}
                alt="Before eyebrow threading and shaping"
                fill
                className="object-cover"
                priority={false}
              />

              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <Image
                  src={AfterImage}
                  alt="After eyebrow threading and shaping"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#3b2c28] backdrop-blur-sm">
                After
              </div>

              <div className="absolute right-4 top-4 rounded-full bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#3b2c28] backdrop-blur-sm">
                Before
              </div>

              <div
                className="absolute top-0 h-full w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(92,52,32,0.15)]"
                style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
              />
              <div
                className="absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white shadow-lg"
                style={{
                  left: `${sliderPos}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="flex items-center gap-1">
                  <span className="h-4 w-0.5 rounded-full bg-[#5c3420]/70" />
                  <span className="h-4 w-0.5 rounded-full bg-[#5c3420]/70" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-[#7c6d66] sm:text-base">
            Every result is shaped with care, patience, and attention to what
            suits your face best — never rushed, never one-shape-fits-all.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => setSliderPos(100)}
            className="rounded-xl border cursor-pointer border-[#e8ddd6] px-6 py-3 text-sm font-medium text-[#6f625b] transition hover:bg-[#f8f3ef]"
          >
            View After
          </button>
          <button
            onClick={() => setSliderPos(0)}
            className="rounded-xl bg-primary cursor-pointer px-6 py-3 text-sm font-medium text-white transition hover:bg-[#a96d5d]"
          >
            View Before
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;