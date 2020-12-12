import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Principal from '../Views/Principal/Principal';
import Publicacao from '../Views/Publicacao/Publicacao';
import Perfil from '../Views/Perfil/Perfil';
import Aluno from '../Views/Perfil/Aluno';
import Receitas from '../Views/Publicacao/Receitas';

const Stack = createStackNavigator();

const RotasLoginStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Inicial" 
                component={Principal}
                options={
                    {
                        headerShown: false, 
                    }
                }                
            />
            <Stack.Screen 
                name="Publicacao" 
                component={Publicacao}
                options={
                    {
                        headerShown: false, 
                    }
                }                
            />
            <Stack.Screen 
                name="Perfil" 
                component={Perfil}
                options={
                    {
                        headerShown: false, 
                    }
                }                
            />
            <Stack.Screen 
                name="Aluno" 
                component={Aluno}
                options={
                    {
                        headerShown: false, 
                    }
                }                
            />
            <Stack.Screen 
                name="Receitas" 
                component={Receitas}
                options={
                    {
                        headerShown: false, 
                    }
                }                
            />
        </Stack.Navigator>
    );
}

export default RotasLoginStack;