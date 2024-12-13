import React from 'react'
import ArticleBtn from '../../atoms/Mypage/ArticleBtn'
import userArticleData from '../../../data/Mypage/UserArticleData'
import { FlatList } from 'react-native'

export default function ArticleBtns() {
  return (  
    <FlatList 
        data={userArticleData}
        renderItem={({ item }) => <ArticleBtn data={item} />}
        keyExtractor={(item) => item.id.toString()}
    />
  )
}
