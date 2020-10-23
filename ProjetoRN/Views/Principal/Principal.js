import React from 'react';
import { Text, View, Image, Button, Alert } from 'react-native';
import estiloPrincipal from './estiloPrincipal';
import { Entypo } from '@expo/vector-icons';

export default function Principal() {
  return (
    <View style={estiloPrincipal.container}>
        <View style={estiloPrincipal.menu}>
            <Entypo name="menu" size={54} color="white" />
        </View>
        <Image 
            style={estiloPrincipal.imagem}
            source={require('../../assets/log.png')}>
        </Image>

        <View>
            <Text style={estiloPrincipal.subTitulo}>Comunidade de Receitas.</Text>
        </View>
    </View>
  );
} 

