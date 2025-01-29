import axios from "axios"
import Config from "react-native-config"
import * as KeyChain from "react-native-keychain"

const useCommunityMain = () => {

    const api_url = Config.API_URL;
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

    const getArticleList = async () => {
        try {
            const token = await getToken();
            console.log('요청 보내기 전', token, api_url)
            const response = await axios.get(
                `${api_url}/api/community`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            console.log('article 목록 가져오기 성공', response.data)
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
        getArticleList
    }
}

export default useCommunityMain;