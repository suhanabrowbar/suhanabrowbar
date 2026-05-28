'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const ScrollHandler = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const sectionId = searchParams.get('scrollTo');
    if (!sectionId) return;

    const element = document.getElementById(sectionId);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }

    router.replace('/', { scroll: false });
  }, [searchParams, router]);

  return null;
};

export default ScrollHandler;