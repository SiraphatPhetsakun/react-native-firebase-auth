import React, {useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Text, Button } from 'react-native';

import auth from '@react-native-firebase/auth';



const Home = ({navigation}) => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const SignOutUser = () => {
    console.log(auth.GoogleAuthProvider)
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  }

  if (initializing) return null;

  if (!user) {
    return (
      <SafeAreaView style={styles.root}>
        <Button title='Login' onPress={()=> navigation.navigate('Login')} />
        <Button title='signin' onPress={()=> navigation.navigate('Signin')} />
        <Button title='FireStoreScreen' onPress={()=> navigation.navigate('FireStore')} />
        <Button title='GoogleScreen' onPress={()=> navigation.navigate('GoogleSignIn')} />
        <Button title='FaceBookScreen' onPress={()=> navigation.navigate('FaceBookSignIn')} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text>Welcome {user.email}</Text>
      <Button title='Logout' onPress={SignOutUser} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root : {
    flex : 1,
  }
});

export default Home;
