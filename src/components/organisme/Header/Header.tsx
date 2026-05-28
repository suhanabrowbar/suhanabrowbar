'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Book Your Glow', href: '/booking' },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      router.push(`/?scrollTo=${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-25 items-center justify-between">
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/logo.webp"
                alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="h-20 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => {
                const isInternal = link.href.startsWith('#');
                if (isInternal) {
                  return (
                    <button
                      key={link.name}
                      onClick={(e) =>
                        scrollToSection(
                          e,
                          link.name.toLowerCase().replace(/\s+/g, ''),
                        )
                      }
                      className="rounded-md font-bold cursor-pointer px-3 py-2 text-sm text-primary hover:bg-stone-100 hover:text-[#5c3420] transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium bg-[#7d4638] text-white shadow-sm hover:bg-[#8e5546] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md bg-stone-100 p-2 text-stone-600 hover:bg-stone-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`
          md:hidden overflow-hidden border-b border-stone-200 bg-white shadow-lg
          transition-all duration-700 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}
        `}
      >
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          {navLinks.map((link) => {
            const isInternal = link.href.startsWith('#');
            if (isInternal) {
              return (
                <button
                  key={link.name}
                  onClick={(e) => {
                    scrollToSection(
                      e,
                      link.name.toLowerCase().replace(/\s+/g, ''),
                    );
                    setIsOpen(false);
                  }}
                  className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-stone-600 hover:bg-stone-100 transition-colors duration-200"
                >
                  {link.name}
                </button>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium bg-[#5c3420] text-white"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;
