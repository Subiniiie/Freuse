import React from "react";
import AuthScreen from "../screens/Auth/AuthScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AuthMain" component={AuthScreen} />
        </Stack.Navigator>
    )
};

export default AuthNavigator;