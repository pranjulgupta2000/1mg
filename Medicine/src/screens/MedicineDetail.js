import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { addItemToCart } from "../Redux/actions/action";
import { useDispatch, useSelector } from "react-redux";


export default function MedicineDetail({ route, navigation }) {

    const { data } = route.params;
    const dispatch = useDispatch();

    const addItem = item => {
        dispatch(addItemToCart(item));
    };

    const items = useSelector(state => state.cart);
   
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <TouchableOpacity
                style={style.cartContainer}
                onPress={() => {
                    navigation.navigate('Cart');
                }}
            >
                <Image
                    source={require('../assets/trolley.png')}
                    style={style.cartBagImage}
                />
                <Text style={style.cartQuantity}>
                    {items.length}
                </Text>
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={style.imageContainer}>
                    <Image source={{
                        uri: data.imgUrl,
                    }} style={{ height: 250, width: 250 }} />
                </View>
                <View style={style.details}>
                    <View
                        style={style.nameContainer}>
                        <Text
                            style={StyleSheet.nameText}>
                            {data.name}
                        </Text>
                    </View>
                    <Text style={style.detailsText}>
                        Price: {data.price} /-
                    </Text>
                    <Text style={style.detailsText}>
                        Rating: {data.rating}
                    </Text>
                    <Text style={style.detailsText}>
                        {data.Description}
                    </Text>
                    <TouchableOpacity style={style.cartButton} onPress={() => { addItem(data) }}><Text style={style.cartButtonText}>Add To Cart</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    details: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor: 'grey',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    iconContainer: {
        backgroundColor: 'white',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    detailsText: {
        marginTop: 10,
        lineHeight: 22,
        fontSize: 16,
        color: 'white',
    },
    cartButton: {
        backgroundColor: 'red',
        width: '80%',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20,
        marginLeft: 28,
    },
    cartButtonText: {
        fontSize: 20,
        marginTop: 3
    },
    cartContainer: {
        width: 100,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#b3ffd9',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 20,
        alignSelf: 'flex-end',
    },
    cartQuantity: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: '800',
        color: 'black'
    },
    cartBagImage: {
        width: 24,
        height: 24,
    },
    nameText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 280,
    }
});
