'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollOrNavigate = (sectionId: string) => {
    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      router.push(`/?scrollTo=${sectionId}`);
    }
  };

  return (
    <footer className="bg-stone-800 text-stone-300">
      <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <Link href="/" className="font-serif text-3xl font-bold text-white">
              Suhana Brow Bar
            </Link>
            <p className="text-stone-400">
              Beauty that feels good, care that comes from the hands of someone
              who knows you.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-stone-200">
                  Navigation
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <button
                      onClick={() => scrollOrNavigate('services')}
                      className="hover:text-white text-left cursor-pointer"
                    >
                      Services
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollOrNavigate('brows')}
                      className="hover:text-white text-left cursor-pointer"
                    >
                      Brows
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollOrNavigate('gifts')}
                      className="hover:text-white text-left cursor-pointer"
                    >
                      Gift Cards
                    </button>
                  </li>
                </ul>
              </div>

              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-stone-200">
                  About Us
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <button
                      onClick={() => scrollOrNavigate('about')}
                      className="hover:text-white text-left cursor-pointer"
                    >
                      Our Method
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollOrNavigate('reviews')}
                      className="hover:text-white text-left cursor-pointer"
                    >
                      Testimonials
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollOrNavigate('booking')}
                      className="hover:text-white text-left cursor-pointer"
                    >
                      Book Now
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8 mt-8 md:mt-0">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-stone-200">
                  Contact
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=123+Beauty+Lane+Toronto+ON"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      123 Beauty Lane
                      <br />
                      Toronto, ON
                    </a>
                  </li>
                  <li>
                    <a href="tel:555-123-4567" className="hover:text-white">
                      (555) 123-4567
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-700 py-8">
        <p className="text-center text-base text-stone-400">
          &copy; {new Date().getFullYear()} Suhana Brow Bar. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
