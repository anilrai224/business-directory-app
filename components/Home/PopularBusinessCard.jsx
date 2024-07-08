import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

const PopularBusinessCard = ({ business }) => {
    const router = useRouter()
    return (
        <TouchableOpacity onPress={()=>router.push('/businessdetail/'+business?.id)} style={{
            marginLeft: 20,
            padding: 10,
            backgroundColor: '#fff',
            borderRadius: 15
        }}>
            <Image source={{ uri: business.imageUrl }}
                style={{ width: 230, height: 130, borderRadius: 15 }}
            />
            <View style={{ marginTop: 7, gap: 5 }}>
                <Text style={{
                    fontFamily: 'poppins-bold',
                    fontSize: 16,
                }}>{business.name}</Text>
                <Text style={{
                    fontFamily: 'poppins',
                    fontSize: 13,
                    color: Colors.GRAY
                }}>{business.address}</Text>
                <View style={{ 
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginTop:5
                 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <Image
                            style={{ width: 15, height: 15 }}
                            source={require('../../assets/images/star.png')}
                        />
                        <Text style={{ fontFamily: 'poppins' }}>4.5 </Text>
                    </View>
                    <Text style={{ 
                        borderRadius:5,
                        fontFamily:'poppins',
                        backgroundColor:Colors.PRIMARY,
                        color:'#fff',
                        padding:5,
                        fontSize:10,
                     }}>{business.category}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PopularBusinessCard