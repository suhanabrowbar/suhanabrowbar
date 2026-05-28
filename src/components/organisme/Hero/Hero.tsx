import Image from 'next/image';
import heroImage from '../../../../public/images/Banner.webp';
import HeroScrollActions from '../HeroScrollActions/HeroScrollActions';

const Hero = () => {
  return (
    <section className="relative flex min-h-[92svh] w-full items-center overflow-hidden bg-[#f6eee8]">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Suhana Brow Bar threading and brow shaping"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#2a1812]/45 via-[#7c4f42]/20 to-[#2a1812]/60" />
        <div className="absolute inset-0 bg-[#f3d9cf]/10 mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(42,24,18,0.32)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-6 py-36 sm:px-8 lg:px-10">
        <div className="max-w-4xl text-center">
          <span className="mb-6 block text-xs font-semibold tracking-[0.38em] uppercase text-[#f8e7df]/90">
            Suhana Brow Bar · Toronto
          </span>

          <h1 className="font-serif text-5xl font-light tracking-tight text-white drop-shadow-sm sm:text-7xl lg:text-8xl">
            Brows You Can Trust.
            <br />
            <span className="mt-4 block font-normal italic text-[#f1c7b7]">
              Beauty You Can Feel.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-[#fff7f2]/90 sm:text-lg">
            At Suhana Brow Bar, threading is our signature. Every brow is shaped
            with patience, precision, and care so your natural beauty feels
            clean, balanced, and beautifully you.
          </p>

          <span className="mt-6 block text-xs tracking-[0.25em] uppercase text-[#f5d8cc]/85">
            Threading • Brow Shaping • Brow Tinting • Waxing • Facials
          </span>
          <HeroScrollActions />
        </div>
      </div>

      <div className="absolute bottom-22 left-10 hidden overflow-hidden lg:block">
        <span className="vertical-text select-none text-[10px] font-bold uppercase tracking-[0.5em] text-[#f5d]/45">
          EST. 2024 — SUHANA BROW BAR
        </span>
      </div>
    </section>
  );
};

export default Hero;
