import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Audio } from 'expo-av';
import { Component } from 'react';

export default function App({navigation}) {

    return(
        <View style = {styles.container}>
        <StatusBar backgroundColor='#87119e' style = 'light-content' />
         <ScrollView>
        <View style={styles.soundContainer}>
            <TouchableOpacity style={styles.play} onPress={() => Alert.alert('Play sound', 'You can not play sounds yet.')}>
                <Text style={styles.buttonText}>P</Text>
            </TouchableOpacity>
            <Text style={styles.soundName}>{navigation.getParam('soundName')}</Text>
            <TouchableOpacity style={styles.delete} onPress={()=> Alert.alert('Delete Button', 'You can not delete items yet.')}>
                <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        <TouchableOpacity style = {styles.addButton} onPress={() => navigation.navigate('AddSound')}>
            <Text style={styles.buttonText}>Add sound</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3d3d3d',
    },
    soundContainer: {
        height: 50,
        borderBottomColor: '#636363',
        borderBottomWidth: 2
    },
    soundName: {
        color: '#fff',
        left: 45,
        top: 12,
        fontSize: 18,
    },
    play: {
        alignSelf: 'flex-start',
        backgroundColor: '#831299',
        padding: 14,
        position: 'absolute'
    },
    delete: {
        alignSelf: 'flex-end',
        backgroundColor: '#831299',
        padding: 14,
        position: 'absolute'
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    addButton: {
        backgroundColor: '#a317bf',
        padding: 10,
        borderRadius: 10,
        width: '35%',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginBottom: 30,
        marginRight: 25
    }
});