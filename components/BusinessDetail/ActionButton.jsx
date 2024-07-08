import { View, Text, FlatList,Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const ActionButton = ({business}) => {
    const actionButtonMenu = [
        {
            id:1,
            name:'Call',
            icon:require('../../assets/images/call.png'),
            url:'tel:'+business?.contact
        },
        {
            id:2,
            name:'Location',
            icon:require('../../assets/images/pin.png'),
            url:'https://anilrai224.github.io/portfolio'
        },
        {
            id:3,
            name:'Web',
            icon:require('../../assets/images/web.png'),
            url:'https://www.saidocorporation.com'
        },
        {
            id:4,
            name:'Share',
            icon:require('../../assets/images/share.png'),
            url:'https://www.saidocorporation.com'
        },
    ]
    const onPressHandle = (item)=>{
        
        Linking.openURL(item?.url);
    }
  return (
    <View style={{ 
        backgroundColor:'white',
        padding:20
     }}>
      <FlatList
        data={actionButtonMenu}
        numColumns={4}
        columnWrapperStyle={{ justifyContent:'space-between' }}
        renderItem={({item,index})=>(
            <TouchableOpacity onPress={
                ()=>onPressHandle(item)
            } key={index}>
                <Image
                style={{ 
                    width:50,
                    height:50
                 }}
                source={item?.icon}/>
                <Text style={{ fontFamily:'poppins-medium',textAlign:'center',marginTop:3 }}>{item?.name}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default ActionButton