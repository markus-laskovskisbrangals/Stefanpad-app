import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native';
import Kid from '../assets/sounds/blyat.mp3';

export default function App({navigation}){
    const [pads, newPad] = useState([
        {name: 'Minecraft', author: 'John Cena', soundName:'Kid', source: {Kid}, key: '1'},
        {name: 'Roblox', author: 'John Cena',soundName:'Oof', key: '2'},
        {name: 'Claps', author: 'John Wick',soundName:'Just a random noise', key: '4'},
        {name: 'Memes', author: 'John',soundName:'Just a random noise', key: '5'},
        {name: 'Monster sounds', author: 'g2',soundName:'Just a random noise', key: '6'},
        {name: 'Animals', author: 'G2',soundName:'Just a random noise', key: '7'},
        {name: 'Mario', author: 'Gustavs',soundName:'Just a random noise', key: '8'},
        {name: 'Video games', author: 'Markus',soundName:'Just a random noise', key: '9'},
        {name: 'MLG', author: 'Emīls',soundName:'Just a random noise', key: '10'},
        {name: 'Cartoons', author: 'Ričards',soundName:'Just a random noise', key: '11'},
        {name: 'NSFW', author: 'Kristiāns',soundName:'Just a random noise', key: '12'},
        {name: 'My best sound collection', author: 'Baiba',soundName:'Just a random noise', key: '13'},
        {name: '90s sounds', author: 'Rick Ashley',soundName:'Just a random noise', key: '14'},
        {name: 'Jokes', author: 'Me',soundName:'Just a random noise', key: '15'},
        {name: 'Do not ope', author: 'Doesnt matter',soundName:'Just a random noise', key: '16'}
    ]);

    return(
        <View style = {styles.container}>
           <StatusBar backgroundColor='#87119e' style = 'light-content' />
            <ScrollView>
                <FlatList
                    data={pads}
                    renderItem={({item})=>(
                        <TouchableOpacity style={styles.sounPad} onPress={()=> navigation.navigate('Pad', item)}>
                            <Text style={styles.padText}>{item.name}</Text>
                            <Text style={styles.padAuthor}>By {item.author}</Text>
                           <TouchableOpacity 
                           style={styles.removeButton}
                           onPress={()=> Alert.alert('Delete Button', 'You can not delete items yet.')}
                           ><Text style = {styles.removeButtonText}>X</Text></TouchableOpacity>
                        </TouchableOpacity>
                    )}
                />
                </ScrollView>
            <TouchableOpacity style = {styles.Button} onPress={()=>navigation.navigate('Add')}><Text style = {styles.add}>+</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3d3d3d',
    },
    statusBar: {
        backgroundColor: '#87119e',
        color: '#fff',
    },
    header: {
        height: 50,
        marginTop: 24,
        backgroundColor: '#a317bf',
        color: '#fff',
        width: '100%',
    },
    title: {
        fontSize: 20,
        color: '#fff',
        left: 10,
        top: 10,
    },
    Button: {
        alignSelf: 'flex-end',
        bottom: 25,
        right: 25,
        borderRadius: 75,
        backgroundColor: '#a317bf',
        width: 70,
        height: 70,
    },
    add: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 10,
    },
    help: {
        backgroundColor: '#a317bf',
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 13,
        bottom: 8,
    },
    helpText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    sounPad: {
        width: '100%',
        borderBottomColor: '#636363',
        borderBottomWidth: 2,
        height: 50,
    },
    padText:{
        color: '#fff',
        fontSize: 18,
        left: 10
    },
    padAuthor: {
        color: '#d1d1d1',
        fontSize: 14,
        left: 10
    },
    removeButton: {
        backgroundColor: '#831299',
        alignSelf: 'flex-end',
        top: 0,
        position: 'absolute',
        padding: 14
    },
    removeButtonText: {
        color: '#fff'
    },
});