import { useState, useCallback, useEffect } from "react";
import { ArticleUpdateFormData } from "../../../types/Community/ArticleUpdateData";
import { StackNavigationProp } from "@react-navigation/stack";
import { CommunityParamList } from "src/navigates/CommunityNavigator";
import { useNavigation } from "@react-navigation/native";
import useArticleItemStore from "../../../store/Community/ArticleItemStore";


type ArticleUpdateScreenNavigationProps = StackNavigationProp<CommunityParamList, "ArticleUpdate">;

const useArticleUpdate = () => {

    const navigation = useNavigation<ArticleUpdateScreenNavigationProps>();    
    const { articleItem } = useArticleItemStore();


    const [ formData, setFormData ] = useState<ArticleUpdateFormData>({
        // 기존에 저장된 값 불러와야함
        title: '',
        content: ''
    });

    useEffect(() => {
        if (articleItem) {
            setFormData({
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
        console.log('수정 전 확인', formData)
    }

    return {
        formData,
        handleUpdateChange,
        goArticleUpdateScreen,
        submitArticleUpdateForm
    }
}

export default useArticleUpdate;