import axios from "axios";
import Config from "react-native-config";
import useCommon from "../../../hooks/Auth/Common/useCommon";
import useCommonStore from "../../../store/Common/CommonStore";
import { StackNavigationProp } from "@react-navigation/stack";
import { CommunityParamList } from "src/navigates/CommunityNavigator";
import { useNavigation } from "@react-navigation/native";
import React from "react";

type ArticleItemScreenProps = StackNavigationProp<CommunityParamList, "ArticleItem">;

interface getArticleItemProps {
    id: number;
}

const useArticleItem = () => {

    const api_url = Config.API_URL;

    const { getToken } = useCommon();
    const { setIsLoading, setError } = useCommonStore.getState();

    const navigation = useNavigation<ArticleItemScreenProps>();


    const getArticleItem = async (id: number) => {
        
        setIsLoading(true);
        setError(null);
        
        try {
            const token = await getToken();
            console.log('상세페이지 정보 가져오기 시도', token, api_url, id)
            const response = await axios.get(
                `${api_url}/api/community/${id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            console.log('게시물 상세 정보 가져오기', response.data)
            navigation.navigate("ArticleItem")
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || error.message);
            } else {
                setError('알 수 없는 에러가 발생했습니다.')
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        getArticleItem
    }
}

export default useArticleItem;