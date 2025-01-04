import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthNavigator from "./AuthNavigator";
import useLogin from "../store/Auth/AuthStore";

const Stack = createStackNavigator();

const AppNavigator = () => {
    const { checkLogin } = useLogin();
    return (
        <Stack.Navigator initialRouteName={checkLogin ? "Main" : "Auth"}>
                <Stack.Screen 
                    name="Main"
                    component={BottomTabNavigator}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="Auth"
                    component={AuthNavigator}
                    options={{ headerShown: false }}
                />
        </Stack.Navigator>
    );
};

export default AppNavigator;