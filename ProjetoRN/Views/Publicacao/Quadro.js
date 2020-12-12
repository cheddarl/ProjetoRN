import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import estiloPublicacao from './estiloPublicacao';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Receitas from './Receitas';

function Quadro(titulo, img) {
    
  return (
        <View style={estiloPublicacao.opcoes}>
                <View style={estiloPublicacao.iconss}>
                    <TouchableOpacity>
                        <AntDesign name="heart" size={34} color='white' />
                    </TouchableOpacity>
                    <View style={estiloPublicacao.iconss2}>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="lead-pencil" size={34} color="white" />
                        </TouchableOpacity>
                    </View> 
                </View> 

                <View style={estiloPublicacao.img}> 
                        <Image 
                            style={estiloPublicacao.public} 
                            source={require('./receitFotos/' + img)}>
                        </Image>
                </View>
                <View style={estiloPublicacao.posicao}>
                    <Text style={estiloPublicacao.titulo}>{titulo}</Text>
                </View>
        </View>
        
  );
} 
export default Quadro;
// require('../../assets/brig.jpg')