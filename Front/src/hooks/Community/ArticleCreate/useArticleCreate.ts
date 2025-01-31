import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import { ArticleCreateFormData } from "../../../types/Community/ArticleCreateData";
import axios from "axios";
import Config from 'react-native-config';
import * as KeyChain from 'react-native-keychain';
import useUserStore from "../../../store/Auth/UserStore";

type ImageType = {
    uri: string;
    id: string;
};

const useArticleCreate = () => {
    const { username } = useUserStore();

    const [ images, setImages ] = useState<ImageType[]>([]);
    const [ formdata, setFormData ] = useState<ArticleCreateFormData>({
        username: username,
        title: '',
        content: ''
    });

    const api_url = Config.API_URL
    const TOKEN_SERVICE = 'AUTH_SERVICE';

    const getToken = async (): Promise<string | null> => {
        try {
            const credentials = await KeyChain.getGenericPassword({
                service: TOKEN_SERVICE
            });

            if (credentials) {
                return credentials.password;
            }
            return null;
        } catch (error) {
            console.log('Failed to get token : ', error);
            return null;
        }
    };

    const handleChange = useCallback((field: keyof ArticleCreateFormData) => (text: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: text
        }));
    }, []);

    useEffect(() => {
    }, [formdata])

    const submitArticleCreateForm = async () => {
        try {
            const token = await getToken();
            const response = await axios.post(
                `${api_url}/api/community/create`,
                formdata,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            setFormData({
                username: username,
                title: '',
                content: ''
            })
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
        };
    };

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