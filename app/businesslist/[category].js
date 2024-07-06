import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { collection, getDocs, query,where } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import BusinessListCard from '../../components/BusinessList/BusinessListCard';
import { Colors } from '../../constants/Colors';

const BusinessListByCategory = () => {
  
    const navigation = useNavigation();
    const {category} = useLocalSearchParams();
    const [businessList,setBusinessList]=useState([])

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTitle:category
        });
        const getBusiessList=async()=>{
            setBusinessList([]);
            const q = query(collection(db,'BusinessList'),where("category",'==',category))
            const querySnapShot = await getDocs(q);
    
            querySnapShot.forEach(doc=>{
                setBusinessList(prev=>[...prev,doc.data()])
            })
        }
        getBusiessList();
    },[])

    return (
    <View>
      {businessList?.length >0 ? <FlatList
        data={businessList}
        renderItem={({item,index})=>(
            <BusinessListCard 
                business={item}
                key={index}
            />
        )}
      />:
        <Text style={{ 
            fontSize:20,
            fontFamily:'poppins-bold',
            color:Colors.GRAY,
            textAlign:'center',
            marginTop:'50%'
         }}>
            No Business Found!
        </Text>
      }
    </View>
  )
}

export default BusinessListByCategory