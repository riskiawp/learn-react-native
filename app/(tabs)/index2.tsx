import { Image, StyleSheet, Platform, TextInput, View, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import firebaseApp from '@/firebaseConfig';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth as xAuth} from "firebase/auth";

import { FirebaseApp } from 'firebase/app';

export default function HomeScreen() {
  const auth = xAuth(firebaseApp);
  console.log(auth);
  console.log(firebaseApp);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const signUp = async() => {
    try{
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    }catch(error){
      console.error();
      
    }
  }

  const signIn = async() => {
    try{
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    }catch(error){
      console.error();
      
    }
  }
  return (
    <View style = {styles.titleContainer}>
      <TextInput
      value={email}
      onChangeText={setEmail}
      placeholder='email' style = {{
        width: '80%',
        borderWidth: 1,
        borderColor: 'grey',
        height: 56,
        marginBottom: 30,
        paddingHorizontal: 16
      }}/>
      <TextInput
      value={password}
      onChangeText={setPassword}      
      placeholder='password' style={{
        width: '80%',
        borderWidth: 1,
        borderColor: 'grey',
        height: 56,
        paddingHorizontal: 16
      }}/>
      <Button title='Sign Up' onPress={signUp}/>
      <Button title='Sign In' onPress={signIn}/>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    paddingTop: 100,
    gap: 8
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
function getAuth(firebaseApp: FirebaseApp) {
  throw new Error('Function not implemented.');
}

