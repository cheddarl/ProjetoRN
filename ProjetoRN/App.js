import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Principal from './Views/Principal/Principal';
import Publicacao from './Views/Publicacao/Publicacao';
import Perfil from './Views/Perfil/Perfil';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import RotasDrawer from './Views/RotasDrawer/RotasDrawer';

export default function App() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
            <Principal /> 
        </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F08080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    alignSelf: 'baseline',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});

//  Não consegui fazer o drawer, encontrar solução