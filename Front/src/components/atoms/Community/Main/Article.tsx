import { Text } from '@rneui/themed'
import React from 'react'
import CommunityStyles from '../../../../styles/Community/CommunityStyles'
import { ArticleData } from '../../../../types/Community/ArticleData'
import { View, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CommunityParamList } from 'src/navigates/CommunityNavigator';
import { useNavigation } from '@react-navigation/native';

export interface ArticleProps {
    article: ArticleData;
}

type ArticleNavigationProps = StackNavigationProp<CommunityParamList, "ArticleItem">;

const Article: React.FC<ArticleProps> = ({ article }) => {
  const navigation = useNavigation<ArticleNavigationProps>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ArticleItem")}>
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