import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../configs/FirebaseConfig'
import { collection, getDocs, query } from 'firebase/firestore'

const Slider = () => {
  const [sliderList,setSliderList] = useState([])
  useEffect(() => {
    const getSliderList = async () => {
      setSliderList([])
      const q = query(collection(db, 'Slider'))
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc) => {
        setSliderList(prev=>[...prev,doc.data()])
      })
    }
    getSliderList()
  }, [])

  return (
    <View>
      <Text style={{ 
        fontFamily:'poppins-bold',
        fontSize:20,
        padding:20,
        paddingLeft:20,
        paddingTop:20,
        marginBottom:5
       }}>
        #Special for you
      </Text>
      <FlatList
        style={{ paddingLeft:20 }}
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,_})=>(
          <Image
            source={{ uri:item.imageUrl }}
            style={{ 
              width:300,
              height:150,
              borderRadius:15,
              marginRight:15
             }}
          />
        )}
      />
    </View>
  )
}

export default Slider