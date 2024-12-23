import React from "react";
import AuthScreen from "../screens/Auth/AuthScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";

export type AuthParamList = {
    AuthMain: undefined;
    Login: undefined;
    SignUp: undefined;
};

const Stack = createStackNavigator<AuthParamList>();

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="AuthMain" 
                component={AuthScreen}
                options={{ headerShown: false}} 
            />
            <Stack.Screen 
                name="SignUp" 
                component={SignUpScreen} 
            />
            <Stack.Screen 
                name="Login" 
                component={LoginScreen}
            />
        </Stack.Navigator>
    )
};

export default AuthNavigator;