import React from 'react'
import articleItemBtnsData from '../../../../data/Community/ArticleItemBtnsData'
import CommonBtn from '../../../../components/atoms/Common/CommonBtn'
import useCommon from '../../../../hooks/Common/useCommon'
export default function ArticleItemBtns() {

    const { decideBtn } = useCommon();

    return (
        articleItemBtnsData.map((data) => (
            <CommonBtn 
                key={data.id} 
                title={data.title} 
                onPress={decideBtn}
            />
        ))
    )
}
