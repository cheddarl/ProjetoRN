import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Principal from '../Principal/Principal';
import Perfil from '../Perfil/Perfil';
import Publicacao from '../Publicacao/Publicacao';
import { MaterialIcons } from '@expo/vector-icons';
import DrawerPerso from './DrawerPerso';


const Drawer = createDrawerNavigator();

function RotasDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerPerso {...props} />}>
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Inicial" component={Principal} />
      <Drawer.Screen name="Publicações" component={Publicacao} />
    </Drawer.Navigator>
  );
}

export default RotasDrawer;