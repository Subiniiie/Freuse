import { Text } from '@rneui/themed'
import React from 'react'
import CommunityStyles from '../../../../styles/Community/CommunityStyles'
import { ArticleData } from '../../../../types/Community/ArticleData'
import { View } from 'react-native';

export interface ArticleProps {
    article: ArticleData;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <View style={CommunityStyles.articleListContainer}>
        <Text>{article.title}</Text>
        <View style={CommunityStyles.articleUserInfoContainer}>
            <Text>{article.username}</Text>
            <Text>{article.updatedAt}</Text>
        </View>
    </View>
  )
}

export default Article;