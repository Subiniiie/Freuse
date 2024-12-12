import React from 'react'
import { ScrollView } from 'react-native'
import CommunityStyles from '../../../styles/Community/CommunityStyles'
import FilterBar from '../../molecules/Community/FilterBar'


export default function CommunityMain() {
  return (
    <ScrollView contentContainerStyle={CommunityStyles.contentContainer}>
        <FilterBar />
    </ScrollView>
  )
}