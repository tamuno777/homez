import React from 'react'
import Intro from '../sections/intro'
import Form from '../sections/form'
import Offer from '../sections/offer'
import Owners from '../sections/owners'
import Properties from '../sections/properties'
import Searchroom from '../sections/searchroom'

export default function Home() {
  return (
    <div>
      <Intro/>
      <Offer/>
      <Properties/>
      <Searchroom/>
      <Form/>
      <Owners/>
    </div>
  )
}
