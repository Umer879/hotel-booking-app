import React from 'react'
import TopHeader from '@/component/TopHeader/Header'
import Navbar from '@/component/Navbar/Navbar'
import Banner from '@/component/Banner/Banner'
import Services from '@/component/Services/Service'
import Subscribe from '@/component/Subscribe/Subscribe'
import Footer from '@/component/Footer/Footer'
const ServicePage = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <Banner title={"Our Services"} />
      <Services />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default ServicePage
