import { Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeParamList } from "src/navigates/HomeNavigator";
import useCommon from "../Auth/Common/useCommon";
import axios from "axios";
import { useCallback } from "react";
import Config from "react-native-config";
import useCategoryListStroe from "../../store/Home/CategoryListStore";

type HomeScreennavigationProps = StackNavigationProp<HomeParamList, keyof HomeParamList>;

const useMain = () => {
    const openFreitagWebsite = () => {
        Linking.openURL("https://media.freitag.ch/ko/media/bags");
    };

    const Navigation = useNavigation<HomeScreennavigationProps>();

    const { getToken } = useCommon();
    const api_url = Config.API_URL;

    const { setArticleList, isLoading, setIsLoading } = useCategoryListStroe();

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
    };

    const getCategoryArticlesScreen = () => {

    };

    const getCategoryArticles = useCallback(async (title: String) => {
        if (isLoading) return;
        setIsLoading(true);

        try { 
            const token = await getToken();
            const response = await axios.get(
                `${api_url}/api/community/category`,
                {
                    params: {
                        keyword: title
                    },
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            setArticleList(response.data);
            getCategoryArticlesScreen();
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('에러', {
                    message: error.message,
                    response: error.response?.data,
                    status: error.response?.status
                })
            }
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        openFreitagWebsite,
        goSeveralCategory,
        getCategoryArticles
    }
};

export default useMain;