import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const SignupIn = () => {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();






  return (
    <View>
      <Text>SignupIn</Text>
    </View>
  )
}

export default SignupIn

const styles = StyleSheet.create({})






























import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const auth = getAuth();

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });