import React from 'react'
import { ScrollView } from 'react-native'
import CommunityStyles from '../../../styles/Community/CommunityStyles'
import FilterBar from '../../molecules/Community/FilterBar'
import WriteBtn from '../../atoms/Community/Main/WriteBtn'

export default function CommunityMain() {
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