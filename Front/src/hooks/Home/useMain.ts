import { Linking } from "react-native";

const useMain = () => {
    const openFreitagWebsite = () => {
        Linking.openURL("https://media.freitag.ch/ko/media/bags");
    };

    return {
        openFreitagWebsite
    }
};

export default useMain;