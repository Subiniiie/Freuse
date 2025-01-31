import { create } from "zustand";
import { ArticleInfo } from "./ArticleListStore";

interface ArticleItemStore {
    articleItem: ArticleInfo | null;
    setArticleItem: (artiel: ArticleInfo) => void;
}

const useArticleItemStore = create<ArticleItemStore>((set) => ({
    articleItem: null,
    setArticleItem: (article) => set({ articleItem: article })
}));

export default useArticleItemStore;