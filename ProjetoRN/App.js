import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Principal from './Views/Principal/Principal';
import Publicacao from './Views/Publicacao/Publicacao';
import Perfil from './Views/Perfil/Perfil';
import { Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Receitas from './Views/Publicacao/Receitas';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
       
    <NavigationContainer>
        
            <Tab.Navigator  screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                     if (route.name === 'Inicial') {
                        iconName = 'home';
                        size = focused ? 36 : 28;
                        color = focused ? '#FF6347' : '#FF7F50';
                    } else if (route.name === 'Publicações') {
                        iconName = 'cake';
                        size = focused ? 36 : 28;
                        color = focused ? '#FF6347' : '#FF7F50';
                    } else if (route.name === 'Perfil') {
                        iconName = 'face-profile';
                        size = focused ? 36 : 28;
                        color = focused ? '#FF6347' : '#FF7F50';
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            })} 
            tabBarOptions={{
	        activeTintColor: '#9C27B0',
	        //inactiveTintColor: '#777',
	        showLabel: false,
            }}
            >
                <Tab.Screen name="Inicial" component={Principal} />
                <Tab.Screen name="Publicações" component={Publicacao} />
                <Tab.Screen name="Perfil" component={Perfil} />
            </Tab.Navigator>
        
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F08080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    alignSelf: 'baseline',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  tabNav: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

//  Não consegui fazer o drawer, encontrar solução