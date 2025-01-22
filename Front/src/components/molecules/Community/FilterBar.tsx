import React from 'react'
import { View } from 'react-native'
import Filter from '../../atoms/Community/Main/Filter'
import CategoryBtn from '../../atoms/Community/Main/CategoryBtn'
import ColorBtn from '../../atoms/Community/Main/ColorBtn'
import CommunityStyles from '../../../styles/Community/CommunityStyles'

export default function FilterBar() {
  return (
    <View style={CommunityStyles.communityBarContainer}>
      <Filter />
      <CategoryBtn />
      <ColorBtn />
    </View>
  )
}