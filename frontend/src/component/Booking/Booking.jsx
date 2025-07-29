import React from 'react'
import Banner from '../Banner/Banner'
import BookingSection from './features'
import BookingForm from './BookingForm'
import Footer from '../Footer/Footer'
const Booking = ({roomId}) => {
  return (
    <div>
      <Banner title={'Room Booking'} />
      <BookingSection roomId={roomId}/>
      <BookingForm />
      <Footer />
    </div>
  )
}

export default Booking
