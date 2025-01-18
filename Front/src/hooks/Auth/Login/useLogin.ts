import { useEffect, useState, useCallback } from "react";
import { LogInFormData } from "src/types/Auth/LogInData";

const useLogin = () => {
    // 로그인 폼
    const [ formData, setFormData ] = useState<LogInFormData>({
        email: '',
        password: ''
    })

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

    return {
        handleChange,
        getValueIndex,
        getFieldIndex
    }
};

export default useLogin;