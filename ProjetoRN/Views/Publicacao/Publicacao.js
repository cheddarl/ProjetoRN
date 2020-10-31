import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import estiloPublicacao from './estiloPublicacao';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Quadro from './Quadro';

function Publicacao() {
  return (
      <ScrollView>
        <View style={estiloPublicacao.container}>
        {Quadro('Brigadeiro', 'brig.jpg')} 
        <View style={estiloPublicacao.espaco}></View>
        {Quadro('Coxinha', 'coxinha.jpg')} 
        <View style={estiloPublicacao.espaco}></View>
        </View>
      </ScrollView>
  );
} 
export default Publicacao;