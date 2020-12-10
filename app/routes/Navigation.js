/* Roses are red
   Violets are blue
   Navigation finally works
   But the rest does not */

import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import Welcome from '../screens/Welcome';
import Main from '../screens/Main';
import SoundCreate from '../screens/SoundCreate';
import Header from '../headers/MainHeader';
import Help from '../screens/Help';
import Pad from '../screens/Pad';
import AddSound from '../screens/AddSound';

const Navigation = createStackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            headerShown: false
        }
    },
    Stefanpad: {
        screen: Main,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation = {navigation}/>,
                headerTintColor: '#fff',
                headerStyle: {
                 backgroundColor: '#a317bf'
                }
            }
        }
    },
    Help: {
        screen: Help,
        navigationOptions: {
            title: 'Help',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#a317bf'
            }   
        }
    },
    Add: {
        screen: SoundCreate,
        navigationOptions: {
            title: 'Create new soundpad',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#a317bf'
            }
        }
    },
    Pad: {
        screen: Pad,
        navigationOptions: ({navigation}) => {
            return{
                headerTitle: navigation.getParam('name'),
                headerTintColor: '#fff',
                headerStyle: {
                backgroundColor: '#a317bf'
                 }
            }
        }
    },
    AddSound: {
        screen: AddSound,
        navigationOptions: {
            title: 'Add new sound',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#a317bf'
            }
        }
    },
});

export default createAppContainer(Navigation);