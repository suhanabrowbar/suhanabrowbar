'use client';

import { useEffect, useMemo, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

// Replace with real brand images
import BrowThreading1 from '../../../../public/images/Gallery 1.webp';
import BrowShaping1 from '../../../../public/images/Gallery 2.webp';
import BrowTint1 from '../../../../public/images/Gallery 3.webp';
import Studio1 from '../../../../public/images/Gallery 4.webp';
import BrowThreading2 from '../../../../public/images/Gallery 4.webp';
import BrowShaping2 from '../../../../public/images/Gallery 4.webp';

interface GalleryItem {
  id: number;
  image: StaticImageData;
  title: string;
  category: 'Threading' | 'Brow Shaping' | 'Tinting' | 'Studio';
  span?: string;
}

const categories = [
  'All',
  'Threading',
  'Brow Shaping',
  'Tinting',
  'Studio',
] as const;

const galleryData: GalleryItem[] = [
  {
    id: 1,
    image: BrowThreading1,
    title: 'Precision Brow Threading',
    category: 'Threading',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    image: BrowShaping1,
    title: 'Soft, Natural Brow Shaping',
    category: 'Brow Shaping',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    image: BrowTint1,
    title: 'Defined Brow Tinting',
    category: 'Tinting',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 4,
    image: Studio1,
    title: 'Inside Suhana Brow Bar',
    category: 'Studio',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 5,
    image: BrowThreading2,
    title: 'Clean Brow Finish',
    category: 'Threading',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 6,
    image: BrowShaping2,
    title: 'Freshly Shaped Brows',
    category: 'Brow Shaping',
    span: 'md:col-span-1 md:row-span-1',
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const filteredData = useMemo(() => {
    if (activeCategory === 'All') return galleryData;
    return galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const closeLightbox = () => setSelectedImageIndex(null);
  const openLightbox = (index: number) => setSelectedImageIndex(index);

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => ((prev ?? 0) + 1) % filteredData.length);
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      (prev) => ((prev ?? 0) - 1 + filteredData.length) % filteredData.length,
    );
  };

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImageIndex, filteredData.length]);

  useEffect(() => {
    setSelectedImageIndex(null);
  }, [activeCategory]);

  return (
    <section id="gallery" className="bg-[#fdfaf8] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">
              Gallery
            </span>
            <h2 className="mt-4 font-serif text-4xl font-light text-primary sm:text-5xl lg:text-6xl">
              A Closer Look at Our Work
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#6f625b] sm:text-lg">
              From clean threading to softly defined shaping, every detail is
              done with care, precision, and a focus on what suits you best.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full cursor-pointer border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                    isActive
                      ? 'border-primary bg-primary text-white'
                      : 'border-[#e7d8cf] bg-white text-[#6f625b] hover:border-primary/40 hover:bg-[#faf5f1]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-4 md:auto-rows-[260px]">
          {filteredData.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openLightbox(index)}
              className={`group cursor-pointer relative w-full overflow-hidden rounded-4xl border border-[#eee3dc] bg-white text-left shadow-[0_12px_30px_rgba(61,35,21,0.05)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(61,35,21,0.08)]
              aspect-4/5 sm:aspect-3/4 md:aspect-auto md:h-full ${item.span ?? ''}`}
              aria-label={`Open image: ${item.title}`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-[#3b2c28]/55 via-[#3b2c28]/10 to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f7e8dc]">
                  {item.category}
                </span>
                <h3 className="font-serif text-2xl font-light leading-tight text-white sm:text-3xl">
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-[rgba(59,44,40,0.82)] px-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute cursor-pointer right-5 top-5 z-110 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 z-110 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20 md:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute cursor-pointer right-4 z-110 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20 md:right-8"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="relative h-[70vh] w-full max-w-5xl overflow-hidden rounded-4xl bg-[#f8f3ef] shadow-[0_30px_80px_rgba(0,0,0,0.22)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredData[selectedImageIndex].image}
              alt={filteredData[selectedImageIndex].title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 92vw, 80vw"
              priority
            />

            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#3b2c28]/72 to-transparent px-6 pb-6 pt-16">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f7e8dc]">
                {filteredData[selectedImageIndex].category}
              </span>
              <h3 className="mt-2 font-serif text-2xl font-light text-white sm:text-3xl">
                {filteredData[selectedImageIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
