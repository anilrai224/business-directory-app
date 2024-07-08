import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import { Colors } from '../../constants/Colors';
import Intro from '../../components/BusinessDetail/Intro';
import ActionButton from '../../components/BusinessDetail/ActionButton';
import About from '../../components/BusinessDetail/About';

const BusinessDetail = () => {
    const { businessid } = useLocalSearchParams();
    const [business, setBusiness] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        GetBusinessDetailById();
    }, []);

    const GetBusinessDetailById = async () => {
        setLoading(true);
        const docRef = doc(db, 'BusinessList', businessid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setBusiness(docSnap.data());
            setLoading(false);
        } else {
            console.log('No such document');
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {loading ? (
                <ActivityIndicator
                    style={{ marginTop: '70%' }}
                    size={'large'}
                    color={Colors.PRIMARY}
                />
            ) : (
                <ScrollView>
                    <Intro business={business} />
                    <ActionButton business={business} />
                    <About business={business} />
                </ScrollView>
            )}
        </View>
    );
};

export default BusinessDetail;
