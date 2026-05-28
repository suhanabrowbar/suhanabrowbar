'use client';
import { motion } from 'framer-motion';
import { services } from './data';
import { ServiceItem } from './ServiceItem';

const Services = () => {
  const browServices = services.filter(
    (service) => service.category === 'brows',
  );
  const otherServices = services.filter(
    (service) => service.category !== 'brows',
  );

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#FAF9F6] py-24 sm:py-28"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">
            Brow Services
          </span>

          <h3 className="mt-4 font-serif text-4xl font-light leading-tight text-[#3b2c28] sm:text-5xl lg:text-6xl">
            Brows First.
            <span className="italic text-primary"> Always.</span>
          </h3>

          <p className="mt-6 text-lg font-light leading-relaxed text-[#6f625b]">
            Gentle threading and personalized brow care designed to shape,
            define, and enhance your natural features.
          </p>
        </motion.div>

        <div className="mt-20 space-y-24 sm:mt-24 sm:space-y-28">
          {browServices.map((service, index) => (
            <ServiceItem key={service.title} service={service} index={index} />
          ))}
        </div>

        {otherServices.length > 0 && (
          <div className="mt-28 border-t border-[#e8ddd6] pt-20 sm:mt-32">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-2xl text-center"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">
                Additional Beauty Services
              </span>

              <h3 className="mt-4 font-serif text-3xl font-light leading-tight text-[#3b2c28] sm:text-4xl lg:text-5xl">
                A Little Extra Care
              </h3>

              <p className="mt-5 text-base font-light leading-relaxed text-[#6f625b] sm:text-lg">
                Complete your brow appointment with soft, restorative beauty
                treatments designed to leave you feeling refreshed.
              </p>
            </motion.div>

            <div className="mt-16 space-y-24 sm:space-y-28">
              {otherServices.map((service, index) => (
                <ServiceItem
                  key={service.title}
                  service={service}
                  index={index + browServices.length}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
