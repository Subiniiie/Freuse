import { useCallback, useEffect, useState } from "react";
import { SignUpFormData, SignUpFormDataCheck } from "../../../types/SignUpData";
import axios from "axios";
import Config from "react-native-config";

const useSignup = () => {
    // 회원가입 폼
    const [ formData, setFormData ] = useState<SignUpFormData>({
        username: '',
        password: '',
        email: ''
    });

    const [ temporaryFormData, setTempporaryFormData ] = useState<SignUpFormDataCheck>({
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    })

    const handleChange = useCallback((field: keyof SignUpFormDataCheck) => (text: string) => {
        setTempporaryFormData(prev => ({
            ...prev,
            [field]: text
        }));

        if (field !== 'confirmPassword') {
            setFormData(prev => ({
                ...prev,
                [field]: text
            }));
        }
    }, []);

    useEffect(() => {
    }, [formData]);

    const getValueIndex = (index: number): string => {
        switch(index) {
            case 0: return temporaryFormData.username;
            case 1: return temporaryFormData.email;
            case 2: return temporaryFormData.password;
            case 3: return temporaryFormData.confirmPassword;
            default: return '';
        }
    };

    const getFieldIndex = (index: number): keyof SignUpFormDataCheck => {
        switch(index) {
            case 0: return 'username';
            case 1: return 'email';
            case 2: return 'password';
            case 3: return 'confirmPassword';
            default: throw new Error(`Invalid index: ${index}`);
        }
    };

    // 회원가입 api 연결
    const api_url = Config.API_URL

    const submitSignupForm = () => {
        console.log('formdata 확인', formData)
        const response = axios.post(
            `${api_url}/user/signup`,
            formData, 
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then((res) => {
            console.log('성공', res)
        })
        .catch((res) => {
            console.log('에러', res)
        })
    };
 
    return {
        handleChange,
        getValueIndex,
        getFieldIndex,
        submitSignupForm
    }
};

export default useSignup;