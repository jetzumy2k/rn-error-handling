import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import FormElements from '../components/FormElements';

const SigninScreen = ({ navigation }) => {
  const [ email, setEmail] = useState('');
  const [ password, setPasword] = useState('');

  const submitData = () => {
    console.log('email: ', email);
    console.log('password: ', password);
  };

  const formFields = [
    {
      id: 'inputEmail',
      type: 'text',
      label: 'Email',
      value: email,
      multiLine: false,
      secureTextEntry: false,
      autoCapitalize: "none",
      autoCorrect: false,
      setValue: setEmail,
    },
    {
      id: 'inputPassword',
      type: 'text',
      label: 'Password:',
      value: password,
      multiLine: false,
      secureTextEntry: true,
      setValue: setPasword,
    },
    {
      id: 'submitBtn',
      type: 'button',
      label: 'Sign Up',
      onClick: submitData,
    },
    {
      id: 'paragraph_1',
      type: 'paragraph',
      value: `You don't have an account?`,
      style: {fontSize: 15, marginTop:10}
    },
    {
      id: 'paragraph_2',
      type: 'paragraph',
      value: 'Sign up instead.',
      style: {fontSize: 15, marginTop:10}
    }
  ];

  return (
    <View style={styles.container}>
      <View >
        <FormElements 
          formTitle="Sign In for Tracker"
          inputFields={formFields}
        />
        <Button 
          title="Go to Signup" 
          onPress={() => {navigation.navigate('Signup')}}
        />
      </View>
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({container: {
  flex:1,
  justifyContent:"center",
  alignContent: "center"
}});

export default SigninScreen;
