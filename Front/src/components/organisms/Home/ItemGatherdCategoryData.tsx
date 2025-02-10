import React from 'react'
import { Text } from '@react-navigation/elements'
import useCategoryListStroe from '../../../store/Home/CategoryListStore'
import ItemData from '../../atoms/Home/ItemData';


export default function ItemGatherdCategoryData() {
    const { articleList } = useCategoryListStroe();

    return (
        <>
            {articleList ? (
                Object.entries(articleList).map(([key, data]) => (
                    <ItemData key={key} data={data}/>
                ))
            ) : (
                <Text>게시물이 없습니다.</Text>
            )}
        </>
    )
}
