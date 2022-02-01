import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button, TextInput } from 'react-native';

import { authentication } from '../firebase/firebase-config';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";



const LoginScreen = ({navigation}) => {

    const [isSignIn, setIsSignIn] = useState(false);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignInUser = () => {
        signInWithEmailAndPassword(authentication, email, password)
        .then((res) => {
            console.log(res)
            setIsSignIn(true)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const SignOutUser = () => {
        signOut(authentication)
        .then((res) => {
            setIsSignIn(false)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <SafeAreaView style={styles.root}>
            <TextInput placeholder='Email' value={ email } onChangeText={text => setEmail(text)} />
            <TextInput placeholder='Password' value={ password } onChangeText={text => setPassword(text)} secureTextEntry={true} />
            {
                isSignIn === true ?
                <Button title='SignOut' onPress={SignOutUser} /> :
                <Button title='SignIn' onPress={SignInUser} />
            }
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root : {
    flex : 1,
  }
});

export default LoginScreen;
