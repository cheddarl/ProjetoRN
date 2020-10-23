import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Principal from './Views/Principal/Principal';
import Publicacao from './Views/Publicacao/Publicacao';
import Perfil from './Views/Perfil/Perfil';

export default function App() {
  return (
      <View style={styles.container}>
     <Publicacao /> 
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F08080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
