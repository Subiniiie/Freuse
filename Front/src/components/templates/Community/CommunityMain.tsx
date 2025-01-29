import React, { useCallback, useEffect } from 'react'
import { ScrollView } from 'react-native'
import CommunityStyles from '../../../styles/Community/CommunityStyles'
import FilterBar from '../../molecules/Community/FilterBar'
import WriteBtn from '../../atoms/Community/Main/WriteBtn'
import useCommunityMain from '../../../hooks/Community/Main/useCommunityMain'
import { useFocusEffect } from '@react-navigation/native'

export default function CommunityMain() {
  const { getArticleList } = useCommunityMain();

  useFocusEffect(
    useCallback(() => {
      getArticleList();
    }, [])
  );

  return (
    <>
      <ScrollView contentContainerStyle={CommunityStyles.contentContainer}>
          <FilterBar />
      </ScrollView>
      {/* 화면에 고정되어야 함 -> 스크롤 되면 안됨 -> ScrollView 밖에 위치 */}
      <WriteBtn />
    </>
  )
}