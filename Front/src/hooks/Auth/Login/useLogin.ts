import { useEffect, useState, useCallback } from "react";
import { LogInFormData } from "../../../types/Auth/LogInData";
import axios from "axios";
import Config from "react-native-config";
import useLoginStore from "../../../store/Auth/AuthStore";
import useUserStore from "../../../store/Auth/UserStore";
import * as KeyChain from "react-native-keychain";

const useLogin = () => {
    const { setCheckLogin } = useLoginStore();
    const { setUsername, setEmail } = useUserStore();

    const TOKEN_USERNAME = 'AUTH_TOKEN';
    const TOKEN_SERVICE = 'AUTH_SERVICE';

    // 로그인 폼
    const [ formData, setFormData ] = useState<LogInFormData>({
        email: '',
        password: ''
    });

    // JWT 토큰 저장
    const storeToken = async (token: string): Promise<boolean> => {
        try {
            await KeyChain.setGenericPassword(TOKEN_USERNAME, token, {
                accessControl: KeyChain.ACCESS_CONTROL.BIOMETRY_ANY,
                accessible: KeyChain.ACCESSIBLE.WHEN_UNLOCKED,
                service: TOKEN_SERVICE
            });
            console.log('JWT 토큰 저장 완료')
            return true;
        } catch (error) {
            console.log('Failed to store token, error');
            return false
        }
    };

    const handleChange = useCallback((field: keyof LogInFormData) => (text: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: text
        }));
    }, []);

    useEffect(() => {
    }, [formData])

    const getValueIndex = (index: number): string => {
        switch(index) {
            case 0: return formData.email;
            case 1: return formData.password;
            default: return '';
        }
    };

    const getFieldIndex = (index: number): keyof LogInFormData => {
        switch(index) {
            case 0: return 'email';
            case 1: return 'password';
            default: throw new Error(`Invalid index: ${index}`)
        }
    };

    // 로그인 api 연결
    const api_url = Config.API_URL

    const submitLoginForm = async () => {
        try {
            const response = await axios.post(
                `${api_url}/api/user/login`,
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            console.log('성공', response.data);
            setCheckLogin();
            setFormData({
                email: "",
                password: ""
            })
            setUsername(response.data.username)
            setEmail(response.data.email)
            const tokenStored = await storeToken(response.data.token)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('에러', {
                    message: error.message,
                    reponse: error.response?.data,
                    status: error.response?.status
                });
            } else {
                console.log('알 수 없는 에러', error)
            }
        };
    };




    return {
        handleChange,
        getValueIndex,
        getFieldIndex,
        submitLoginForm
    }
};

export default useLogin;