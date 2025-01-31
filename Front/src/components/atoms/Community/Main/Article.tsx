import { Text } from '@rneui/themed'
import React from 'react'
import CommunityStyles from '../../../../styles/Community/CommunityStyles'
import { ArticleData } from '../../../../types/Community/ArticleData'
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useArticleItem from '../../../../hooks/Community/Main/useArticleItem';

export interface ArticleProps {
    article: ArticleData;
}

const Article: React.FC<ArticleProps> = ({ article }) => {

  const { getArticleItem } = useArticleItem();

  return (
    <TouchableOpacity onPress={() => getArticleItem(article.id)}>
      <View style={CommunityStyles.articleListContainer}>
          <Text>{article.title}</Text>
          <View style={CommunityStyles.articleUserInfoContainer}>
              <Text>{article.username}</Text>
              <Text>{article.updatedAt}</Text>
          </View>
      </View>
    </TouchableOpacity>
  )
}

export default Article;