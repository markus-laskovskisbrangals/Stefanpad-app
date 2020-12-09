import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App({navigation}){
    return(
        <View style = {styles.container}>
           <StatusBar backgroundColor='#87119e' style = 'light-content' />
            <Text style = {styles.help}>First steps into Stefanpad</Text>
            <Text style = {styles.subTitle}>How to create your first soundboard?</Text>
            <Text style = {styles.description}>To create your first soundboard you will need to open the main menu 
            and click on the + button where you will need to enter the name of your soundboard and that's about it. </Text>
            <Text style = {styles.subTitle}>How to add your first sound?</Text>
            <Text style = {styles.description}>To add your first sound in the soundboard you will see a Add New Sound button which you will
             need to click on, then enter the URL (YouTube is recommended) and click on Add</Text>
            <Text style = {styles.subTitle}>How to delete a sound or the entire soundboard?</Text>
            <Text style = {styles.description}>It's simple! Just click on the X on the right side of the sound or soundboard and it'll be removed.</Text>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Add')}>
                <Text style={styles.buttonText}>Create new soundboard</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3d3d3d',
    },
    help:{
        fontSize: 21,
        color: '#fff',
        top: 10,
        left: 10,
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#fff',
        fontSize: 16,
        left: 10,
        marginTop: 15,
        fontWeight: 'bold'
    },
    description: {
        color: '#fff',
        left: 10,
        marginRight: 10,
        fontSize: 16,
        marginTop: 15
    },
    button: {
        backgroundColor: '#a317bf',
        padding: 15,
        top: '10%',
        width: '60%',
        alignSelf: 'center',
        borderRadius: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});