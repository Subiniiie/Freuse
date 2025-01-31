import * as KeyChain from "react-native-keychain";
import useLoginStore from "../../store/Auth/AuthStore";
import useUserStore from "../../store/Auth/UserStore";

const useUser = () => {
    const { setCheckLogin } = useLoginStore();
    const { setUsername, setEmail } = useUserStore();

    const TOKEN_SERVICE = 'AUTH_SERVICE';

    const handlePress = (name: string) => {
        if (name === "로그아웃") {
            handleLogout();
        }
    };

    // JWT 토큰 삭제
    const removeToken = async (): Promise<boolean> => {
        try {
            await KeyChain.resetGenericPassword({
                service: TOKEN_SERVICE
            });
            return true;
        } catch (error) {
            console.log('Failed to remove token:', error);
            return false;
        }
    };

    const handleLogout = async (): Promise<void> => {
        try {
            const isTokenRemoved = await removeToken();
            if (isTokenRemoved) {
                setCheckLogin();
                setUsername("");
                setEmail("");
                console.log('토큰 삭제가 완료되었습니다.')
            } else {
                console.log('토큰 삭제에 실패했습니다.')
            }
        } catch (error) {
            console.log('로그아웃에 실패했습니다.')
        }
    } 
    return {
        handlePress
    }
}

export default useUser;