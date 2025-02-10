import React from "react";
import ArticleCreateScreen from "../screens/Community/ArticleCreateScreen";
import CommunityScreen from "../screens/Community/CommunityScreen";
import ArticleItemScreen from "../screens/Community/ArticleItemScreen";
import ArticleUpdateScreen from "../screens/Community/ArticleUpdateScreen";
import { createStackNavigator } from "@react-navigation/stack";

export type CommunityParamList = {
    CommunityMain: undefined;
    ArticleCreate: undefined;
    ArticleItem: { id: number };
    ArticleUpdate: undefined;
};

const Stack = createStackNavigator<CommunityParamList>();

const CommunityNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="CommunityMain"
                component={CommunityScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="ArticleCreate"
                component={ArticleCreateScreen}
                // options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ArticleItem"
                component={ArticleItemScreen}
                // options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ArticleUpdate"
                component={ArticleUpdateScreen}
                // options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default CommunityNavigator;