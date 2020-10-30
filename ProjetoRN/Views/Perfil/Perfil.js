import React from 'react';
import { Text, View, Image } from 'react-native';
import estiloPerfil from './estiloPerfil';
import { FontAwesome5 } from '@expo/vector-icons';

function Perfil() {
  return (
        <View style={estiloPerfil.container}>
            <View style={estiloPerfil.borda}>
                <View style={estiloPerfil.foto}>
                    <Image 
                        style={estiloPerfil.imagem}
                        source={require('../../assets/Umaru.jpg')}>
                    </Image>
                </View>
                <View style={estiloPerfil.texto}>
                    <Text style={estiloPerfil.textoDentro}>Nome: Raíssa Benini de Laia</Text>
                </View>
                <View style={estiloPerfil.texto}>
                    <Text style={estiloPerfil.textoDentro}>Turma: 2ºDSB</Text>
                </View>
                <View style={estiloPerfil.texto}>
                    <Text style={estiloPerfil.textoDentro}>ID: 2</Text>
                </View>
                <FontAwesome5 name="candy-cane" size={24} color="#F0F8FF" style={estiloPerfil.candy} />
            </View>
        </View>
  );
} 
export default Perfil;