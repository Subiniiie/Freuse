import { View, Image } from 'react-native'
import React from 'react'
import CommunityStyles from '../../../styles/Community/CommunityStyles'

export default function Filter() {
  return (
      <Image 
        source={require('../../../public/images/Community/filter.png')} 
        style={CommunityStyles.filterBtn}
      />
  )
}
