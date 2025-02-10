import React from 'react'
import { ArticleInfo } from '../../../store/Home/CategoryListStore'
import { Text } from '@react-navigation/elements';
import { TouchableOpacity } from 'react-native';
import useArticleItem from '../../../hooks/Community/Main/useArticleItem';

interface ItemDataProps {
    data: ArticleInfo;
}

export default function ItemData({ data }: ItemDataProps) {
  const { getArticleItem } = useArticleItem();

  return (
    <TouchableOpacity onPress={() => getArticleItem(data.id)}>
      <Text>{data.title}</Text>
    </TouchableOpacity>
  )
}
