import React from 'react'
import articleItemBtnsData from '../../../../data/Community/ArticleItemBtnsData'
import CommonBtn from '../../../../components/atoms/Common/CommonBtn'
import useArticleUpdate from '../../../../hooks/Community/ArticleUpdate/useArticleUpdate'

export default function ArticleItemBtns() {

    const { goArticleUpdateScreen, submitArticleDelete } = useArticleUpdate();

    return (
        articleItemBtnsData.map((data) => (
            <CommonBtn 
                key={data.id} 
                title={data.title} 
                onPress={data.id === 1 ? goArticleUpdateScreen : submitArticleDelete}
            />
        ))
    )
}
