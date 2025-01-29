import React from "react";
import ArticleCreateScreen from "../screens/Community/ArticleCreateScreen";
import CommunityScreen from "../screens/Community/CommunityScreen";
import { createStackNavigator } from "@react-navigation/stack";

export type CommunityParamList = {
    CommunityMain: undefined;
    ArticleCreate: undefined;
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
        </Stack.Navigator>
    )
}

export default CommunityNavigator;