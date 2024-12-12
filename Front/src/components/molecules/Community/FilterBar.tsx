import React from 'react'
import { View } from 'react-native'
import Filter from '../../atoms/Community/Filter'
import CategoryBtn from '../../atoms/Community/CategoryBtn'
import ColorBtn from '../../atoms/Community/ColorBtn'
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