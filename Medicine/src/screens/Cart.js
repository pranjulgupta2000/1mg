import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
    StyleSheet, TextInput
} from 'react-native';
import React, { useEffect, useState } from 'react';
//import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../Redux/actions/action';

const Cart = ({ navigation }) => {
    // const navigation = useNavigation();
    const items = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);
    const [input, setInput] = useState("");
    var price = 0;

    useEffect(() => {
        for (var i = 0; i < items.length; i++) {
            price = price + parseInt(items[i].price)
        }
        setTotalPrice(price);
    }, []); // effect will run only once

    const removeItem = index => {
        dispatch(removeItemFromCart(index));
    };
    const validation = () => {
        console.log(input);
        if (input == "PRANJUL50") {
            console.log("in if");
            setTotalPrice(totalPrice / 2);
        }
        else if (input == "VINAYAK20") {
            setTotalPrice((80 * totalPrice) / 100);
        }
        else if (input == "PRANAY10") {
            setTotalPrice(totalPrice / 10);
        }
        else {
            alert("Not Applicable");
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

                <FlatList
                    data={items}
                    renderItem={({ item, index }) => {
                        // price += parseInt(item.price);
                        // // console.log(price);
                        // setTotalPrice(price);
                        return (
                            <View
                                style={styles.container}>
                                <View style={{ width: '60%', padding: 20 }}>
                                    <Text style={{ color: 'black' }}>{item.name}</Text>
                                    <Text style={styles.priceItem}>
                                        {item.price}/-
                                    </Text>
                                    <TouchableOpacity
                                        style={styles.removeButton}
                                        onPress={() => {
                                            removeItem(index);
                                        }}>
                                        <Text style={{ color: '#fff' }}>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                                <Image
                                    source={{ uri: item.imgUrl }}
                                    style={styles.imageItem}
                                />
                            </View>
                        );
                    }}
                />
                <View style={styles.couponInputView}>
                    <TextInput
                        placeholder='Coupon Code'
                        placeholderTextColor={"black"}
                        onChangeText={(text) => setInput(text)}
                        value={input}
                        style={styles.couponInput}
                    />
                    <TouchableOpacity style={styles.couponButton}
                        onPress={() => { validation(); }}>
                        <Text style={styles.couponButtonText}>Apply Coupon</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.totalPrice}>  Total: {totalPrice}</Text>
                <TouchableOpacity style={styles.checkoutButton}
                    onPress={() => { navigation.navigate('Address', { totalPrice: totalPrice }) }}>
                    <Text style={{ fontSize: 20, marginTop: 7 }}>CheckOut</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Cart;

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
    removeButton: {
        height: 30,
        borderRadius: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        marginTop: 5,
    },
    imageItem: {
        width: 100,
        height: 90,
        borderRadius: 10,
        marginRight: 15,
    },
    totalPrice: {
        fontSize: 20,
        marginTop: 7,
        backgroundColor: 'red',
        marginBottom: 30,
        height: '7%',
        width: '30%',
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20
    },
    checkoutButton: {
        backgroundColor: 'red',
        marginBottom: 30,
        height: '7%',
        width: '30%',
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20
    },
    couponInputView: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: '#333',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '5%',
    },
    couponInput: {
        flex: 1,
        fontSize: 20,
        paddingHorizontal: 10,
        color: 'black'
    },
    couponButton: {
        backgroundColor: '#333',
        paddingHorizontal: 12,
        justifyContent: 'center',
    },
    couponButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    }
})