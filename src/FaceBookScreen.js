import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button, TextInput } from 'react-native';


import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';


const FaceBookScreen = ({navigation}) => {

    const FaceBookSignInAsync = async () => {
          // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // Sign-in the user with the credential
        const user_sign_in = auth().signInWithCredential(facebookCredential);

        user_sign_in
        .then((user) => {
            console.log(user)
        })
        .catch((err) => {
            console.log('error')
        })
    } 

    return (
        <SafeAreaView style={styles.root}>
            <Button title='FaceBook Sign in' onPress={FaceBookSignInAsync} />
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root : {
    flex : 1,
    justifyContent : 'center'
  }
});

export default FaceBookScreen;
