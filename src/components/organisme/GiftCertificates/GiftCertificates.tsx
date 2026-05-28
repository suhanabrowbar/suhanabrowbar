import { giftPackages } from './data';
import { Gift } from 'lucide-react';

const GiftCertificates = () => (
  <section id="gifts" className="bg-white py-24">
    <div className="container mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#eadfd8] bg-white px-4 py-2 text-sm text-[#7a5c4d] shadow-sm">
          <Gift className="h-4 w-4 text-[#b87968]" />
          Gift Packages
        </div>

        <h2 className="mt-6 font-serif text-4xl tracking-tight text-[#3d2315] sm:text-5xl">
          Give the Gift of{' '}
          <span className="italic text-[#b87968] font-bold">
            Beautiful Brows
          </span>
        </h2>

        <p className="mt-4 text-lg leading-8 text-stone-600">
          A thoughtful way to treat someone to expert brow care, polished
          results, and a little extra confidence.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {giftPackages.map((pkg) => (
          <div
            key={pkg.title}
            className={`group rounded-3xl border border-[#efe7e2] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${pkg.bgColor}`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Gift className="h-6 w-6 text-[#b87968]" />
            </div>

            <h3 className="mt-6 font-serif text-2xl text-[#3d2315]">
              {pkg.title}
            </h3>

            <p className="mt-3 text-3xl font-semibold tracking-tight text-[#5c3420]">
              {pkg.price}
            </p>

            <p className="mt-4 leading-7 text-stone-600">{pkg.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GiftCertificates;
