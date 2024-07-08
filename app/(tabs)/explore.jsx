import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'
import Category from '../../components/Home/Category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import ExploreBusinessList from '../../components/Explore/ExploreBusinessList'

const Explore = () => {
  const [businesslist,setBusinessList] = useState([])
  const GetBusinessByCategory = async(category)=>{
    setBusinessList([])
    const q = query(collection(db,'BusinessList'),where('category','==',category))
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach(doc=>{
      setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
    })
  }
  return (
    <SafeAreaView style={{
      padding: 20,
    }}>
      <Text style={{
        fontFamily: 'poppins-bold',
        fontSize: 25,
        paddingLeft: 20
      }}>Explore More</Text>
      {/* search bar */}
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        margin: 20,
        borderRadius: 8,
        borderWidth:1,
        borderColor:Colors.PRIMARY
      }}>
        <Ionicons name="search" size={24} color={Colors.PRIMARY} style={{}} />
        <TextInput placeholderTextColor='#000' style={{ width: '100%', fontFamily: 'poppins', fontSize: 16, }} placeholder='Search...' />
      </View>
      {/* Category */}
      <Category explore={true}
        onCategorySelect={(category)=>GetBusinessByCategory(category)}
      />
      {/* Business List */}
      <ExploreBusinessList businesslist={businesslist}/>
    </SafeAreaView>
  )
}

export default Explore