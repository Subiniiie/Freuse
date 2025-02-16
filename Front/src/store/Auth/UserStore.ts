import { create } from "zustand";

interface UserInfo {
    username: string;
    setUsername: (text: any) => void;
    email: string;
    setEmail: (text: any) => void;
    id: number;
    setId: (id: number) => void;
    profileUrl: string;
    setProfileUrl : (text: string) => void;
};

const useUserStore = create<UserInfo>((set) => ({
    username: '',
    setUsername: (text) => set({ username: text }),
    email: '',
    setEmail: (text) => set({email: text}),
    id: 0,
    setId: (id) => set({ id }),
    profileUrl: '',
    setProfileUrl: (text: string) => set({ profileUrl: text })

}))

export default useUserStore;