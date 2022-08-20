import React from "react";
import { View, Text, ScrollView, FlatList, SafeAreaView, TouchableOpacity, Image, Linking, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";

export default function OrderSummary({ navigation, route }) {
    const speed = useSelector(state => state.reduxSpeed);
    const address = useSelector(state => state.reduxAddress);
    const items = useSelector(state => state.cart);
    const { totalPrice } = route.params;
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

                <FlatList
                    data={items}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                style={styles.container}>
                                <View style={{ width: '60%', padding: 20 }}>
                                    <Text style={{ color: 'black' }}>{item.name}</Text>
                                    <Text style={styles.priceItem}>
                                        {item.price}/-
                                    </Text>


                                </View>
                                <Image
                                    source={{ uri: item.imgUrl }}
                                    style={styles.imageItem}
                                />
                            </View>
                        );
                    }}
                />
                <Text style={styles.shippingSpeedText}>  Shipping Speed: {speed}</Text>
                <Text style={styles.shippingAddressText}>  Shipping Address: {address}</Text>
                <Text style={styles.totalPrice}>  Total: {totalPrice}</Text>
                <TouchableOpacity style={styles.confirmButton} onPress={() => { navigation.navigate('Payment', { totalPrice: totalPrice }) }} >
                    <Text style={styles.confirmButtonText}>Confirm</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 100,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 10,
        borderWidth: 0.2,
        borderColor: '#8e8e8e',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    priceItem: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
    },

    imageItem: {
        width: 100,
        height: 90,
        borderRadius: 10,
        marginRight: 15,
    },
    shippingSpeedText: {
        backgroundColor: 'red',
        marginBottom: 20,
        height: '5%',
        width: '90%',
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        fontSize: 20,
    },
    shippingAddressText: {
        backgroundColor: 'red',
        marginBottom: 20,
        height: '5%',
        width: '90%',
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        fontSize: 20,
    },
    totalPrice: {
        backgroundColor: 'red',
        marginBottom: 20,
        height: '7%',
        width: '30%',
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        fontSize: 20,
    },
    confirmButton: {
        backgroundColor: 'red',
        marginBottom: 30,
        height: '7%',
        width: '30%',
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20
    },
    confirmButtonText: {
        fontSize: 20,
        marginTop: 7
    },

})