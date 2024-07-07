import {ScrollView } from 'react-native'
import React from 'react'
import Headers from '../../components/Home/Headers'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import PopularBusiness from '../../components/Home/PopularBusiness'

const Home = () => {
  return (
      <ScrollView>
        <Headers />
        <Slider />
        <Category />
        <PopularBusiness />
      </ScrollView>
  )
}

export default Home