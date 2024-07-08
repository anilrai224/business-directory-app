import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Intro = ({ business }) => {
    const router = useRouter()
    return (
        <View>
            <View style={{
                position: 'absolute',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                padding: 20,
                marginTop: 30
            }}>
                <TouchableOpacity onPress={()=>router.back()}>
                    <Ionicons name="arrow-back-circle" size={40} color="white" />
                </TouchableOpacity>
                <Ionicons name="heart-outline" size={40} color='white' />
            </View>
            <Image source={{ uri: business?.imageUrl }}
                style={{ width: '100%', height: 340 }}
            />
            <View style={{ 
                padding:20,
                marginTop:-20,
                backgroundColor:'white',
                borderTopRightRadius:20,
                borderTopLeftRadius:20
             }}>
                <Text style={{ 
                    fontFamily:'poppins-bold',
                    fontSize:26,
                 }}>{business?.name}</Text>
                <Text style={{ 
                    fontFamily:'poppins',
                    fontSize:18
                 }}>{business?.address}</Text>
            </View>
        </View>
    )
}

export default Intro