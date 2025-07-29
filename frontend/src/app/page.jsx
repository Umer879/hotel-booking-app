'use client';
import Image from "next/image";
import TopHeader from "@/component/TopHeader/Header";
import Navbar from "@/component/Navbar/Navbar";
import HeroSlider from "@/component/Hero/Hero";
import Services from "@/component/Services/Service";
import Hotel from "@/component/Hotel/Hotel";
import Subscribe from "@/component/Subscribe/Subscribe";
import Spot from "@/component/Spots/Spot";
import ProjectCompletion from "@/component/Completion/Completion";
import Team from "@/component/Team/Team";
import Reviews from "@/component/Reviews/Reviews";
import Newsletter from "@/component/News/News";
import Footer from "@/component/Footer/Footer";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/signup');
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div>
      <TopHeader />
      <Navbar />
      <HeroSlider />
      <Services />
      <Hotel />
      <Subscribe />
      <Spot />
      <ProjectCompletion />
      <Team />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
}
