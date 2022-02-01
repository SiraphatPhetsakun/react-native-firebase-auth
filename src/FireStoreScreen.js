import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button, TextInput } from 'react-native';

import { authentication, db } from '../firebase/firebase-config';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';



const FireStoreScreen = ({navigation}) => {

    const GetData = async () => {
        const citiesCol = collection(db, 'cities');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        console.log(cityList)
    }

    const SetData = async () => {
        const city = 'aa';

        await setDoc(doc(db, "cities", "Random_id"), {
            city_name: city,
        });
    }

    return (
        <SafeAreaView style={styles.root}>
            <Button title='Get Data' onPress={GetData} />
            <Button title='Set Data' onPress={SetData} />
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root : {
    flex : 1,
    justifyContent : 'center'
  }
});

export default FireStoreScreen;
