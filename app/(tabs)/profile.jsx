import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import UserIntro from '../../components/Profile/UserIntro'
import MenuList from '../../components/Profile/MenuList'

const Profile = () => {
  return (
    <SafeAreaView style={{ 
     }}>
      <Text style={{ 
        fontFamily:'poppins-bold',
        fontSize:25,
        paddingLeft:20,
       }}>Profile</Text>
       
       <UserIntro/>

       <MenuList/>
    </SafeAreaView>
  )
}

export default Profile