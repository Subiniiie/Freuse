import React from "react";
import HomeScreen from "../screens/Home/HomeScreen";
import BagsMainScreen from "../screens/Home/BagsMainScreen";
import ElectronicAccessoriesMainScreen from "../screens/Home/ElectronicAccessoriesMainScreen";
import PouchesMainScreen from "../screens/Home/PouchesMainScreen";
import WalletsMainScreen from "../screens/Home/WalletsMainScreen";
import { createStackNavigator } from "@react-navigation/stack";

export type HomeParamList = {
    HomeMain: undefined;
    BagsMain: undefined;
    ElectronicAccessoriesMain: undefined;
    PouchesMain: undefined;
    WalletsMain: undefined;
};

const Stack = createStackNavigator<HomeParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeMain"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BagsMain"
                component={BagsMainScreen}
            />
            <Stack.Screen
                name="ElectronicAccessoriesMain"
                component={ElectronicAccessoriesMainScreen}
            />
            <Stack.Screen
                name="PouchesMain"
                component={PouchesMainScreen}
            />
            <Stack.Screen
                name="WalletsMain"
                component={WalletsMainScreen}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator;