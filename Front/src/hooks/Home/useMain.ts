import { Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeParamList } from "src/navigates/HomeNavigator";

type HomeScreennavigationProps = StackNavigationProp<HomeParamList, keyof HomeParamList>;

const useMain = () => {
    const openFreitagWebsite = () => {
        Linking.openURL("https://media.freitag.ch/ko/media/bags");
    };

    const Navigation = useNavigation<HomeScreennavigationProps>();

    const goSeveralCategory = (id: number ) => {
        let screen: keyof HomeParamList;

        switch (id) {
            case 1:
                screen = "BagsMain";
                break;
            case 2:
                screen = "ElectronicAccessoriesMain";
                break;
            case 3:
                screen = "PouchesMain";
                break;
            case 4:
                screen = "WalletsMain";
                break;
            default:
                screen = "HomeMain"
                break;
        }
        Navigation.navigate(screen);
    }

    return {
        openFreitagWebsite,
        goSeveralCategory
    }
};

export default useMain;