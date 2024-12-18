import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import SplashMainScreen from "../screens/Splash/SplashMainScreen";


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Splash"
                component={SplashMainScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Main"
                component={BottomTabNavigator}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;