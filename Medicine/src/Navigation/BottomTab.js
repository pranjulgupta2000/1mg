import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Article from "../screens/Article";
import Account from "../screens/Account";
import Home from "../screens/Home";
import { Image } from 'react-native';
//import { Icon } from "react-native-vector-icons/FontAwesome";

export default function BottomTab() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Image source={require('../assets/house.png')} style={{ height: 20, width: 20 }} />
                )
            }} />
            <Tab.Screen name="Article" component={Article} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Image source={require('../assets/article.png')} style={{ height: 20, width: 20 }} />
                )
            }} />
            <Tab.Screen name="Account" component={Account} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Image source={require('../assets/user.png')} style={{ height: 20, width: 20 }} />
                )
            }} />
        </Tab.Navigator>
    )
}