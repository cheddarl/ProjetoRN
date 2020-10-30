import React from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import estiloPrincipal from './estiloPrincipal';
import { Entypo } from '@expo/vector-icons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function Principal({ navigation }) {
  return (
    <View style={estiloPrincipal.container}>
       
        <View style={estiloPrincipal.menu}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Entypo name="menu" size={54} color="white" />
            </TouchableOpacity>
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
