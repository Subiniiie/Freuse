import React from 'react'
import useArticleItemStore from '../../../../store/Community/ArticleItemStore';
import ItemData from '../../../atoms/Community/ArticleItem/ItemData';
import { Text } from '@react-navigation/elements';

export default function ItemGatherdData() {
    const { articleItem } = useArticleItemStore();

    return (
        <>
            {articleItem ? (
                Object.entries(articleItem).map(([Key, data]) => (
                    <ItemData key={Key} data={data} />
                ))
            ) : (
                <Text>게시물이 없습니다.</Text>
            )}
        </>
    )
}
