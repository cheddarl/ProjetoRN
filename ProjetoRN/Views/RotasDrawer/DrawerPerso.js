import React from 'react';
import { Text, View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import estiloRotasDrawer from './estiloRotasDrawer';

function DrawerPerso(props) {
    return (
        <DrawerContentScrollView {...props}>

            <View style={estiloRotasDrawer.fotoContainer}>
                <Image 
                    style={estiloRotasDrawer.foto}
                    source={require('../../assets/Umaru.jpg')}
                />
                <Text style={estiloRotasDrawer.nome}>Raíssa Benini de Laia</Text>
            </View>

            <DrawerItemList {...props}/>

        </DrawerContentScrollView>
    );
}

export default DrawerPerso;