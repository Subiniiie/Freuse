import useLoginStore from "../../store/Auth/AuthStore";

const useUser = () => {
    const { setCheckLogin } = useLoginStore();

    const handlePress = (name: string) => {
        if (name === "로그아웃") {
            handleLogout();
        }
    };

    const handleLogout = () => {
        setCheckLogin();
    } 
    return {
        handlePress
    }
}

export default useUser;