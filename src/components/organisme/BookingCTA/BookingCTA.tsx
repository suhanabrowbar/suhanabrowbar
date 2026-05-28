import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

const bookingHighlights = [
  'Easy Online Booking',
  'Instant Confirmation',
  'Friendly Reminders',
];

const BookingCTA = () => (
  <section id="booking" className="bg-[#5c3420]">
    <div className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          Ready to Book Your Brows?
        </h2>

        <p className="mt-4 text-lg leading-8 text-[#f7dbc9]">
          Booking your brow appointment should feel as smooth as the service
          itself. Reserve online in just a few clicks, with instant confirmation
          and friendly reminders.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {bookingHighlights.map((text) => (
            <div
              key={text}
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-5 text-center backdrop-blur-sm sm:flex-col sm:gap-2"
            >
              <Check
                aria-hidden="true"
                className="h-6 w-6 shrink-0 text-[#f7dbc9]"
              />
              <span className="text-sm font-medium text-white sm:text-base">
                {text}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/booking"
          className="mt-12 inline-flex items-center rounded-full bg-[#f7dbc9] px-8 py-4 text-lg font-semibold text-[#5c3420] shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-1 hover:bg-white"
        >
          Book Your Brows
          <ArrowRight aria-hidden="true" className="ml-2 h-6 w-6" />
        </Link>
      </div>
    </div>
  </section>
);

export default BookingCTA;
