import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Profile from './pages/Profile' ;

const appStack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <appStack.Navigator screenOptions={{headerStyle: {backgroundColor: '#7D40E7'}, headerTintColor:'#FFF', gestureDirection: 'vertical' }}>
                <appStack.Screen options={{headerTitleAlign: "center", title: "DevRadar"}} name="Main" component={Main}/>
                <appStack.Screen options={{headerTitleAlign: "center", title: "Perfil no GitHub"}} name="Profile" component={Profile}/>
            </appStack.Navigator>
        </NavigationContainer>
    );
}