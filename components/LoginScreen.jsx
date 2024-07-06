import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { StyleSheet } from 'react-native'
import SignInWithOAuth from './SignInWithOAuth'

const LoginScreen = () => {
    
    return (
        <View style={styles.container}>
            <View>
               <Image
                    source={require('../assets/images/react-logo.png')}
                    style={{ borderRadius: 20, borderWidth: 4, borderColor: '#000' }}
                />
            </View>
            <View
                style={{ backgroundColor:'#fff' }}
            >
                <Text style={{ fontSize:30,fontFamily:'poppins-bold',textAlign:'center' }}>Your Ultimate <Text style={{ color:Colors.PRIMARY }}>Community Business Directory</Text> App</Text>
            <Text
                style={{ fontSize:15,textAlign:'center',fontFamily:'poppins',color:Colors.GRAY,marginVertical:15,paddingHorizontal:15 }}
            >Find your Favorite Business near you and post your own business to your community</Text>
            </View>
            <SignInWithOAuth/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    
})

export default LoginScreen