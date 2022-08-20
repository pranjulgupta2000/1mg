import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { database } from "../database/config";

export default function MyOrder({ navigation }) {

    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchOrders();
    }, []);
    const fetchOrders = () => {
        setIsLoading(true);
        database
            .ref("orderList")
            .once("value")
            .then((item) => {
                var order = [];
                item.forEach((childSnapshot) => {
                    order.push(childSnapshot.val());
                });
                setOrders(order); // updating state
                setIsLoading(false);

            });
    }
    const storyItem = ({ item }) => {
        console.log("items=", item);
        return (
            <View>
                <TouchableOpacity onPress={() => { navigation.navigate('OrderDetail', { data: item }) }}>
                    < View style={styles.mainContainer}>
                        <View style={styles.containerName}>
                            <Text style={styles.name}>Order ID:{item.id}</Text>
                            <Text style={styles.details}>Total = {item.totalPrice}/-</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{ marginTop: '5%' }}>

            {isLoading ?
                <View style={styles.loaderStyle}>
                    <ActivityIndicator size="large" color="#aaa" />
                </View> :
                <FlatList
                    data={orders}
                    keyExtractor={item => item.id}
                    renderItem={storyItem}
                />}
        </View>
    )
}

const styles = StyleSheet.create({


    mainContainer: {
        padding: 20,
        flexDirection: 'row',
        borderBottomWidth: 2,
        backgroundColor: 'black',
        borderRadius: 40,
        borderBottomColor: 'white'
    },
    name: {
        fontSize: 20,
        color: 'White',
        marginRight: 10,
        fontStyle: 'bold'
    },
    details: {
        fontSize: 14,
        color: 'white',
        fontStyle: 'italic'
    },

    containerName: {
        marginLeft: 40
    },
    loaderStyle: {
        marginVertical: 16,
        alignItems: "center",
    },

});