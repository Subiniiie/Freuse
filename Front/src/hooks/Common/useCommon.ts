import React from "react";
import useArticleUpdate from "../Community/ArticleUpdate/useArticleUpdate";


const useCommon = () => {
    const { goArticleUpdateScreen } = useArticleUpdate();


    const decideBtn = (title: string) => {
        if (title === "수정") {
            goArticleUpdateScreen();
        }
    };
    
    return {
        decideBtn
    }
}

export default useCommon;