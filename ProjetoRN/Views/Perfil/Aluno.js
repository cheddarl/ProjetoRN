import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import estiloPerfil from './estiloPerfil';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AlunoFB } from '../../firebase/alunoFB';

function Aluno({ navigation, route }) {

    const [perfil, setPerfil] = useState({});
    const {operacao, setOperacao} = route.params;

    const alunoFb = new AlunoFB();

    useEffect(() => {
            setPerfil(route.params.perfil);
    }, [route.params.perfil]);

    const voltar = () => {
        navigation.navigate('Perfil');
    }

    const salvar = (perfil) => { 
        operacao == 'adicionar' ? alunoFb.adicionarAluno(perfil) : alunoFb.editarAluno(perfil);
        voltar();
    }

    const remover = (perfil) => { 
        alunoFb.removerAluno(perfil);
        voltar();
    }
    
    return (
        <View /*style={estiloItem.container}*/>

            <View /*style={estiloItem.header}*/>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text /*style={estiloItem.texto}*/>Aluno</Text>
                <Text></Text>
            </View>

            <View /*style={estiloItem.formularioContainer}*/>

                <View /*style={estiloItem.campoContainer}*/>
                    <FontAwesome5 name="book" size={26} color="#192f6a" />
                    <TextInput
                        /*style={estiloItem.campo}*/
                        placeholder="Nome"
                        placeholderTextColor="#FFFFFF"
                        onChangeText={nome => setPerfil({...perfil, nome})}
                        value={perfil.nome}
                    />
                </View>

                <View /*style={estiloItem.campoContainer}*/>
                    <FontAwesome5 name="book-reader" size={26} color="#192f6a" />
                    <TextInput
                       /* style={estiloItem.campo} */
                        placeholder="Turma"
                        placeholderTextColor='#FFFFFF'
                        onChangeText={turma => setPerfil({...perfil, turma})}
                        value={perfil.turma}
                    />
                </View>

                <View /*style={estiloItem.campoContainer}*/>
                    <FontAwesome5 name="calendar-alt" size={26} color="#192f6a" />
                    <TextInput
                       /* style={estiloItem.campo} */
                        placeholder="Receitas"
                        placeholderTextColor='#FFFFFF'
                        keyboardType='numeric'
                        maxLength={4}
                        onChangeText={receitas => setPerfil({...perfil, receitas})}
                        value={perfil.receitas ? perfil.receitas.toString() : perfil.receitas}
                    />
                </View>

                <View /*style={estiloItem.botoesContainer}*/>

                    <TouchableOpacity onPress={() => salvar(perfil)} /*style={estiloItem.botaoContainer}*/>
                        <LinearGradient colors={['#4c669f', '#192f6a', '#081a31']} /*style={estiloItem.botao}*/>
                            <MaterialIcons name="save" size={24} color="white" />
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => remover(perfil)} /*style={estiloItem.botaoContainer}*/>
                        <LinearGradient colors={['#4c669f', '#192f6a', '#081a31']} /*style={estiloItem.botao}*/>
                            <MaterialIcons name="delete" size={24} color="white" />
                        </LinearGradient>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}

export default Aluno;
