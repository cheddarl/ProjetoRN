import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import estiloPerfil from './estiloPerfil';
import { FontAwesome5 } from '@expo/vector-icons';
import { AlunoFB } from '../../firebase/alunoFB';
import AlunoLista from '../../alunoLista/AlunoLista';
import { MaterialIcons } from '@expo/vector-icons';
import RotasStack from '../rotasStack/RotasStack'

function Perfil({ navigation }) {

    const [usuarios, setUsuarios] = useState([]);

    const alunoFB = new AlunoFB();

    useEffect(() => {
        alunoFB.pegarAluno()
            .orderBy('nome')
            .onSnapshot((query) => {
                const items = [];
                query.forEach((doc) => {
                    items.push({...doc.data(), id: doc.id});
                });
                setUsuarios(items);
            });
    }, []);

     const voltar = () => {
        navigation.navigate('Inicial')
    }

    const adicionar = () => {
        navigation.navigate('Aluno', {perfil: {}, operacao: 'adicionar'})
    }

    const editar = (perfil) => {
        navigation.navigate('Aluno', {perfil: perfil, operacao: 'editar'})
    }

  return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={estiloPerfil.container}>
            <View style={estiloPerfil.borda}>
             
                <View style={estiloPerfil.bordaTit}>
                    <Text style={estiloPerfil.titulo}> Perfil </Text>
                </View>
                <TouchableOpacity onPress={adicionar} style={estiloPerfil.addS}>
                    <MaterialIcons name="add" size={29} color="#F08080" />
                </TouchableOpacity>
             
                <br />

                <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(perfil) => perfil.id}
                data={usuarios}
                renderItem={({perfil}) => <AlunoLista data={perfil} detalhe={() => editar(perfil)}/>}
                />
            </View>
        </View>
      </ScrollView>
  );
} // Ganbareeeeeeeeeeeeeeeeeeee
export default Perfil;

