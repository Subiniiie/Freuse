export interface SignUpData {
    id: number;
    title: string;
}

export interface SignUpFormData {
    username: string;
    password: string;
    email: string;
    profileImage: string | null;
}

export interface SignUpFormDataCheck {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
}