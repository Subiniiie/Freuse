import { useCallback, useEffect, useState, useRef } from "react";
import { SignUpFormData } from "../../../types/SignUpData";

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
        console.log('formdata 확인', formData);
    };
 
    return {
        handleChange,
        getValueIndex,
        getFieldIndex,
        submitSignupForm
    }
};

export default useSignup;