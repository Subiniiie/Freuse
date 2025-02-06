import { create } from "zustand";

interface CategoryState {
    value: string;
    setValue: (value: string | ((prev: string) => string)) => void;
}

const useCategoryStore = create<CategoryState>((set) => ({
    value: "",
    setValue: (value) => set((state) => ({
        value: typeof value === "function" ? value(state.value) : value
    })),
}));

export default useCategoryStore;