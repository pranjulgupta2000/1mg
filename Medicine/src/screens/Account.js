import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

export default function Account({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Image style={styles.avatar}
                        source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />

                    <Text style={styles.name}>John Doe </Text>
                    <Text style={styles.userInfo}>jhonnydoe@mail.com </Text>
                    <Text style={styles.userInfo}>Florida </Text>
                </View>
            </View>

            <View style={styles.body}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Change Password</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.navigate('MyOrder') }}>
                    <Text style={styles.buttonText}>My Orders</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>



            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: "#DCDCDC",
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        color: "#000000",
        fontWeight: '600',
    },
    userInfo: {
        fontSize: 16,
        color: "#778899",
        fontWeight: '600',
    },
    body: {
        backgroundColor: "#778899",
        height: 500,
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'yellow',
        height: 30,
        borderRadius: 30,
        width: 200,
        alignItems: 'center',
        marginTop: 50
    },
    buttonText: {
        color: 'black',
        marginTop: 6,
    },
});
