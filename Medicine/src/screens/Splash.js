import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    ImageBackground,
} from 'react-native';

const SplashScreen = ({navigation}) => {
    setTimeout(() => {
        navigation.navigate('BottomTab');
    }, 3000);
    return (
        <ImageBackground style={{ flex: 1 }} source={{ uri: 'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80' }}>
            <Text>SplashScreen</Text>
        </ImageBackground>
    )
}
export default SplashScreen