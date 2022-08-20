import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch, useSelector } from "react-redux";
import { addSpeed } from "../Redux/actions/action";

export default function DeliverySpeed({ navigation, route }) {
    const { totalPrice } = route.params;
    const [selectSpeed, setSelectSpeed] = useState("");
    const [speed] = useState([, 'None', 'Today', 'Tommorow', '2 days', '3 days']);
    const dispatch = useDispatch();

    const addItem = item => {
        dispatch(addSpeed(item));
    };
    const validation = () => {
        if (selectSpeed == "" || selectSpeed == "None") {
            alert("Choose Speed!!!");
        }
        else {
            addItem(selectSpeed);
            navigation.navigate('OrderSummary', { totalPrice: totalPrice })
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.chooseText}> Choose the Speed Below</Text>
                <View style={styles.pickerView}>
                    <Picker style={{ marginVertical: 10, color: 'black' }}
                        selectedValue={selectSpeed}
                        onValueChange={(itemVal) => {
                            setSelectSpeed(itemVal);
                        }}
                    >
                        {speed.map((l) => (
                            <Picker.Item label={l} value={l} />

                        ))}
                    </Picker>
                </View>
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
                <Text style={styles.totalPrice}>  Total: {totalPrice}</Text>
                <TouchableOpacity style={styles.checkoutButton}
                    onPress={() => { validation(); }}
                >
                    <Text style={styles.checkoutButtonText}>Continue</Text></TouchableOpacity>
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
    checkoutButton: {
        backgroundColor: 'red',
        marginBottom: 30,
        height: '15%',
        width: '30%',
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20
    },
    checkoutButtonText: {
        fontSize: 20,
        marginTop: 7
    },
    chooseText: {
        color: 'black',
        marginTop: "20%",
        fontSize: 20
    },
    pickerView: {
        borderWidth: 2,
        borderColor: 'black',
        height: '20%',
        marginTop: '50%',
        borderRadius: 20
    }
})