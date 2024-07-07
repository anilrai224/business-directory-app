import { View, Text, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import {Colors} from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
  const {user}=useUser()
  return (
    <SafeAreaView
      style={{ padding:20,paddingRight:20,backgroundColor:Colors.PRIMARY,borderBottomLeftRadius:20,borderBottomRightRadius:20 }}
    >
      <View style={{ 
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
       }}>
        <Image source={{ uri:user?.imageUrl }}
          style={{ 
            width:45,
            height:45,
            borderRadius:99,
           }}
        />
        <View>
          <Text style={{ color:'#fff' }}>Welcome,</Text>
          <Text style={{ color:'#fff',fontSize:19,fontFamily:'poppins-medium' }}>{user?.fullName}</Text>
        </View>
      </View>
      <View style={{ 
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        backgroundColor:'#fff',
        padding:10,
        marginTop:10,
        borderRadius:8,
       }}>
        <Ionicons name="search" size={24} color={Colors.PRIMARY} style={{}}/>
        <TextInput placeholderTextColor='#000' style={{ width:'100%',fontFamily:'poppins',fontSize:16, }} placeholder='Search...'/>
      </View>
    </SafeAreaView>
  )
}

export default Header