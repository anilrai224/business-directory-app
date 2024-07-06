import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Headers from '../../components/Home/Headers'
import { Colors } from '../../constants/Colors'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import PopularBusiness from '../../components/Home/PopularBusiness'

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Headers />
        <Slider />
        <Category />
        <PopularBusiness />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home