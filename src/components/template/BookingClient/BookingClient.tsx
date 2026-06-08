'use client';

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  Variants,
} from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Sparkles, Clock, Award } from 'lucide-react';
import { useRef } from 'react';

import ScrollHandler from '@/components/organisme/ScrollHandler/ScrollHandler';
import { scrollToSection } from '@/lib/utils';

import heroImage from '../../../../public/images/Booking 2.webp';
import threadingImage from '../../../../public/images/Booking 3.webp';
import gallery1 from '../../../../public/images/Booking 4.webp';
import gallery2 from '../../../../public/images/Booking 5.webp';
import gallery3 from '../../../../public/images/Booking 6.webp';

const services = [
  { name: 'Eyebrow Threading', price: '$18', duration: '15 min' },

  { name: 'Side Burns', price: '$12', duration: '10 min' },

  { name: 'Upper Lip', price: '$10', duration: '10 min' },

  { name: 'Cheeks', price: '$10', duration: '10 min' },

  { name: 'Chin', price: '$10', duration: '10 min' },

  { name: 'Forehead', price: '$10', duration: '10 min' },

  { name: 'Neck', price: '$10', duration: '10 min' },

  { name: 'Lower Lip', price: '$3', duration: '5 min' },

  { name: 'Nose', price: '$5', duration: '5 min' },

  { name: 'Under Eyes', price: '$8', duration: '10 min' },

  { name: 'Full Face', price: '$40', duration: '30 min' },

  { name: 'Full Face & Neck', price: '$45', duration: '40 min' },

  { name: 'Brow Tinting', price: '$20', duration: '20 min' },

  { name: 'Eyelashes Tinting', price: '$25', duration: '20 min' },

  { name: 'Brow Shaping & Tinting', price: '$35', duration: '35 min' },
];

const bodyWaxingServices = [
  { name: 'Eyebrows', price: '$18', duration: '10–15 min' },

  { name: 'Side Burns', price: '$12', duration: '10 min' },

  { name: 'Upper Lip', price: '$10', duration: '5–10 min' },

  { name: 'Full Face', price: '$40', duration: '25–40 min' },

  { name: 'Underarms', price: '$20', duration: '10–15 min' },

  { name: 'Full Arms', price: '$40', duration: '30–45 min' },

  { name: 'Half Arms', price: '$30', duration: '20–30 min' },

  { name: 'Upper Legs', price: '$35', duration: '25–35 min' },

  { name: 'Lower Legs', price: '$30', duration: '20–30 min' },

  { name: 'Full Legs', price: '$65', duration: '45–60 min' },

  { name: 'Stomach', price: '$30', duration: '15–25 min' },

  { name: 'Back', price: '$40', duration: '25–40 min' },
];

const facialTreatmentServices = [
  { name: 'Deep Cleansing Facial', price: '$100', duration: '60–90 min' },

  { name: 'Teen Facial', price: '$55', duration: '30–45 min' },

  { name: 'Purifying Back Facial', price: '$60', duration: '45–60 min' },

  { name: 'Microdermabrasion Facial', price: '$115', duration: '60–90 min' },

  { name: 'Glow Renewal Peel', price: '$95', duration: '45–60 min' },

  { name: 'Luxe Peel Facial', price: '$130', duration: '60–90 min' },
];

const browAndLashTintingServices = [
  { name: 'Eyebrow Tinting', price: '$20', duration: '15–20 min' },

  { name: 'Eyelash Tinting', price: '$25', duration: '20–30 min' },

  { name: 'Brow Shaping & Tinting', price: '$35', duration: '30–45 min' },
];

