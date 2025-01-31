import { create } from "zustand";

interface CommonStore {
    isLoading: boolean;
    error: string | null;
    setIsLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

const useCommonStore = create<CommonStore>((set) => ({
    isLoading: false,
    error: null,
    setIsLoading: (loading) => set({ isLoading: loading }),
    setError: (error) => set({ error })
}))

export default useCommonStore;