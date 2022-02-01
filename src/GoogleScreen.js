import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button, TextInput } from 'react-native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';




const GoogleScreen = ({navigation}) => {

    GoogleSignin.configure({
        webClientId: '759197318625-8enu6im5b5k61fr0e5qjv6ui04m2b498.apps.googleusercontent.com',
      });

    const GoogleSignInAsync = async () => {
          // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const user_sign_in =  auth().signInWithCredential(googleCredential);

        user_sign_in
        .then((user) => {
            console.log(user)
        })
        .catch((err) => {
            console.log(err)
        })
    } 

    return (
        <SafeAreaView style={styles.root}>
            <Button title='Google Sign in' onPress={GoogleSignInAsync} />
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root : {
    flex : 1,
    justifyContent : 'center'
  }
});

export default GoogleScreen;
