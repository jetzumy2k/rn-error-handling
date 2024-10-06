import React, { useState, useContext } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import FormElements from '../components/FormElements';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [ email, setEmail] = useState('');
  const [ password, setPasword] = useState('');
  console.log('state: ', state);

  const submitData = () => {
    postdata = {
      email: email, 
      password: password

    }
    // console.log('email: ', email);
    // console.log('password: ', password);
    console.log('submitted!');
      signup(postdata,  () => {
      console.log('triggers the call back!')
    });
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
      autoCapitalize: "none",
      autoCorrect: false,
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
      value: 'Already have an account?',
      style: {fontSize: 15, marginTop:10}
    },
    {
      id: 'paragraph_2',
      type: 'paragraph',
      value: 'Sign in instead.',
      style: {fontSize: 15, marginTop:10}
    }
  ];

  return (
    <View style={styles.container}>
      <FormElements 
        formTitle="Sign Up for Tracker"
        inputFields={formFields}
        errorMessage={state.errorMessage}
      />
      
      <Button 
        title="Go to Signin" 
        onPress={() => {navigation.navigate('Signin')}}
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignContent: "center"
  },
  
});

export default SignupScreen;
