import { View, Text, FlatList,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Colors} from '../../constants/Colors'
import { useRouter } from 'expo-router'

const MenuList = () => {
    const menuList = [
        {
            id:1,
            name:'Add Business',
            icon:require('../../assets/images/add.png'),
            path:"/business/add-business"
        },
        {
            id:2,
            name:'My Business',
            icon:require('../../assets/images/business-and-trade.png'),
            path:""
        },
        {
            id:3,
            name:'Share App',
            icon:require('../../assets/images/share_1.png'),
            path:""
        },
        {
            id:4,
            name:'Logout',
            icon:require('../../assets/images/logout.png'),
            path:""
        },
    ]
    const router = useRouter()
    const onMenuClick = (item)=>{
        router.push(`${item.path}`)
    }
  return (
    <View style={{ 
        marginTop:50
     }}>
      <FlatList
        numColumns={2}
        data={menuList}
        renderItem={({item,index})=>(
            <TouchableOpacity onPress={()=>onMenuClick(item)} style={{ 
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                gap:10,
                flex:1,
                padding:10,
                borderRadius:10,
                borderWidth:1,
                margin:10,
                backgroundColor:'white',
                borderColor:Colors.PRIMARY
             }}>
                <Image source={item.icon} style={{height:50,width:50}}/>
                <Text style={{ fontFamily:'poppins-medium',fontSize:16,flex:1 }}>{item?.name}</Text>
            </TouchableOpacity>
        )}
      />
      <Text style={{ fontFamily:'poppins',textAlign:'center',marginTop:50,color:Colors.GRAY }}>Developed by Anil Rai @ 2024</Text>
    </View>
  )
}

export default MenuList