import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { testimonials } from './data';

const Testimonials = () => (
  <section id="reviews" className="bg-[#fdf7f3] py-24 sm:py-28">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#5c3420]/70">
          Client Love
        </p>

        <h2 className="font-serif text-3xl font-bold text-primary sm:text-4xl">
          Trusted With Brows for Years
        </h2>

        <p className="mt-4 text-lg leading-8 text-[#5c3420]/80">
          Clients return to Vee because they feel seen, cared for, and confident
          in her hands — especially when it comes to brows.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={`${testimonial.name}-${i}`}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative flex h-full flex-col rounded-4xl border border-[#f7dbc9]/70 bg-white p-8 shadow-[0_18px_45px_rgba(92,52,32,0.08)] transition-shadow duration-300 hover:shadow-[0_22px_55px_rgba(92,52,32,0.11)]"
          >
            <Quote className="pointer-events-none absolute right-6 top-6 h-9 w-9 text-secondary/60" />

            <div role="img" className="mb-5 flex" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, star) => (
                <Star
                  key={star}
                  aria-hidden="true"
                  className="h-4 w-4 fill-primary text-pretty"
                />
              ))}
            </div>

            <blockquote className="grow text-base leading-8 text-stone-600 sm:text-[1.05rem]">
              “{testimonial.quote}”
            </blockquote>

            <footer className="mt-8 border-t border-[#f7dbc9]/60 pt-5">
              <p className="font-semibold text-stone-900">{testimonial.name}</p>
              <p className="mt-1 text-sm text-stone-500">
                {testimonial.service}
              </p>
            </footer>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/booking"
          className="inline-flex items-center rounded-full bg-[#7d4638] px-8 py-4 text-base font-semibold text-white shadow-[0_14px_35px_rgba(92,52,32,0.22)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#8e5546] sm:text-lg"
        >
          Book Your Brows
          <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
        </Link>

        <p className="mt-4 text-sm text-[#5c3420]/70">
          Gentle care, detailed shaping, and brows you can trust.
        </p>
      </div>
    </div>
  </section>
);

export default Testimonials;
