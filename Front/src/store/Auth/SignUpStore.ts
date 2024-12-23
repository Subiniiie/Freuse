import { create } from "zustand";

interface SubmitSignUp {
    submitSignUp: boolean;
    setSubmitSignUp: () => void;
};

const useSignUp = create<SubmitSignUp>((set) => ({
    submitSignUp: false,
    setSubmitSignUp: () => set((state) => ({ submitSignUp: !state.submitSignUp })) 
}))

export default useSignUp;