const trustPoints = [
  {
    icon: Award,
    title: 'Expert Precision',
    text: 'Brow shaping tailored perfectly to your unique face structure',
  },
  {
    icon: Sparkles,
    title: 'Gentle Technique',
    text: 'Threading method ideal for even the most sensitive skin',
  },
  {
    icon: Clock,
    title: 'Trusted Experience',
    text: 'Years of loyal clients who trust Vee with their signature look',
  },
];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '5000+', label: 'Happy Clients' },
  { value: '4.9★', label: 'Average Rating' },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export default function BookingClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', shouldReduceMotion ? '0%' : '24%'],
  );
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [1, shouldReduceMotion ? 1 : 0],
  );
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', shouldReduceMotion ? '0%' : '-10%'],
  );

  return (
    <section className="bg-linear-to-b from-[#fcf8f5] to-white overflow-x-hidden">
      <ScrollHandler />

      <div
        ref={heroRef}
        className="relative min-h-screen mt-8 flex items-center border-b border-stone-200/50"
      >
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-amber-50 via-transparent to-transparent opacity-60"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  opacity: [0.45, 0.65, 0.45],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-[#9a6a52] font-semibold bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
            >
              <Sparkles size={14} />
              Suhana Brow Bar
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-serif text-6xl lg:text-7xl text-[#5c3420] leading-[1.1] tracking-tight"
            >
              Brows You Can
              <span className="block text-[#9a6a52] italic">Trust.</span>
              <span className="block text-5xl lg:text-6xl mt-2">
                Beauty You Can Feel.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-stone-600 max-w-xl leading-relaxed"
            >
              At Suhana Brow Bar, threading is our signature. Each brow is
              shaped with patience, precision, and care to enhance your natural
              beauty.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.button
                onClick={(e) => scrollToSection(e, 'booking')}
                whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="group cursor-pointer rounded-full bg-primary text-white px-8 py-4 font-semibold flex items-center gap-2 hover:bg-[#a96d5d] transition-all shadow-lg shadow-[#9a6a52]/20"
              >
                Book Your Brows
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </motion.button>

              <motion.button
                onClick={(e) => scrollToSection(e, 'services')}
                whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="rounded-full cursor-pointer border border-stone-300 px-8 py-4 font-semibold text-[#5c3420] hover:bg-stone-100 transition"
              >
                View Services
              </motion.button>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex gap-10 mt-12 flex-wrap"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  className="transition"
                >
                  <p className="text-3xl font-semibold text-[#5c3420]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-stone-500">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            style={{ y: imageY }}
            initial={{
              opacity: 0,
              scale: 0.92,
              rotate: shouldReduceMotion ? 0 : -1.5,
            }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.015 }}
            className="relative h-[520px] rounded-4xl overflow-hidden shadow-2xl"
          >
            <Image
              src={heroImage}
              alt="Perfect eyebrow threading"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={fadeLeft}>
            <motion.div
              whileHover={
                shouldReduceMotion ? {} : { scale: 1.02, rotate: -0.5 }
              }
              transition={{ duration: 0.35 }}
            >
              <Image
                src={threadingImage}
                alt="Threading service"
                className="rounded-3xl shadow-xl"
              />
            </motion.div>
          </motion.div>

          <motion.div variants={fadeRight}>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-5xl text-[#5c3420] leading-tight"
            >
              Our Signature
              <span className="block text-[#9a6a52] italic">Threading</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-stone-600 text-lg leading-relaxed"
            >
              Threading is the heart of Suhana Brow Bar. Using a precise hand
              technique, Vee shapes each brow carefully - removing only what
              needs to go while preserving your natural brow shape.
            </motion.p>

            <motion.div variants={staggerContainer} className="mt-10 space-y-6">
              {trustPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    whileHover={shouldReduceMotion ? {} : { x: 6 }}
                    className="flex gap-4"
                  >
                    <div className="bg-[#f4e7de] p-3 rounded-xl">
                      <Icon className="text-[#7a4b33]" size={22} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#5c3420]">
                        {item.title}
                      </p>
                      <p className="text-stone-600 text-sm">{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.button
              variants={fadeUp}
              onClick={(e) => scrollToSection(e, 'booking')}
              whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              className="mt-10 cursor-pointer inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full hover:bg-[#a96d5d] shadow-lg"
            >
              Book Threading
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        id="services"
        className="bg-white py-28 border-y border-stone-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.h2
            variants={fadeUp}
            className="font-serif text-5xl text-[#5c3420]"
          >
            Beauty Services
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 text-stone-600">
            Precision treatments designed to highlight your natural beauty.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-3 gap-6 mt-14"
          >
            {services.map((service) => (
              <motion.div
                key={service.name}
                variants={fadeUp}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -6,
                        scale: 1.015,
                        boxShadow: '0px 12px 30px rgba(0,0,0,0.08)',
                      }
                }
                className="flex justify-between items-center bg-stone-50 rounded-xl px-6 py-5 transition"
              >
                <div className="text-left">
                  <p className="text-stone-800 font-medium">{service.name}</p>
                  <p className="text-xs text-stone-500">{service.duration}</p>
                </div>

                <span className="font-semibold text-[#5c3420] text-lg">
                  {service.price}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        id="services"
        className="bg-white py-28 border-y border-stone-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.h2
            variants={fadeUp}
            className="font-serif text-5xl text-[#5c3420]"
          >
            Body Waxing Services
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-3 gap-6 mt-14"
          >
            {bodyWaxingServices.map((service) => (
              <motion.div
                key={service.name}
                variants={fadeUp}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -6,
                        scale: 1.015,
                        boxShadow: '0px 12px 30px rgba(0,0,0,0.08)',
                      }
                }
                className="flex justify-between items-center bg-stone-50 rounded-xl px-6 py-5 transition"
              >
                <div className="text-left">
                  <p className="text-stone-800 font-medium">{service.name}</p>
                  <p className="text-xs text-stone-500">{service.duration}</p>
                </div>

                <span className="font-semibold text-[#5c3420] text-lg">
                  {service.price}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        id="services"
        className="bg-white py-28 border-y border-stone-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.h2
            variants={fadeUp}
            className="font-serif text-5xl text-[#5c3420]"
          >
            Facial Treatments Services
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-3 gap-6 mt-14"
          >
            {facialTreatmentServices.map((service) => (
              <motion.div
                key={service.name}
                variants={fadeUp}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -6,
                        scale: 1.015,
                        boxShadow: '0px 12px 30px rgba(0,0,0,0.08)',
                      }
                }
                className="flex justify-between items-center bg-stone-50 rounded-xl px-6 py-5 transition"
              >
                <div className="text-left">
                  <p className="text-stone-800 font-medium">{service.name}</p>
                  <p className="text-xs text-stone-500">{service.duration}</p>
                </div>

                <span className="font-semibold text-[#5c3420] text-lg">
                  {service.price}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        id="services"
        className="bg-white py-28 border-y border-stone-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.h2
            variants={fadeUp}
            className="font-serif text-5xl text-[#5c3420]"
          >
            Brow & Lash Tinting Services
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-3 gap-6 mt-14"
          >
            {browAndLashTintingServices.map((service) => (
              <motion.div
                key={service.name}
                variants={fadeUp}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -6,
                        scale: 1.015,
                        boxShadow: '0px 12px 30px rgba(0,0,0,0.08)',
                      }
                }
                className="flex justify-between items-center bg-stone-50 rounded-xl px-6 py-5 transition"
              >
                <div className="text-left">
                  <p className="text-stone-800 font-medium">{service.name}</p>
                  <p className="text-xs text-stone-500">{service.duration}</p>
                </div>

                <span className="font-semibold text-[#5c3420] text-lg">
                  {service.price}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            className="text-center font-serif text-5xl text-primary"
          >
            Real Brows
            <span className="text-[#5c3420]"> Real Results</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mt-14"
          >
            {[gallery1, gallery2, gallery3].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.04,
                        y: -6,
                      }
                }
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-3xl shadow-lg"
              >
                <Image
                  src={img}
                  alt={`Brow result ${i + 1}`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        id="booking"
        className="bg-white py-28 border-y border-stone-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            className="text-center font-serif text-5xl text-[#5c3420]"
          >
            Book Your Appointment
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-center text-stone-600 mt-4"
          >
            Pick a time that fits your schedule and let us shape your perfect
            brows.
          </motion.p>

          <motion.div
            variants={fadeUp}
            whileHover={shouldReduceMotion ? {} : { y: -4 }}
            className="mt-14 rounded-3xl overflow-hidden border shadow-lg"
          >
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1MWOLbgc9gYFS8PbxCRNLM2-e3wCmcuspyBmWkZrGO2c9XB5_uut26dWiffYTnSfagFzNK5dNU?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="720"
              title="Booking Schedule"
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="bg-[#5c3420] py-28 text-center text-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.05, 1],
                  opacity: [0.12, 0.2, 0.12],
                }
          }
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white,transparent_60%)]" />
        </motion.div>

        <motion.h2 variants={fadeUp} className="relative font-serif text-5xl">
          Ready for Brows You&apos;ll Love?
        </motion.h2>

        <motion.button
          variants={fadeUp}
          onClick={(e) => scrollToSection(e, 'booking')}
          whileHover={shouldReduceMotion ? {} : { scale: 1.06, y: -3 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
          className="relative mt-10 cursor-pointer inline-flex items-center rounded-full bg-[#f7dbc9] px-10 py-4 text-lg font-semibold text-[#5c3420] shadow-xl hover:bg-white transition"
        >
          Claim Your Spot
          <ArrowRight className="ml-3 h-6 w-6" />
        </motion.button>

        <motion.p
          variants={fadeUp}
          className="relative mt-8 text-rose-200/70 text-sm"
        >
          Can&apos;t find your ideal time? Contact us directly.
        </motion.p>
      </motion.div>
    </section>
  );
}
