import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { database } from "../database/config";
import { useSelector } from "react-redux";

export default function OTPPage({ navigation, route }) {
    const { totalPrice } = route.params;
    const speed = useSelector(state => state.reduxSpeed);
    const address = useSelector(state => state.reduxAddress);
    const items = useSelector(state => state.cart);
    const [OTP, setOTP] = useState("");
    const [error, setError] = useState("Check your phone..");

    const uploadData = () => {
        const data = {
            id: Number(new Date()),
            items: items,
            address: address[0],
            name: "UserEmail",
            speed: speed[0],
            totalPrice: totalPrice
        };
        database
            .ref("orderList")
            .update({ [data.id]: data })
            .then(() => {
                console.log("Inserted");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const validation = () => {
        if (OTP == "123456") {
            setTimeout(() => {
                uploadData();
                navigation.navigate('OrderSuccess');
            }, 6000)
        }
        else {
            setError('OTP Incorrect!!');
        }
    }
    return (
        <View>
            <Text style={{ color: 'black', alignSelf: 'center', fontSize: 25, marginTop: '10%', fontWeight: 'bold' }}>
                Enter 6-digit OTP
            </Text>
            <Text style={{ alignSelf: 'center', color: 'black', marginTop: '20%' }}>{error}</Text>
            <TextInput
                placeholder="Enter OTP"
                placeholderTextColor={"black"}
                onChangeText={(text) => setOTP(text)}
                value={OTP}
                style={{ borderWidth: 2, width: '70%', marginLeft: '15%', borderRadius: 10, fontSize: 20, color: 'black', marginTop: '10%' }}
            />
            <TouchableOpacity style={{ backgroundColor: "red", marginTop: '20%', height: '15%', width: '50%', marginLeft: '25%', borderRadius: 20 }}
                onPress={() => { validation() }}
            >
                <Text style={{ alignSelf: 'center', fontSize: 25, marginTop: '4%' }}>
                    Validate OTP
                </Text>
            </TouchableOpacity>
        </View>
    )
}