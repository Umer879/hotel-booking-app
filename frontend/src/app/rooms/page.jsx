import React from 'react'
import TopHeader from '@/component/TopHeader/Header'
import Navbar from '@/component/Navbar/Navbar'
import Banner from '@/component/Banner/Banner'
import Rooms from '@/component/Rooms/allRooms'
import Subscribe from '@/component/Subscribe/Subscribe'
import Footer from '@/component/Footer/Footer'
const RoomsPage = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <Banner title={'Gallery Boxed'} />
      <Rooms />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default RoomsPage
