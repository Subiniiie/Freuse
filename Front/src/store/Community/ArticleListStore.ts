import { create } from "zustand";

export interface ArticleInfo {
    id: number;
    title: string;
    content: string;
    username: string;
    createdAt: string;
    updatedAt: string;
}

interface ArticleListStore {
    isLoading: boolean;
    articleList: ArticleInfo[];
    error: string | null;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setArticleList: (articles: ArticleInfo[]) => void;
    addArticle: (article: ArticleInfo) => void;
    updateArticle: (id: number, updatedArticle: Partial<ArticleInfo>) => void;
    removeArticle: (id: number) => void;
}

const useArticleListStore = create<ArticleListStore>((set) => ({
    isLoading: false,
    articleList: [],
    error: null,
    setArticleList: (articles) => set({ articleList: articles }),
    setLoading: (loading) => set({ isLoading: loading }),
    setError: (error) => set({ error }),
    addArticle: (article) => 
        set((state) => ({ articleList: [...state.articleList, article] })),
    updateArticle: (id, updatedArticle) =>
        set((state) => ({
            articleList: state.articleList.map((article) => 
            article.id === id ? { ...article, ...updatedArticle } : article
        ),
    })),
    removeArticle: (id) =>
        set((state) => ({
            articleList: state.articleList.filter((article) => article.id !== id),
        })),
}));

export default useArticleListStore;