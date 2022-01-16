import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import Main from './Main';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Timesheets from './Timesheets';
import logo from '../BVC_.png'
import { base_color } from '../data';
import Auth from './StackScreens/Auth';
import LoginHome from './StackScreens/LoginHome';
import LoginStaff from './StackScreens/LoginStaff';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import RegisterStaff from './StackScreens/RegisterStaff';
const Stack = createNativeStackNavigator();

export default function Router({isAuthenticated}) {
    
    const auth_state = useSelector(state=>state);
    const dispatch = useDispatch()
    useEffect(()=>{
        if(auth_state.auth.uid){
            
        }
    }, [auth_state])     
    
    return (
        <View style={{flex:1}}>
            {
                auth_state.auth.uid?(
                    <NavigationContainer >
                        <Stack.Navigator  screenOptions={{headerShown:true}} >
                            <Stack.Screen component={Main} name="Main" options={{
                                title:"",
                                headerTitleStyle:{fontSize:20},
                                headerShadowVisible:true,
                                headerLeft:(props)=>(
                                    <TouchableOpacity>
                                        <Image style={{width:100, height:35}} source={logo}  />
                                    </TouchableOpacity>
                                ),
                                headerRight:(props)=>(
                                    <TouchableOpacity>
                                        <Icon name='bell' size={25} color={'black'} />
                                    </TouchableOpacity>
                                ),
                                headerStyle:{backgroundColor:'white', elevation:10}
                            }}
                            
                            />
                            
                            <Stack.Screen component={Timesheets} name="Timesheet"  />
                        </Stack.Navigator>
                    </NavigationContainer>
                ):(
                    <NavigationContainer >
                        <Stack.Navigator  screenOptions={{headerShown:true}} >
                            
                            
                                <Stack.Screen options={{headerShown:false}} component={Auth} name="Auth" />
                                <Stack.Screen options={{headerShown:false}} component={LoginStaff} name="AuthStaff" />
                                <Stack.Screen options={{headerShown:false}} component={RegisterStaff} name="RegisterStaff" />
                                <Stack.Screen options={{headerShown:false}} component={LoginHome} name="AuthHome" />
                        </Stack.Navigator>
                    </NavigationContainer>
                )
            }
        </View>
    )
}
