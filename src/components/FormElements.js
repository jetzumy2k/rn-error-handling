import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';


const FormElements = ({ formTitle = 'Form Title', inputFields = [], errorMessage = ''}) => {
    console.log(errorMessage)
    return (
        <View>
            <Spacer><Text h3>{formTitle}</Text></Spacer>
            {(errorMessage != '') ? <Spacer><Text style={styles.error}>{errorMessage}</Text></Spacer> : null}
            <Spacer>
               <FlatList 
                    data={inputFields}
                    keyExtractor={field => field.id}
                    renderItem={({ item }) => {
    
                    if (item.type === 'text') {
                        return (
                            <Input 
                                label={(item.label) ? item.label : 'Add your Label'} 
                                multiline={(item.multiLine) ? true : false} 
                                secureTextEntry={(item.secureTextEntry) ? item.secureTextEntry : false}
                                value={item.value}
                                autoCapitalize={(item.autoCapitalize) ? item.autoCapitalize : "sentences" }
                                autoCorrect={(item.autoCorrect) ? item.autoCorrect : true}
                                onChangeText={(e) => {item.setValue(e)}}
                            />
                        );
                    }
    
                    if (item.type === 'button') {
                      return (
                        <Button 
                            title={(item.label) ? item.label : 'Submit'}
                            onPress={item.onClick}
                            />
                      );
                    }

                    if (item.type === 'paragraph') {
                        return (
                           <Text style={item.style}>{item.value}</Text>
                          );
                    }
    
                }}
               />
            </Spacer>
        </View>
    );
};

const styles = StyleSheet.create({
    error: {
        margin: 15,
        padding:6,
        fontSize: 15,
        borderColor: "red",
        borderWidth: 1,
        backgroundColor: "orange",
        color:"red",
        textAlign: "center"
    
      }
});


export default FormElements;