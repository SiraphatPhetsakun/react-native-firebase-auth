import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button } from 'react-native';

import { authentication } from '../firebase/firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignInScreen = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const RegisterUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <SafeAreaView style={styles.root}>
      <TextInput placeholder='Email' value={ email } onChangeText={text => setEmail(text)} />
      <TextInput placeholder='Password' value={ password } onChangeText={text => setPassword(text)} secureTextEntry={true} />
      <Button title='Register' onPress={RegisterUser} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root : {
    flex : 1,
  }
});

export default SignInScreen;
