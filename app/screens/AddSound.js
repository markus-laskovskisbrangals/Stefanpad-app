import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import {} from '../screens/Main';

export default function App(){


    return(
        <View style = {styles.container}>
           <StatusBar backgroundColor='#87119e' style = 'light-content' />
           <Text style = {styles.label}>Sound name:</Text>
            <TextInput style = {styles.input}/>
            <Text style = {styles.label}>Sound URL:</Text>
            <TextInput style = {styles.input}/>
            <Button 
                 title='Create'
                 color='#a317bf'
                 onPress={() => Alert.alert('Create new soundboard', 'You can not create new soundpads yet.')}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3d3d3d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        color: '#000',
        backgroundColor: '#fff',
        width: '95%',
        height: 40,
        alignSelf: 'center',
        marginBottom: 5,
        borderColor: '#a317bf',
        borderWidth: 2,
        padding: 5,
        borderRadius: 10,
    },
    label:{
        color: '#fff',
        fontSize: 16,
        marginLeft: '2.5%',
        alignSelf: 'flex-start',
    },
});