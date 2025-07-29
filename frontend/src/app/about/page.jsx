import React from 'react'
import TopHeader from '@/component/TopHeader/Header'
import Navbar from '@/component/Navbar/Navbar'
import Banner from '@/component/Banner/Banner'
import About from '@/component/About/About'
import AboutCommunity from '@/component/AboutCommuniy/AboutCommunity'
import Reviews from '@/component/Reviews/Reviews'
import Team from '@/component/Team/Team'
import Subscribe from '@/component/Subscribe/Subscribe'
import Footer from '@/component/Footer/Footer'
const AboutPage = () => {
  return (
    <div>
        <TopHeader />
        <Navbar />
      <Banner title={'About Us'} />
      <About />
      <AboutCommunity />
      <Reviews />
      <Team />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default AboutPage

