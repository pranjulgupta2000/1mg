import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Button,
    TextInput,
    ActivityIndicator,
} from "react-native";


export default function Payment({ route, navigation }) {
    const { totalPrice } = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [cardNo, setCardNo] = useState("");
    const [cvv, setCvv] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState("Enter Information");

    const hideModal = () => {
        setModalVisible(false);
    };
    const validation = () => {
        if (cardNo.length < 16 || cardNo.length > 16) {
            setError("Enter 16 digit no.");
        }
        else if (cvv.length < 3 || cvv.length > 3) {
            setError("Enter 3 digit CVV");
        }
        else {

            setTimeout(() => {
                navigation.navigate('OTPPage', { totalPrice: totalPrice });
            }, 6000);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.totalPrice}>Payable Amount :{totalPrice}</Text>
            <View style={styles.boxdirection}>
                <View style={styles.paytmBox}>
                    <TouchableOpacity style={styles.paytmBtn}>
                        <Text style={styles.centerText}>Pay with Paytm</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.creditCard}>
                    <TouchableOpacity
                        onPress={() => {
                            setModalVisible(true);
                        }}
                        style={styles.creditCardBtn}
                    >
                        <Text style={styles.centerText}>   Credit Card</Text>
                    </TouchableOpacity>
                </View>
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
                                <Text style={{ fontWeight: "bold", color: 'black' }}>X</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.cardText}>Credit Card</Text>
                        <Text style={styles.cardText}>{error}</Text>
                        <View style={styles.creditCardInput}>
                            <TextInput
                                onChangeText={(text) => setCardNo(text)}
                                value={cardNo}
                                placeholder={"Enter Credit Card No"}
                                placeholderTextColor={"black"}
                                style={{ color: 'black', borderRadius: 10 }}
                            />
                        </View>
                        <View style={styles.containertxtInput}>
                            <TextInput
                                style={styles.txtInputExpiry}
                                onChangeText={(text) => setDate(text)}
                                value={date}
                                placeholder={"ExpiryDate"}
                                placeholderTextColor={"black"}
                            />
                            <TextInput
                                style={styles.txtInputCvv}
                                onChangeText={(text) => setCvv(text)}
                                value={cvv}
                                placeholder={"CVV"}
                                placeholderTextColor={"black"}
                            />
                        </View>
                        <View style={styles.orderBtn}>
                            <Button onPress={() => { validation(); }} title="Place Order"></Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxdirection: {
        flexDirection: "row",
        marginLeft: '5%',
        marginTop: '10%'
    },
    paytmBox: {
        backgroundColor: "aqua",
        width: 150,
        height: 200,
        borderRadius: 30
    },
    paytmBtn: {
        backgroundColor: "red",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: "40%",
        borderRadius: 20,
        height: '20%'
    },
    creditCardBtn: {
        backgroundColor: "red",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: "40%",
        borderRadius: 20,
        height: '20%',
        width: '90%'
    },

    creditCard: {
        backgroundColor: "gold",
        marginLeft: 10,
        width: 160,
        height: 200,
        borderRadius: 30
    },
    centerText: {
        justifyContent: "center",
        fontSize: 20,
    },
    containermodal: {
        flew: 1,
        flexDirection: "row",
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
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    modalCloseBtn: {
        alignSelf: "flex-end",
    },
    cardText: {
        color: "black",
    },
    containertxtInput: {
        height: 45,
        flexDirection: "row",
        marginTop: 10,
    },
    txtInputCvv: {
        borderWidth: 1,
        borderColor: "black",
        marginLeft: 10,
        color: 'black',
        borderRadius: 10
    },
    txtInputExpiry: {
        borderWidth: 1,
        borderColor: "black",
        color: 'black',
        borderRadius: 10
    },
    creditCardInput: {
        borderWidth: 1,
        height: 40,
    },
    orderBtn: {
        marginTop: 5,
    },
    totalPrice: {
        color: 'black',
        fontSize: 20,
        marginTop: '5%',
        marginLeft: '10%',
        fontWeight: 'bold'
    }
});