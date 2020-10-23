import React from 'react';
import { Text, View, Image } from 'react-native';
import estiloPublicacao from './estiloPublicacao';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

function Quadro() {
  return (
        
        <View style={estiloPublicacao.opcoes}>
                <View style={estiloPublicacao.iconss}>
                    <AntDesign name="heart" size={34} color="white" />
                    <View style={estiloPublicacao.iconss2}>
                        <MaterialCommunityIcons name="lead-pencil" size={34} color="white" />
                    </View>
                </View>

                <View style={estiloPublicacao.img}> 
                        <Image 
                            style={estiloPublicacao.public}
                            source={require('../../assets/brig.jpg')}>
                        </Image>
                </View>
                <View style={estiloPublicacao.posicao}>
                    <Text style={estiloPublicacao.titulo}>Brigadeiro</Text>
                </View>
        </View>
        
  );
} 
export default Quadro;