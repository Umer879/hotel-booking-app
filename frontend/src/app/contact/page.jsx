import React from 'react'
import TopHeader from '@/component/TopHeader/Header'
import Navbar from '@/component/Navbar/Navbar'
import Banner from '@/component/Banner/Banner'
import ContactForm from '@/component/ContactForm/ContactForm'
import Map from '@/component/Map/Map'
import Subscribe from '@/component/Subscribe/Subscribe'
import Footer from '@/component/Footer/Footer'
const ContactPage = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <Banner title={'Contact us'} />
      <ContactForm />
      <Map />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default ContactPage
