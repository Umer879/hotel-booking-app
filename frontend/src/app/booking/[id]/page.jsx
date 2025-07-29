'use client';
import { useParams } from 'next/navigation';
import TopHeader from '@/component/TopHeader/Header';
import Navbar from '@/component/Navbar/Navbar';
import Booking from '@/component/Booking/Booking';

export default function BookingPage() {
  const { id } = useParams();
  console.log("Current id Number:", id);

  return (
    <>
      <TopHeader />
      <Navbar />
      <Booking roomId={id} /> 
    </>
  );
}
