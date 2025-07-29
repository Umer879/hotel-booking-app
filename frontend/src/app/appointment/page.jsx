import React from 'react'
import TopHeader from '@/component/TopHeader/Header'
import Navbar from '@/component/Navbar/Navbar'
import Banner from '@/component/Banner/Banner'
import AppointmentForm from '@/component/AppointementForm/AppointementForm'
import Subscribe from '@/component/Subscribe/Subscribe'
import Footer from '@/component/Footer/Footer'
const AppointementPage = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <Banner title={'Make an Appointement'} />
      <AppointmentForm />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default AppointementPage
