import React from 'react'
import { ArticleInfo } from '../../../store/Home/CategoryListStore'
import { Text } from '@react-navigation/elements';

interface ItemDataProps {
    data: ArticleInfo;
}

export default function ItemData({ data }: ItemDataProps) {
  return (
    <Text>{data.title}</Text>
  )
}
