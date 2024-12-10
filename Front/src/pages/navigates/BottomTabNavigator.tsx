import React from "react";
import { createBottomTabNavigator, BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../HomeScreen";
import CommunityScreen from "../CommunityScreen";
import MyPageScreen from "../MyPageScreen";
import SearchScreen from "../SearchScreen";

type TabParamList = {
    홈: undefined;
    검색: undefined;
    커뮤니티: undefined;
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
                    } else if (route.name === "커뮤니티") {
                        iconName = "earth-outline";
                    } else if (route.name === "마이페이지") {
                        iconName = "person-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },

                tabBarActiveTintColor: "00FF00",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: { backgroundColor: "FAFAFA", height: 60 },
            })}
        >
            <Tab.Screen name="홈" component={HomeScreen} />
            <Tab.Screen name="검색" component={SearchScreen} />
            <Tab.Screen name="커뮤니티" component={CommunityScreen} />
            <Tab.Screen name="마이페이지" component={MyPageScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;