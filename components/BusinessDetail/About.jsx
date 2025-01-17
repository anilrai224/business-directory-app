import { View, Text } from 'react-native'
import React from 'react'

const About = ({business}) => {
  return (
    <View style={{ 
        padding:20,
        backgroundColor:'white',
        height:'100%'
     }}>
      <Text style={{ 
        fontFamily:'poppins-bold',
        fontSize:20
       }}>About</Text>
       <Text style={{ 
        fontFamily:'poppins',
        lineHeight:25
        }}>{business?.about}</Text>
    </View>
  )
}

export default About