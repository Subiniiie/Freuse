import axios from "axios"
import Config from "react-native-config"
import * as KeyChain from "react-native-keychain"
import useArticleListStore from "../../../store/Community/ArticleListStore"

const useCommunityMain = () => {

    const api_url = Config.API_URL;
    const TOKEN_SERVICE = 'AUTH_SERVICE';  

    const { setArticleList } = useArticleListStore();

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
        const { setLoading, setError } = useArticleListStore.getState();
        setLoading(true);
        setError(null);

        try {
            const token = await getToken();
            const response = await axios.get(
                `${api_url}/api/community`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            setArticleList(response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || error.message);
            } else {
                setError('알 수 없는 에러가 발생했습니다.')
            }
        } finally {
            setLoading(false);
        }
    };

    return {
        getArticleList
    }
}

export default useCommunityMain;