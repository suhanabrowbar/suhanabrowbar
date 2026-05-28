import BookingClient from '@/components/template/BookingClient/BookingClient';

export const dynamic = 'force-dynamic';

export default function BookingPage() {
  return (
    <main className="font-sans antialiased bg-white text-stone-900">
      <BookingClient />
    </main>
  );
}
