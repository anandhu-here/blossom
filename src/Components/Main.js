import React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Tab/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { base_color, home_buttons } from '../data';
import Profile from './Tab/Profile';
import CalendarTab from './Tab/Calendar';
import Shifts from './Tab/Shifts';
import Schedule from './Tab/A';

const Tab = createBottomTabNavigator();


export default function Main() {
    return (
        <Tab.Navigator screenOptions={{headerShown:false, tabBarShowLabel:false, tabBarActiveTintColor:home_buttons,  tabBarInactiveTintColor:'black', tabBarStyle:{ elevation:20, height:50}}}   >
            <Tab.Screen component={Home}  name='Home' options={{
                tabBarIcon:({color, size})=>(
                    <Icon name="home" color={color} size={20} />
                )
                
            }} />
            {/* <Tab.Screen component={Schedule} name="schedule" options={{
                tabBarIcon:({color, size})=>(
                    <Icon name="calendar" color={"black"} size={20} />
                )
                
            }} /> */}
            <Tab.Screen component={Schedule} name="calendar" options={{
                tabBarIcon:({color, size})=>(
                    <Icon name="calendar" color={color} size={20} />
                )
                
            }} />
            <Tab.Screen component={Profile} name="profile" options={{
                tabBarIcon:({color, size})=>(
                    <Icon name="account" color={color} size={20} />
                )
                
            }} />
        </Tab.Navigator>
    )
}
