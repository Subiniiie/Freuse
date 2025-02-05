import { useState, useCallback, useEffect } from "react";
import { Alert } from "react-native";
import { ArticleUpdateFormData } from "../../../types/Community/ArticleUpdateData";
import { StackNavigationProp } from "@react-navigation/stack";
import { CommunityParamList } from "src/navigates/CommunityNavigator";
import { useNavigation } from "@react-navigation/native";
import useArticleItemStore from "../../../store/Community/ArticleItemStore";
import useCommon from "../../Auth/Common/useCommon";
import axios from "axios";
import Config from 'react-native-config';
import useArticleListStore from "../../../store/Community/ArticleListStore";


type ArticleUpdateScreenNavigationProps = StackNavigationProp<CommunityParamList, "ArticleUpdate", "ArticleItem">;

const useArticleUpdate = () => {

    const navigation = useNavigation<ArticleUpdateScreenNavigationProps>();    
    const { articleItem, setArticleItem } = useArticleItemStore();
    const { updateArticle, removeArticle } = useArticleListStore();

    const { getToken } = useCommon();
    const api_url = Config.API_URL

    const [ formData, setFormData ] = useState<ArticleUpdateFormData>({
        // 기존에 저장된 값 불러와야함
        username: '',
        title: '',
        content: ''
    });

    useEffect(() => {
        if (articleItem) {
            setFormData({
                username: articleItem.username || '',
                title: articleItem.title || '',
                content: articleItem.content || ''
            })
        }
    }, [articleItem]);

    useEffect(() => {
    }, [formData])

    const handleUpdateChange = useCallback((field: keyof ArticleUpdateFormData) => (text: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: text
        }));
    }, []);

    const goArticleUpdateScreen = () => {
        navigation.navigate("ArticleUpdate")
    }

    const submitArticleUpdateForm = async () => {
        try { 
            const token = await getToken();
            const response = await axios.put(
                `${api_url}/api/community/${articleItem?.id}`,
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            if (articleItem?.id) {
                updateArticle(articleItem?.id, formData)
                navigation.navigate("ArticleItem")
                setArticleItem(response.data)
                console.log('api 요청 성공', response.data)
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('에러', {
                    message: error.message,
                    response: error.response?.data,
                    status: error.response?.status
                });
            } else {
                console.log('알 수 없는 에러', error)
            }
        }
    };

    const submitArticleDelete = async () => {
        try {
            const token = await getToken();
            const response = await axios.delete(
                `${api_url}/api/community/${articleItem?.id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            if (articleItem?.id) {
                removeArticle(articleItem?.id)
                navigation.navigate("CommunityMain")
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('에러', {
                    message: error.message,
                    response: error.response?.data,
                    status: error.response?.status
                });
            } else {
                console.log('알 수 없는 에러', error)
            }
        }
    };

    const submitArticleDeleteForm = async () => {
        Alert.alert(
            "삭제 요청",
            "게시물을 삭제하시겠습니까?",
            [
                {
                    text: "예",
                    onPress: () => {
                        submitArticleDelete();
                    }
                },
                {
                    text: "아니요",
                    onPress: () => {}
                }
            ]
        )
    };

    return {
        formData,
        handleUpdateChange,
        goArticleUpdateScreen,
        submitArticleUpdateForm,
        submitArticleDeleteForm
    }
}

export default useArticleUpdate;