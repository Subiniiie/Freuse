import React from "react";
import { createBottomTabNavigator, BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyPageScreen from "../screens/Mypage/MyPageScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import ChatScreen from "../screens/Chat/ChatScreen";
import { NavigatorScreenParams } from "@react-navigation/native";
import CommunityNavigator, { CommunityParamList } from "./CommunityNavigator";
import HomeNavigator, { HomeParamList } from "./HomeNavigator";

export type TabParamList = {
    홈: NavigatorScreenParams<HomeParamList>;
    검색: undefined;
    거래: NavigatorScreenParams<CommunityParamList>;
    채팅: undefined;
    마이페이지: undefined;
}

const Tab = createBottomTabNavigator<TabParamList>();

interface BottomTabNavigatorProps {
    navigation: BottomTabNavigationProp<TabParamList>;
}

const BottomTabNavigator:React.FC<BottomTabNavigatorProps> = ({ navigation }) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName: string = "hele-outline";

                    if (route.name === "홈") {
                        iconName = "home-outline";
                    } else if (route.name === "검색") {
                        iconName = "search-outline";
                    } else if (route.name === "거래") {
                        iconName = "earth-outline";
                    }  else if (route.name === "채팅") {
                        iconName = "chatbubbles-outline";
                    } else if (route.name === "마이페이지") {
                        iconName = "person-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },

                tabBarActiveTintColor: "00FF00",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: { height: 60 },
            })}
        >
            <Tab.Screen name="홈" component={HomeNavigator} />
            <Tab.Screen name="검색" component={SearchScreen} />
            <Tab.Screen name="거래" component={CommunityNavigator} />
            <Tab.Screen name="채팅" component={ChatScreen} />
            <Tab.Screen name="마이페이지" component={MyPageScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;