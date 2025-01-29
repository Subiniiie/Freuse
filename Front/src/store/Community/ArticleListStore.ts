import { create } from "zustand";

interface ArticleInfo {
    id: number;
    title: string;
    content: string;
    createAt: string;
    updatedAt: string;
}

interface ArticleListStore {
    articleList: ArticleInfo[];
    setArticleList: (articles: ArticleInfo[]) => void;
    addArticle: (article: ArticleInfo) => void;
    updateArticle: (id: number, updatedArticle: Partial<ArticleInfo>) => void;
    removeArticle: (id: number) => void;
}

const useArticleListStore = create<ArticleListStore>((set) => ({
    articleList: [],
    setArticleList: (articles) => set({ articleList: articles }),
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