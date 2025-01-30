import React, { useCallback, useEffect } from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import CommunityStyles from '../../../styles/Community/CommunityStyles'
import FilterBar from '../../molecules/Community/FilterBar'
import WriteBtn from '../../atoms/Community/Main/WriteBtn'
import useCommunityMain from '../../../hooks/Community/Main/useCommunityMain'
import { useFocusEffect } from '@react-navigation/native'
import useArticleListStore from '../../../store/Community/ArticleListStore'
import { Text } from '@rneui/themed'

export default function CommunityMain() {
  const { getArticleList } = useCommunityMain();
  const { articleList, isLoading, error } = useArticleListStore();

  useFocusEffect(
    useCallback(() => {
      getArticleList();
    }, [])
  );

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  };

  if (error) {
    return <Text>{error}</Text>
  };

  return (
    <>
      <ScrollView contentContainerStyle={CommunityStyles.contentContainer}>
          <FilterBar />
          {articleList.map((article, index) => (
            <Text key={article.id}>{article.title}</Text>
          ))}
      </ScrollView>
      {/* 화면에 고정되어야 함 -> 스크롤 되면 안됨 -> ScrollView 밖에 위치 */}
      <WriteBtn />
    </>
  )
}