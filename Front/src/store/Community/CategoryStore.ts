import { create } from "zustand";

interface CategoryState {
    value: string;
    setValue: (value: string | ((prev: string) => string)) => void;
    detailedValue: string;
    setDetailedValue: (detailedValue: string | ((prev: string) => string)) => void;
}

const useCategoryStore = create<CategoryState>((set) => ({
    value: "",
    setValue: (value) => set((state) => ({
        value: typeof value === "function" ? value(state.value) : value
    })),
    detailedValue: "",
    setDetailedValue: (detailedValue) => set((state) => ({
        detailedValue: typeof detailedValue === "function" ? detailedValue(state.value) : detailedValue
    })),
}));

export default useCategoryStore;