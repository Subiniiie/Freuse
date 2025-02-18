import { useEffect } from "react"
import axios from "axios"
import Config from "react-native-config"
import * as KeyChain from "react-native-keychain"
import useArticleListStore from "../../../store/Community/ArticleListStore"

const useCommunityMain = () => {

    const api_url = Config.API_URL;
    const TOKEN_SERVICE = 'AUTH_SERVICE';  

    const { setArticleList, articleList } = useArticleListStore();

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

    useEffect(() => {
    }, [articleList])

    const getArticleList = async () => {
        const { setLoading, setError } = useArticleListStore.getState();
        setLoading(true);
        setError(null);

        try {
            const token = await getToken();
            console.log('니가 안되는거임?', token)
            const response = await axios.get(
                `${api_url}/api/community`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            setArticleList(response.data);
            console.log('게시물 목록 불러오기')
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('에러', {
                    message: error.response?.data,
                    status: error.response?.status
                })
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