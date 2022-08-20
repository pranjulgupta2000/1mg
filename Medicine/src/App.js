import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./Navigation/BottomTab";
import Home from "./screens/Home";
import Article from "./screens/Article";
import Account from "./screens/Account";
import DrawerNav from "./Navigation/DrawerNav";
import SplashScreen from "./screens/Splash";
import Digestion from "./screens/Digestion";
import PainKiller from "./screens/PainKiller";
import SkinCare from "./screens/SkinCare";
import Nutrition from "./screens/Nutrition";
import Ayurveda from "./screens/Ayurveda";
import EyeDrops from "./screens/EyeDrops";
import MedicineDetail from "./screens/MedicineDetail";
import { Provider } from "react-redux";
import { mystore } from "./Redux/store/store";
import Cart from "./screens/Cart";
import Payment from "./screens/Payment";
import Address from "./screens/Address";
import DeliverySpeed from "./screens/DeliverySpeed";
import OrderSummary from "./screens/OrderSummary";
import OTPPage from "./screens/OTPPage";
import OrderSuccess from "./screens/OrderSuccess";
import OrderDetail from "./screens/OrderDetail";


export default function App() {
    const Stack = createStackNavigator();

    return (
        <Provider store={mystore}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }} />
                    <Stack.Screen
                        name="SplashScreen"
                        component={SplashScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Article" component={Article} />
                    <Stack.Screen name="Account" component={Account} />
                    <Stack.Screen name="Digestion" component={Digestion} />
                    <Stack.Screen name="PainKiller" component={PainKiller} />
                    <Stack.Screen name="SkinCare" component={SkinCare} />
                    <Stack.Screen name="Nutrition" component={Nutrition} />
                    <Stack.Screen name="Ayurveda" component={Ayurveda} />
                    <Stack.Screen name="EyeDrops" component={EyeDrops} />
                    <Stack.Screen name="MedicineDetail" component={MedicineDetail} />
                    <Stack.Screen name="Cart" component={Cart} />
                    <Stack.Screen name="Payment" component={Payment} />
                    <Stack.Screen name="Address" component={Address} />
                    <Stack.Screen name="DeliverySpeed" component={DeliverySpeed} />
                    <Stack.Screen name="OrderSummary" component={OrderSummary} />
                    <Stack.Screen name="OTPPage" component={OTPPage} />
                    <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
                    <Stack.Screen name="OrderDetail" component={OrderDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}