import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#87119e' style = 'light-content' />
      <Image style={styles.logo} source={require('../assets/stefanpadlogo.png')}/>
      <Text style={styles.description}>An easy to use mobile app where you can make your own soundboard and share it with others.</Text>
      <Button
        style={styles.button}
        title='Get started'
        color='#a317bf'
        onPress={()=> navigation.navigate('Stefanpad')}
      />
      <StatusBar style="auto" />
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
  description: {
    top: '-10%',
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
    width: '95%',
  },
  button:{
    marginTop: 15,
    padding: 20,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    top: '-10%'
  }
});
