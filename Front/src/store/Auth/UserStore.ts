import { create } from "zustand";

interface UserInfo {
    username: string;
    setUsername: (text: any) => void;
    email: string;
    setEmail: (text: any) => void;
};

const useUserStore = create<UserInfo>((set) => ({
    username: '',
    setUsername: (text) => set({ username: text }),
    email: '',
    setEmail: (text) => set({email: text}),
}))

export default useUserStore;