import { create } from 'zustand';

interface LoginState {
    checkLogin: boolean;
    setCheckLogin: () => void;
};

const useLoginStore = create<LoginState>((set) => ({
    checkLogin: false,
    setCheckLogin: () => set((state) => ({ checkLogin: !state.checkLogin})),
}))

export default useLoginStore;