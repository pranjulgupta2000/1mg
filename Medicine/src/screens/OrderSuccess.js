import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';

export default function OrderSuccess({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('DrawerNav');
        }, 3000)
    }, []); // effect will run only once
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={{ uri: "https://img.icons8.com/color/70/000000/facebook-like.png" }} />
            <Text style={styles.title}>Congratulation, your order is accepted</Text>
            <Text style={styles.description}>Payment is successful,you will the receive your Medicine soon</Text>
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => { navigation.navigate('DrawerNav') }}>
                <Text style={styles.buttonText}>Go Back to Continue</Text>
            </TouchableHighlight>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        paddingTop: 50,
    },
    icon: {
        width: 120,
        height: 120,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 22,
        color: "#5F6D7A"
    },
    description: {
        marginTop: 20,
        textAlign: 'center',
        color: "#A9A9A9",
        fontSize: 16,
        margin: 40,
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#3498db",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 20,
    }
});

