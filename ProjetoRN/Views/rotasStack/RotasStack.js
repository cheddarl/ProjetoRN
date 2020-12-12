import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import App from '../../App';

const Stack = createStackNavigator();

const RotasStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Inicial" 
                component={App}
                options={
                    {
                        headerShown: false, 
                    }
                }                
            />
            <Stack.Screen 
                name="Publicações" 
                component={App}
                options={
                    { 
                        headerShown: false
                    }            
                }               
            />
            <Stack.Screen 
                name="Perfil" 
                component={App}
                options={
                    { 
                        headerShown: false
                    }            
                }               
            />
        </Stack.Navigator>
    );
}

export default RotasStack;