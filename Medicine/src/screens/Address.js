import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { addAddress } from "../Redux/actions/action";
import { useDispatch } from "react-redux";

export default function Address({ navigation, route }) {
    const { totalPrice } = route.params;

    const [selectAddress, setSelectAddress] = useState("");
    const [address] = useState(["None", 'Mathura', 'Delhi', 'Mumbai', 'Agra']);
    const dispatch = useDispatch();

    const addItem = item => {
        dispatch(addAddress(item));
    };

    const validation = () => {
        if (selectAddress == "" || selectAddress == "None") {
            alert("Add Address");
        }
        else {
            addItem(selectAddress);
            navigation.navigate('DeliverySpeed', { totalPrice: totalPrice })
        }
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}> Choose the Address Below</Text>
                <View style={styles.pickerView}>
                    <Picker style={{ marginVertical: 10, color: 'black' }}
                        selectedValue={selectAddress}
                        onValueChange={(itemVal) => {
                            setSelectAddress(itemVal);
                        }}
                    >
                        {address.map((l) => (
                            <Picker.Item label={l} value={l} />

                        ))}
                    </Picker>
                </View>
                <TextInput placeholder="Type Address"
                    placeholderTextColor={"black"}
                    style={styles.textInput}
                    onChangeText={(text) => {
                        setSelectAddress(text);
                    }}
                    value={selectAddress}
                />
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
                <Text style={styles.totalPrice}>  Total: {totalPrice}</Text>
                <TouchableOpacity style={styles.continueButton}
                    onPress={() => {
                        validation();
                    }}
                >
                    <Text style={styles.continueButtonText}>Continue</Text></TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'space-between'
    },
    text: {
        color: 'black',
        marginTop: 10,
        fontSize: 20,
        marginTop: '10%'
    },
    textInput: {
        borderWidth: 2,
        borderRadius: 20,
        color: 'black',
        marginTop: '10%'
    },
    totalPrice: {
        backgroundColor: 'red',
        marginBottom: 30,
        height: '15%',
        width: '30%',
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        fontSize: 20,
    },
    continueButton: {
        backgroundColor: 'red',
        marginBottom: 30,
        height: '15%',
        width: '30%',
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20
    },
    continueButtonText: {
        fontSize: 20,
        marginTop: 7
    },
    pickerView: {
        borderWidth: 2,
        borderColor: 'black',
        height: '20%',
        marginTop: '35%',
        borderRadius: 20
    }

})