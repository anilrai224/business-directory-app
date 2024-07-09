import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ToastAndroid, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import {db, storage} from '../../configs/FirebaseConfig'
import { getDocs,collection,query, setDoc,doc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useUser } from '@clerk/clerk-expo';

const AddBusiness = () => {
    const navigation = useNavigation();
    const [image, setImage] = useState(null)
    const [categoryList,setCategoryList] = useState([])
    
    const {user} = useUser()

    const [name,setName] = useState();
    const [address,setAddress] = useState();
    const [contact,setContact] = useState();
    const [website,setWebsite] = useState();
    const [about,setAbout] = useState();
    const[category,setCategory] = useState();

    const [loading,setLoading] = useState(false)

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Add New Business',
            headerShown: true
        })
        getCategoryList()
    }, [])
    const onImagePick = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });
        setImage(result?.assets[0].uri);
    }
    const getCategoryList=async()=>{
        setCategoryList([])
        const q = query(collection(db,'Category'));
        const snapShot = await getDocs(q);

        snapShot.forEach(doc=>{
            setCategoryList(prev=>[...prev,{
                label:(doc.data()).name,
                value:(doc.data()).name
            }])
        })
    }

    const onAddNewBusiness = async()=>{
        setLoading(true)
        const fileName =Date.now().toString()+".jpg";
        const resp = await fetch(image);
        const blob = await resp.blob();

        const imageRef = ref(storage,'business-app/'+fileName);
        uploadBytes(imageRef,blob).then((snapshot)=>{
            console.log('File uploaded...')
        }).then(resp=>{
            getDownloadURL(imageRef).then(async(downloadUrl)=>{
                saveBusinessDetail(downloadUrl)
            })
        })
        setLoading(false)
    }
    const saveBusinessDetail = async(imageUrl)=>{
        await setDoc(doc(db,'BusinessList',Date.now().toString()),{
            name:name,
            address:address,
            contact:contact,
            about:about,
            website:website,
            category:category,
            username:user?.fullName,
            userEamil:user?.primaryEmailAddress?.emailAddress,
            userImage:user?.imageUrl,
            imageUrl:imageUrl,
        })
        setLoading(false)
        ToastAndroid.show('New Business added...',ToastAndroid.BOTTOM)
    }
    return (
        <SafeAreaView>
            <ScrollView style={{ padding: 20 }}>
                <Text style={{
                    fontFamily: 'poppins-bold',
                    fontSize: 25,

                }}>Add New Business</Text>
                <Text style={{
                    fontFamily: 'poppins',
                    color: Colors.GRAY
                }}>Fill all detail in order to add new business</Text>
                <TouchableOpacity onPress={() => onImagePick()} style={{
                    marginTop: 20
                }}>
                    {!image ? <Image source={require('../../assets/images/placeholder.png')}
                        style={{ width: 100, height: 100 }}
                    /> :
                        <Image
                            source={{ uri: image }}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 15
                            }}
                        />}
                </TouchableOpacity>
                <View>
                    <TextInput placeholder='Name'
                    onChangeText={(value)=>setName(value)}
                        placeholderTextColor='#000'
                        style={{
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 5,
                            fontSize: 17,
                            marginTop: 10,
                            backgroundColor: '#fff',
                            borderColor: Colors.PRIMARY,
                            fontFamily: 'poppins'
                        }}
                    />
                    <TextInput placeholder='Address'
                         onChangeText={(value)=>setAddress(value)}
                        placeholderTextColor='#000'
                        style={{
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 5,
                            fontSize: 17,
                            marginTop: 10,
                            backgroundColor: '#fff',
                            borderColor: Colors.PRIMARY,
                            fontFamily: 'poppins'
                        }}
                    />
                    <TextInput placeholder='Contact'
                        onChangeText={(value)=>setContact(value)}
                        placeholderTextColor='#000'
                        style={{
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 5,
                            fontSize: 17,
                            marginTop: 10,
                            backgroundColor: '#fff',
                            borderColor: Colors.PRIMARY,
                            fontFamily: 'poppins'
                        }}
                    />
                    <TextInput placeholder='Website'
                    onChangeText={(value)=>setWebsite(value)}
                        placeholderTextColor='#000'
                        style={{
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 5,
                            fontSize: 17,
                            marginTop: 10,
                            backgroundColor: '#fff',
                            borderColor: Colors.PRIMARY,
                            fontFamily: 'poppins'
                        }}
                    />
                    <TextInput placeholder='About'
                        onChangeText={(value)=>setAbout(value)}
                        multiline
                        numberOfLines={5}
                        placeholderTextColor='#000'
                        style={{
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 5,
                            fontSize: 17,
                            marginTop: 10,
                            backgroundColor: '#fff',
                            borderColor: Colors.PRIMARY,
                            fontFamily: 'poppins',
                            height: 100
                        }}
                    />
                    <View style={{ 
                        borderWidth: 1,
                        borderRadius: 5,
                        backgroundColor: '#fff',
                        borderColor: Colors.PRIMARY,
                        marginTop:10,
                        padding:20,
                        fontSize:18,
                        color:'#fff'
                     }}>
                        <RNPickerSelect
                            onValueChange={(value) =>setCategory(value)}
                            items={categoryList}
                        />
                    </View>
                    <TouchableOpacity
                    disabled={loading}
                        onPress={()=>onAddNewBusiness()}
                    style={{ 
                        padding:15,
                        backgroundColor:Colors.PRIMARY,
                        borderRadius:5,
                        marginTop:20
                     }}>
                        {loading ? <ActivityIndicator
                            size={'large'}
                            color={'#fff'}
                        />:<Text style={{ 
                            textAlign:'center',
                            fontFamily:'poppins-bold',
                            color:'white'
                         }}>Add New Business</Text>}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddBusiness