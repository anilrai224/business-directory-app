import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { TouchableOpacity } from 'react-native'

const CategroyItem = ({category,onCategoryPress}) => {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(category)}>
      <View style={{ padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginRight:15
       }}>
      <Image
        source={{ uri:category.icon }}
        style={{ width:40,height:40 }}
      />
      </View>
      <Text style={{ fontSize:12,fontFamily:'poppins-medium',textAlign:'center',marginTop:5 }}>
        {category.name}
      </Text>
    </TouchableOpacity>
  )
}

export default CategroyItem