import { View, Text, FlatList } from 'react-native'
import React from 'react'
import BusinessListCard from './BusinessListCard'

const ExploreBusinessList = ({businesslist}) => {
  return (
    <View>
      <FlatList
        data={businesslist}
        renderItem={({item,index})=>(
            <BusinessListCard business={item} key={index}/>
        )}
      />
    </View>
  )
}

export default ExploreBusinessList