'use client';

import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

import Image1 from '../../../../public/images/gallery/image1.webp';
import Image2 from '../../../../public/images/gallery/image2.webp';
import Image3 from '../../../../public/images/gallery/image3.webp';
import Image4 from '../../../../public/images/gallery/image4.webp';

interface GalleryItem {
  id: number;
  image: StaticImageData;
  title: string;
  span?: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    image: Image1,
    title: 'Image 1',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    image: Image2,
    title: 'Image 2',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    image: Image3,
    title: 'Image 3',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 4,
    image: Image4,
    title: 'Image 4',
    span: 'md:col-span-2 md:row-span-1',
  },
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const closeLightbox = () => setSelectedImageIndex(null);
  const openLightbox = (index: number) => setSelectedImageIndex(index);

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => ((prev ?? 0) + 1) % galleryData.length);
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      (prev) => ((prev ?? 0) - 1 + galleryData.length) % galleryData.length,
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
  }, [selectedImageIndex]);

  return (
    <section id="gallery" className="bg-[#fdfaf8] py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">
            Gallery
          </span>
          <h2 className="mt-3 font-serif text-3xl font-light text-primary sm:text-5xl lg:text-6xl">
            Our Work
          </h2>
        </div>

        {/* بخش گرید ریسپانسیو شده */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-4 md:auto-rows-[260px]">
          {galleryData.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openLightbox(index)}
              className={`group relative w-full h-64 sm:h-72 md:h-full cursor-pointer overflow-hidden rounded-3xl sm:rounded-4xl border border-[#eee3dc] bg-white shadow-[0_12px_30px_rgba(61,35,21,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(61,35,21,0.08)] ${item.span ?? ''}`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* بخش لایت‌باکس ریسپانسیو شده */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col sm:flex-row items-center justify-center bg-[rgba(59,44,40,0.88)] p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* دکمه بستن */}
          <button
            onClick={closeLightbox}
            className="absolute cursor-pointer right-4 top-4 z-50 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>

          {/* دکمه قبلی */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 sm:left-4 z-50 cursor-pointer rounded-full bg-white/10 p-2 sm:p-3 text-white hover:bg-white/20 transition"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>

          {/* دکمه بعدی */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 sm:right-4 z-50 cursor-pointer rounded-full bg-white/10 p-2 sm:p-3 text-white hover:bg-white/20 transition"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>

          {/* قاب تصویر لایت‌باکس */}
          <div
            className="relative h-[60vh] sm:h-[75vh] w-full max-w-4xl overflow-hidden rounded-2xl sm:rounded-4xl bg-[#f8f3ef] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryData[selectedImageIndex].image}
              alt={galleryData[selectedImageIndex].title}
              fill
              className="object-contain p-2 sm:p-4"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
