import React from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import estiloPrincipal from './estiloPrincipal';
import { Entypo } from '@expo/vector-icons';

function Principal() {
  return (
    <View style={estiloPrincipal.container}>
         
         <View styles={estiloPrincipal.doceVida}> 
            <Text style={estiloPrincipal.txtDoce}>DoceVida</Text> 
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
export default Principal;
// <Entypo name="menu" size={54} color="white" />