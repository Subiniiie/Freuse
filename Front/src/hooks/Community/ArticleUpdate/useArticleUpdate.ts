import { useState, useCallback, useEffect } from "react";
import { ArticleUpdateFormData } from "../../../types/Community/ArticleUpdateData";
import { StackNavigationProp } from "@react-navigation/stack";
import { CommunityParamList } from "src/navigates/CommunityNavigator";
import { useNavigation } from "@react-navigation/native";
import useArticleItemStore from "../../../store/Community/ArticleItemStore";
import useCommon from "../../Auth/Common/useCommon";
import axios from "axios";
import Config from 'react-native-config';

type ArticleUpdateScreenNavigationProps = StackNavigationProp<CommunityParamList, "ArticleUpdate">;

const useArticleUpdate = () => {

    const navigation = useNavigation<ArticleUpdateScreenNavigationProps>();    
    const { articleItem } = useArticleItemStore();
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
            console.log('api 요청 성공', response.data)
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
    
    }

    return {
        formData,
        handleUpdateChange,
        goArticleUpdateScreen,
        submitArticleUpdateForm
    }
}

export default useArticleUpdate;