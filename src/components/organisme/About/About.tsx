'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import aboutUsImage from '../../../../public/images/Where Trust Meets.webp';

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#fdfaf8] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-14 lg:grid-cols-2 lg:gap-x-20">
          <div className="w-full">
            <Image
              src={aboutUsImage}
              alt="Brow artist at Suhana Brow Bar"
              width={500}
              height={620}
              className="aspect-4/5 w-full rounded-4xl object-cover shadow-[0_24px_60px_rgba(61,35,21,0.12)]"
            />
          </div>

          <div className="lg:py-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">
                The Brow Chair Clients Come Back To
              </span>

              <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-[#40261b] sm:text-5xl lg:text-6xl">
                Where Trust Meets
                <br />
                <span className="italic text-primary">Perfect Brows.</span>
              </h2>

              <div className="mt-8 space-y-6 text-lg font-light leading-relaxed text-[#6f625b]">
                <p>
                  Your brows are personal. They frame your face, shape your
                  expression, and can completely change how you feel when you
                  look in the mirror.
                </p>

                <p>
                  That is why Suhana Brow Bar was created around one promise:
                  careful, detailed brow services that feel warm, personal, and
                  trustworthy.
                </p>

                <p>
                  Led by Vee, the focus is precise threading and natural brow
                  shaping. Every appointment starts with your features, your
                  comfort, and the look you love.
                </p>

                <blockquote className="my-8 rounded-2xl border-l-2 border-primary/30 bg-[#f8efe9] px-6 py-5 italic text-[#5b463d]">
                  “Beauty should never feel rushed — it should feel cared for.”
                </blockquote>

                <p>
                  From the first thread to the final touch, the goal is always
                  the same: clean, balanced brows that still feel like you.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="h-px w-10 bg-[#d7c2b8]" />
                <p className="font-serif text-3xl text-primary">Vee</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
