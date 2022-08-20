import React from "react";
import BottomTab from "./BottomTab";
import MyOrder from "../screens/MyOrder";
//import CustomDrawer from "./CustomDrawer";
import Account from "../screens/Account";
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';


function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <ImageBackground
                source={{ uri: 'https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg' }}
                style={styles.imageBack}>
                <Image source={{ uri: 'https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000' }}
                    style={styles.profileImage}
                />
                <Text
                    style={styles.name}>
                    Pranjul
                </Text>
            </ImageBackground>
            <View style={styles.container}></View>
            <DrawerItemList {...props} />
            {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
        </DrawerContentScrollView>
    );
}


export default function DrawerNav() {

    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName="BottomTab"
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Dashboard" component={BottomTab}
                options={{
                    drawerIcon: () => (
                        <Image source={require('../assets/speedometer.png')} style={{ height: 20, width: 20 }} />
                    )
                }} />
            <Drawer.Screen name="MyOrder" component={MyOrder}
                options={{
                    drawerIcon: () => (
                        <Image source={require('../assets/shopping-bag.png')} style={{ height: 20, width: 20 }} />
                    )
                }} />
            <Drawer.Screen name="Account" component={Account}
                options={{
                    drawerIcon: () => (
                        <Image source={require('../assets/user.png')} style={{ height: 20, width: 20 }} />
                    )
                }} />

        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20,
    },
    container: {
        padding: 20,
        borderTopWidth: 1
    },
    imageBack: {
        padding: 20,
        height: 200
    },
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 30,
        marginTop: 40
    },
    name: {
        color: "black",
        fontSize: 18,
        marginBottom: 5,
        marginLeft: 5,
        fontWeight: "bold",
    },
});