import { useCallback, useEffect, useState, useRef } from "react";
import { SignUpFormData } from "../../../types/SignUpData";
import axios from "axios";
import Config from "react-native-config";

const useSignup = () => {
    const [ formData, setFormData ] = useState<SignUpFormData>({
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    });

    const handleChange = useCallback((field: keyof SignUpFormData) => (text: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: text
        }));
    }, []);

    useEffect(() => {
    }, [formData]);

    const getValueIndex = (index: number): string => {
        switch(index) {
            case 0: return formData.username;
            case 1: return formData.email;
            case 2: return formData.password;
            case 3: return formData.confirmPassword;
            default: return '';
        }
    };

    const getFieldIndex = (index: number): keyof SignUpFormData => {
        switch(index) {
            case 0: return 'username';
            case 1: return 'email';
            case 2: return 'password';
            case 3: return 'confirmPassword';
            default: throw new Error(`Invalid index: ${index}`);
        }
    };

    const submitSignupForm = () => {
        // const response = axios.post(`${API_URL}/user/signup`)
        console.log(Config.API_URL)
    };
 
    return {
        handleChange,
        getValueIndex,
        getFieldIndex,
        submitSignupForm
    }
};

export default useSignup;