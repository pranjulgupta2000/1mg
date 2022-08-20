import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";
export default function Home({ navigation }) {
    return (
        <View>
            <SearchBar
                placeholder="Search here"
                onChangeText={(text) => console.log(text)}
            />

            <View style={styles.buttonContainer}>
                <View style={styles.containerOne}>
                    <TouchableOpacity style={styles.buttonTop}
                        onPress={() => { navigation.navigate('Digestion') }}><Text style={styles.buttonText}>Digestion</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTop}
                        onPress={() => { navigation.navigate('PainKiller') }}><Text style={styles.buttonText}>PainKiller</Text></TouchableOpacity>
                </View>
                <View style={styles.containerTwoThree}>
                    <TouchableOpacity style={styles.buttonTop}
                        onPress={() => { navigation.navigate('SkinCare') }} ><Text style={styles.buttonText}>SkinCare</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTop}
                        onPress={() => { navigation.navigate('Nutrition') }}><Text style={styles.buttonText}>Nutrition</Text></TouchableOpacity>
                </View>
                <View style={styles.containerTwoThree}>
                    <TouchableOpacity style={styles.buttonTop}
                        onPress={() => { navigation.navigate('Ayurveda') }}><Text style={styles.buttonText}>Ayurveda</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTop}
                        onPress={() => { navigation.navigate('EyeDrops') }}><Text style={styles.buttonText}>Eye Drops</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 30,
        marginTop: 15,
    },
    buttonTop: {
        backgroundColor: 'red',
        height: '160%',
        width: '40%',
        alignItems: 'center',
        borderRadius: 30,
    },
    containerOne: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    containerTwoThree: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 60,
    },
    buttonContainer: {
        marginTop: 50
    }
})