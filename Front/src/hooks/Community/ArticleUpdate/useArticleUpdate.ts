import { useState, useCallback } from "react";
import { ArticleUpdateFormData } from "../../../types/Community/ArticleUpdateData";
import { StackNavigationProp } from "@react-navigation/stack";
import { CommunityParamList } from "src/navigates/CommunityNavigator";
import { useNavigation } from "@react-navigation/native";

type ArticleUpdateScreenNavigationProps = StackNavigationProp<CommunityParamList, "ArticleUpdate">;

const useArticleUpdate = () => {

    const navigation = useNavigation<ArticleUpdateScreenNavigationProps>();

    const [ formData, setFormData ] = useState<ArticleUpdateFormData>({
        // 기존에 저장된 값 불러와야함
        title: '',
        content: ''
    });

    const handleUpdateChange = useCallback((field: keyof ArticleUpdateFormData) => (text: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: text
        }));
    }, []);

    const goArticleUpdateScreen = () => {
        navigation.navigate("ArticleUpdate")
    }

    return {
        formData,
        handleUpdateChange,
        goArticleUpdateScreen
    }
}

export default useArticleUpdate;