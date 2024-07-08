import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { getDocs, query, collection } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import CategroyItem from './CategroyItem'
import { useRouter } from 'expo-router'

const Category = ({explore = false,onCategorySelect}) => {

    const [categoryList, setCategoryList] = useState([])
    const router = useRouter()
    useEffect(() => {
        setCategoryList([])
        const getCategoryList = async () => {
            const q = query(collection(db, 'Category'));
            const querySnapShot = await getDocs(q);

            querySnapShot.forEach(doc => {
                setCategoryList(prev => [...prev, doc.data()])
            })
        }
        getCategoryList()
    }, [])
    const onCategoryPressHandler =(item)=>{
        if(!explore){
            router.push('/businesslist/'+item?.name)
        }else{
            onCategorySelect(item.name)
        }
    }
    return (
        <View>
            {!explore && <View style={{ padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <Text style=
                    {{ marginTop: 10, fontSize: 20, fontFamily: 'poppins-bold' }}
                >Category
                </Text>
                <Text style={{ color: Colors.PRIMARY, fontFamily: 'poppins-medium' }}>View All</Text>
            </View>}
            <FlatList
                style={{ marginLeft:20 }}
                showsHorizontalScrollIndicator={false}
                data={categoryList}
                horizontal={true}
                renderItem={({ item, index }) => (
                    <CategroyItem key={index} category={item} 
                        onCategoryPress={(category)=>onCategoryPressHandler(item)}
                    />
                )}
            />
        </View>
    )
}

export default Category