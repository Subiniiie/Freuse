import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import { ArticleCreateFormData } from "../../../types/Community/ArticleCreateData";

type ImageType = {
    uri: string;
    id: string;
};

const useArticleCreate = () => {
    const [ images, setImages ] = useState<ImageType[]>([]);
    const [ formdata, setFormData ] = useState<ArticleCreateFormData>({
        title: '',
        content: ''
    });

    const handleChange = useCallback((field: keyof ArticleCreateFormData) => (text: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: text
        }));
    }, []);

    useEffect(() => {
        console.log('formData 실시간 확인', formdata)
    }, [formdata])

    const submitArticleCreateForm = async () => {
        console.log('formData확인', formdata)
    }

    const handleSelectImages = () => {
        if (images.length >= 10) {
            Alert.alert('알림', '이미지는 최대 10장까지 선택할 수 있습니다.');
            return;
        }

    launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 10 - images.length,
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: true,
    }, (response) => {
        if (response.assets) {
            const newImages = response.assets.map(assets => ({
                uri: assets.uri!,
                id: Date.now().toString() + Math.random().toString(),
            }));
            setImages(prev => [...prev, ...newImages]);
        }
    });
};

    return {
        formdata,
        handleChange,
        handleSelectImages,
        submitArticleCreateForm
    }
}

export default useArticleCreate;