import React, { memo } from "react";
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { logoutUser } from "../api/auth-api";
import WeatherScreen from './Tabs/WeatherScreen';
import SolunarScreen from './Tabs/SolunarScreen';
import Community from './Tabs/Community';
import HomeTab from './Tabs/HomeTab';
import Settings from './Tabs/Settings';

import { getName } from "../api/auth-api";



const Tab = createBottomTabNavigator();


export default function Dashboard() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Weather" component={WeatherScreen} />
        <Tab.Screen name="Solunar" component={SolunarScreen} />
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
