import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';


const NavLinks = ({ navigation, text = '', routeName }) => {
    return (
        <Spacer>
        <TouchableOpacity 
            onPress={()=> {
            navigation.navigate(routeName);
            }}
        >
            {(text != '') ? <Text style={styles.link}>{text}</Text> : null}
        </TouchableOpacity>
      </Spacer>
    );
};


const styles = StyleSheet.create({
    link: {
        color: "blue"
    },
    
  });


export default withNavigation(NavLinks);