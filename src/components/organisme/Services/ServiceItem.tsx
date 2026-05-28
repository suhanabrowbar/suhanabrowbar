import Image from 'next/image';
import Link from 'next/link';
import { Plus, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceItemProps {
  service: {
    title: string;
    subtitle: string;
    description: string;
    details: {
      title: string;
      items: string[];
    };
    benefits: {
      title: string;
      items: string[];
    };
    image: string;
    ctaLabel: string;
  };
  index: number;
}

export const ServiceItem = ({ service, index }: ServiceItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.75 }}
    className={`flex flex-col items-center gap-14 lg:flex-row lg:gap-16 ${
      index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
    }`}
  >
    <div className="relative lg:w-1/2">
      <Image
        src={service.image}
        alt={service.title}
        width={800}
        height={1000}
        className="aspect-4/5 w-full rounded-4xl object-cover shadow-[0_24px_60px_rgba(61,35,21,0.10)]"
      />

      <span className="absolute -left-3 -top-8 text-6xl font-semibold text-primary/20 sm:-left-6 sm:text-7xl">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>

    <div className="lg:w-1/2">
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
        {service.subtitle}
      </span>

      <h3 className="mt-3 font-serif text-3xl font-light text-[#3b2c28] sm:text-4xl">
        {service.title}
      </h3>

      <p className="mt-4 max-w-xl text-base leading-8 text-[#6f625b] sm:text-lg">
        {service.description}
      </p>

      <div className="mt-10 grid gap-10 border-t border-[#e8ddd6] pt-8 sm:grid-cols-2">
        <div>
          <h4 className="mb-4 font-serif text-lg italic text-[#4a3933]">
            {service.details.title}
          </h4>

          <ul className="space-y-3 text-sm leading-6 text-[#7c6d66]">
            {service.details.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Plus className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-serif text-lg italic text-[#4a3933]">
            {service.benefits.title}
          </h4>

          <ul className="space-y-3 text-sm leading-6 text-[#7c6d66]">
            {service.benefits.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Plus className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <Link href="/booking" className="group inline-flex items-center gap-4">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-primary/25 bg-white/80 transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
            <ArrowUpRight className="h-5 w-5 text-[#6f625b] transition-colors duration-300 group-hover:text-white" />
          </div>

          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3b2c28] transition-colors duration-300 group-hover:text-primary">
            {service.ctaLabel}
          </span>
        </Link>
      </div>
    </div>
  </motion.div>
);
