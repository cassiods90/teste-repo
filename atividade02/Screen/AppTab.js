import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import AppList from './AppList';
import AppForm from './AppForm';

const {Navigator, Screen} = createBottomTabNavigator();

export default function AppTab(){
return (
    <NavigationContainer>
        <Navigator
            tabBarOptions={{ 
                style: {
                    leevation: 0,
                    shasdowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                labelStyle: {
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d',
            }}
        >
            <Screen name="AppList" component={AppList} options={{tabBarLabel: "Left Side" }} />
            <Screen name="AppForm" component={AppForm} options={{tabBarLabel: "Right Side" }} />
        </Navigator>
    </NavigationContainer>
);
}