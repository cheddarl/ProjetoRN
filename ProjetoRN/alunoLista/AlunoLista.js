import React, { useState } from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import estiloAlunoLista from './estiloAlunoLista';

const AlunoLista = ({data, detalhe}) => {

    const [perfil, setPerfil] = useState(data);

    return (
        <TouchableOpacity /*style={estiloAlunoLista.areaItens}*/ onPress={detalhe}>

                <View style={estiloAlunoLista.texto}>
    <Text style={estiloAlunoLista.textoDentro}>Nome: {perfil.nome}</Text>
                </View>
                <View style={estiloAlunoLista.texto}>
    <Text style={estiloAlunoLista.textoDentro}>Turma: {perfil.turma}</Text>
                </View>
                <View style={estiloAlunoLista.texto}>
    <Text style={estiloAlunoLista.textoDentro}>Receitas Compartilhadas: {perfil.receitas}</Text>
                </View>

                <br /><br />

            
                <Text> </Text>

        </TouchableOpacity>
    );
}

export default AlunoLista;