import { create } from "zustand";

interface UserInfo {
    username: string;
    setUsername: (text: any) => void;
    email: string;
    setEmail: (text: any) => void;
    id: number;
    setId: (id: number) => void;
};

const useUserStore = create<UserInfo>((set) => ({
    username: '',
    setUsername: (text) => set({ username: text }),
    email: '',
    setEmail: (text) => set({email: text}),
    id: 0,
    setId: (id) => set({ id }),
}))

export default useUserStore;