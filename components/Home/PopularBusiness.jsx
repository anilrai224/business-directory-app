import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import PopularBusinessCard from './PopularBusinessCard'

const PopularBusiness = () => {

  const [businessList, setBusinessList] = useState([])
  useEffect(() => {
    setBusinessList([])
    const getBusinessList = async () => {
      const q = query(collection(db, 'BusinessList'), limit(10));
      const querySnapShot = await getDocs(q);

      querySnapShot.forEach(doc => {
        setBusinessList(prev => [...prev, doc.data()])
      })
    }
    getBusinessList()
  }, [])
  return (
    <View>
      <View style={{ padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <Text style=
          {{  marginTop: 10, fontSize: 20, fontFamily: 'poppins-bold' }}
        >Popular Business
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: 'poppins-medium' }}>View All</Text>
      </View>
      <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
          <PopularBusinessCard 
            business={item}
            key={index}
          />
        )}
      />
    </View>
  )
}

export default PopularBusiness