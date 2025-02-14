import { useCallback, useEffect, useState } from "react";
import { SignUpFormData, SignUpFormDataCheck } from "../../../types/Auth/SignUpData";
import axios from "axios";
import Config from "react-native-config";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList } from "src/navigates/AuthNavigator";
import { launchImageLibrary, launchCamera, CameraOptions, MediaType } from "react-native-image-picker";

type LoginScreenNavigationProps = StackNavigationProp<AuthParamList, "Login">;

type Props = {
    navigation: LoginScreenNavigationProps;
};

const useSignup = () => {
    // 회원가입 폼
    const [ formData, setFormData ] = useState<SignUpFormData>({
        username: '',
        password: '',
        email: '',
        profileImage: null,
    });

    const [ temporaryFormData, setTempporaryFormData ] = useState<SignUpFormDataCheck>({
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    })

    const [ profileImage, setProfileImage ] = useState<string | null>(null);

    const navigation = useNavigation<LoginScreenNavigationProps>();

    const options: CameraOptions = {
        mediaType: 'photo' as MediaType,
        maxWidth: 500,
        maxHeight: 500,
        quality: 0.8,
        saveToPhotos: true,
    };

    // 회원가입 완료 모달
    const [visible, setVisible ] = useState<boolean>(false);

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

    const takePhoto = async () => {
        try {
            const result = await launchCamera(options);
            if (result.didCancel) return;
            if (result.assets && result.assets.length > 0) {
                const imageUri = result.assets[0].uri || null;
                setProfileImage(imageUri);
                setFormData((prev) => ({
                    ...prev,
                    profileImage: imageUri,
                }));
            }
        } catch (error) {
            console.log('Error taking photo : ', error);
        }
    };

    const selectFromGallery = async () => {
        try {
             const result = await launchImageLibrary(options);
             if (result.didCancel) return;
             if (result.assets && result.assets.length > 0) {
                const imageUri = result.assets[0].uri || null;
                setProfileImage(imageUri);
                setFormData((prev) => ({
                    ...prev,
                    profileImage: imageUri,
                }));
             }
        } catch (error) {
            console.log('Error selecting photo: ', error);
        }
    };

    const selectProfileImage = () => {
        Alert.alert(
            '프로필 이미지 선택',
            '이미지를 선택하는 방법을 선택하세요.',
            [
                {
                    text: '카메라로 촬영',
                    onPress: takePhoto,
                },
                {
                    text: '갤러리에서 선택',
                    onPress: selectFromGallery,
                },
                {
                    text: '취소',
                    style: 'cancel',
                },
            ],
            { cancelable: true }
        );
    };

    // 회원가입 api 연결
    const api_url = Config.API_URL

    const submitSignupForm = async () => {
        try {
            const response = await axios.post(
                `${api_url}/api/user/signup`,
                formData, 
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            setVisible(true);
            setTimeout(() => {
                setFormData({
                    username: "",
                    password: "",
                    email: "",
                    profileImage: null
                });
                setTempporaryFormData({
                    username: "",
                    password: "",
                    confirmPassword: "",
                    email: ""
                });
                setVisible(false);
                navigation.navigate("Login");
            }, 500);
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
 
    return {
        handleChange,
        getValueIndex,
        getFieldIndex,
        submitSignupForm,
        selectProfileImage,
        visible
    }
};

export default useSignup;