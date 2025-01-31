import { useEffect } from "react";
import * as KeyChain from "react-native-keychain";
import useCommonStore from "../../../store/Common/CommonStore";

const useCommon = () => {

    const TOKEN_SERVICE = 'AUTH_SERVICE';

    const { error } = useCommonStore();

    useEffect(() => {
        if (error !== null) {
            console.log('error :', error)
        }
    }, [error]);

    const getToken = async (): Promise<string | null> => {
        try {
            const credentials = await KeyChain.getGenericPassword({
                service: TOKEN_SERVICE
            });

            if (credentials) {
                return credentials.password;
            }
            return null;
        } catch ( error) {
            console.log('Failed to get token : ', error);
            return null;
        }
    };

    return {
        getToken
    }
}

export default useCommon;