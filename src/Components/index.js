import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Main from './Main';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Timesheets from './Timesheets';


const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown:true}} >
                <Stack.Screen component={Main} name="Main" options={{
                    title:"Blossomvalley Care",
                    headerTitleStyle:{fontSize:20},
                    headerShadowVisible:true,
                    headerRight:(props)=>(
                        <TouchableOpacity>
                            <Icon name='bell' size={20} />
                        </TouchableOpacity>
                    ),
                    headerStyle:{backgroundColor:'white', elevation:10}
                }}
                
                 />
                <Stack.Screen component={Timesheets} name="Timesheet"  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
