import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, ActivityIndicator, Modal, Button } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { database } from "../database/config";
import { addItemToCart } from "../Redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "react-native-dynamic-search-bar";

export default function SkinCare({ navigation }) {
    const [skinCare, setSkinCare] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [input, setInput] = useState("");
    const [filterData, skinCareFiltersData] = useState([]);

    const hideModal = () => {
        setModalVisible(false);
    };
    const lowToHigh = () => {
        skinCare.sort(function (a, b) {
            return a.price - b.price;
        }); // Sort youngest first
        hideModal();
    }
    const highToLow = () => {
        skinCare.sort(function (a, b) {
            return -a.price + b.price;
        });
        hideModal();
    }
    const noFilter = () => {
        fetchSkinCare();
        hideModal();
    }

    useEffect(() => {
        fetchSkinCare();
    }, []); // effect will run only once

    const fetchSkinCare = () => {
        setIsLoading(true);
        database.ref('skinCare').once('value').then((item) => {
            let users = [];
            item.forEach((childSnapshot) => {
                users.push(childSnapshot.val())
            })
            setSkinCare(users); // updating stateMessages
            setIsLoading(false);
        });
    }

    const dispatch = useDispatch();

    const addItem = item => {
        dispatch(addItemToCart(item));
    };

    const items = useSelector(state => state.cart);
    const storyItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => { navigation.navigate('MedicineDetail', { data: item }) }}>
                    < View style={styles.mainContainer}>
                        <View>
                            <Image
                                style={styles.imageItem}
                                source={{
                                    uri: item.imgUrl,
                                }}
                            >
                            </Image>
                        </View>

                        <View style={styles.containerName}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.details}>Price = {item.price}</Text>
                            <Text style={styles.details}>RATING = {item.rating}</Text>
                            <View style={styles.buttonView}>
                                <TouchableOpacity style={styles.cartButton}
                                    onPress={() => { addItem(item) }}><Text style={styles.cartButtonText}>Add to Cart</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    const searchskinCare = (textToSearch) => {
        skinCareFiltersData(skinCare.filter(item => item.name.toUpperCase().includes(textToSearch.toUpperCase())));
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <SearchBar
                    placeholder="Search here"
                    onChangeText={(text) => {
                        setInput(text);
                        //if (text.length == 3) {
                        searchskinCare(text);
                        //}
                    }}
                    value={input}
                    style={{ width: '70%', backgroundColor: '#b3ffd9' }}
                />
                <TouchableOpacity
                    style={styles.cartContainer}
                    onPress={() => {
                        navigation.navigate('Cart');
                    }}
                >
                    <Image
                        source={require('../assets/trolley.png')}
                        style={styles.cartBagImage}
                    />
                    <Text style={styles.cartQuantity}>
                        {items.length}
                    </Text>
                </TouchableOpacity>
            </View>
            {isLoading ?
                <View style={styles.loaderStyle}>
                    <ActivityIndicator size="large" color="#aaa" />
                </View> :
                <FlatList
                    data={filterData.length == 0 ? (input != "" ? [] : skinCare) : filterData}
                    keyExtractor={item => item.id}
                    renderItem={storyItem}
                />
            }
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.touchableOpacityStyle}
                    onPress={() => { setModalVisible(true) }}>
                    <Image
                        source={{
                            uri: 'https://icons-for-free.com/iconfiles/png/512/filter-1324438826391415094.png',
                        }}

                        style={styles.floatingButtonStyle}
                    />
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalCloseBtn}>
                            <TouchableOpacity onPress={hideModal}>
                                <Text style={{ fontWeight: "bold", color: 'black', fontSize: 20 }}>X</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.cardText}>Sort on Price</Text>
                        <View style={{ marginTop: '5%' }}>
                            <Button title="Low to High" onPress={() => { lowToHigh(); }} />
                        </View>
                        <View style={{ marginTop: '5%' }}>
                            <Button title="High to Low" onPress={() => { highToLow(); }} />
                        </View>
                        <View style={{ marginTop: '5%' }}>
                            <Button title="None" onPress={() => { noFilter(); }} />
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        paddingTop: 30,
        paddingBootom: 20,
        fontSize: 20,
        textAlign: 'center',
    },

    BooksContainer: {
        borderWidth: 1,
        borderTopColor: 'red',
        flex: 1,
        backgroundColor: 'black'
    },

    buttonView: {
        flexDirection: 'row',
        marginTop: 10,
    },

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
        color: 'white',
        marginRight: 10,
        fontStyle: 'bold'
    },
    details: {
        fontSize: 14,
        color: 'white',
        fontStyle: 'italic'
    },
    cartButton: {
        backgroundColor: 'red',
        height: '120%',
        width: '70%',
        alignItems: 'center',
        borderRadius: 20
    },
    cartButtonText: {
        fontSize: 20,
        marginTop: 5
    },
    containerName: {
        marginLeft: 40
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
    imageItem: {
        height: 120,
        width: 100,
        borderRadius: 30,
    },
    loaderStyle: {
        marginVertical: 16,
        alignItems: "center",
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: 'white'
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },




    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        width: "90%",
        backgroundColor: "lightblue",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalCloseBtn: {
        alignSelf: "flex-end",
    },
    cardText: {
        color: "black",
    },

});