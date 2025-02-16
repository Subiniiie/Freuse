import axios from "axios";
import useCommon from "../Auth/Common/useCommon";
import Config from "react-native-config";
import useUserStore from "../../store/Auth/UserStore";

const useMain = () => {
    const { getToken } = useCommon();
    const { id, setProfileUrl } = useUserStore();
    const api_url = Config.API_URL;

    const getUserInfo = async () => {
        try {
            const token = await getToken();
            const response = await axios.get(
                `${api_url}/api/user/signup/${id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            console.log('유저 정보 들고 오기', response.data)
            setProfileUrl(response.data.profileImageUrl);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('에러', {
                    message: error.response?.data?.message,
                    status: error.response?.status
                })
            }
        }
    };


    return {
        getUserInfo
    }
}

export default useMain;