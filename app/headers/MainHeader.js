import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

export default function Header({navigation}){
    return(
        <View style = {styles.header}>
            <Text style = {styles.title}>Stefanpad</Text>
            <TouchableOpacity style={styles.helpButton} onPress={()=>navigation.navigate('Help')}><Text style={styles.text}>?</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width: Dimensions.get('screen').width,
        backgroundColor: '#a317bf',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    title: {
        alignSelf: 'flex-start',
        color: '#fff',
        fontSize: 21,
        fontWeight: 'bold',
    },
    helpButton:{
        position: 'absolute',
        right: 75,
        padding: 20
    },
    text:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
});