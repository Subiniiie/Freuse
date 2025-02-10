import { create } from "zustand";

export interface ArticleInfo {
    id: number;
    title: string;
    content: string;
    updatedAt: string;
    username: string;
    detailedCategory: string;
    item: string;
}

interface CategoryListStore {
    articleList: ArticleInfo[];
    setArticleList: (articles: ArticleInfo[]) => void;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void; 
}

const useCategoryListStroe = create<CategoryListStore>((set) => ({
    articleList: [],
    setArticleList: (articles) => set({ articleList: articles }),
    isLoading: false,
    setIsLoading: (isLoading) => set({ isLoading: isLoading }),
}));

export default useCategoryListStroe;